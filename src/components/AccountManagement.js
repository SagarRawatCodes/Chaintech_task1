import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

// Define functional component AccountManagement
const AccountManagement = () => {

  // State to store user login data
  const [logindata, setLoginData] = useState([]);

  // useHistory hook for programmatic navigation
  const history = useNavigate();

  // State to control the visibility of the birthday modal
  const [show, setShow] = useState(false);

  // Get the current date in ISO format
  const todayDate = new Date().toISOString().slice(0, 10);

  // Close the modal
  const handleClose = () => setShow(false);

  // Open the modal
  const handleShow = () => setShow(true);

  // Function to check if it's the user's birthday and display the modal
  const Birthday = () => {
    // Retrieve user data from local storage
    const getuser = localStorage.getItem("user_login");

    // Parse user data if present
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);
      setLoginData(user);
    }

    // Check if the user's birthday matches the current date
    const userbirth = logindata.map((el) => el.date === todayDate);

    // If it's the user's birthday, display the modal after a delay
    if (userbirth) {
      setTimeout(() => {
        console.log("ok");
        handleShow();
      }, 3000);
    }
  };

  // Function to handle user logout
  const userlogout = () => {
    localStorage.removeItem("user_login");
    history("/");
  };

  // useEffect hook to call Birthday function on component mount
  useEffect(() => {
    Birthday();
  }, []);

  // Render JSX
  return (
    <>
      {/* Check if login data is present, else display an error */}
      {logindata && logindata.length === 0 ? "error" : (
        <>
          {/* Account Management Page Header */}
          <h1>Account Management Page</h1>

          {/* Display user's name */}
          <h1>{logindata[0].name}</h1>

          {/* Logout Button */}
          <Button onClick={userlogout}>LogOut</Button>

          {/* Check if it's the user's birthday and display the birthday modal */}
          {logindata[0].date === todayDate ? (
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{logindata[0].name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>Wish you many many happy returns of the day</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          ) : ""}
        </>
      )}
    </>
  );
};

// Export the AccountManagement component
export default AccountManagement;

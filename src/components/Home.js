import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Sign_img from './Sign_img';
import { NavLink } from 'react-router-dom';

// Define functional component Home
const Home = () => {
  // State to manage input values (name, email, date, password)
  const [inpval, setInpval] = useState({
    name: " ",
    email: " ",
    date: " ",
    password: " "
  });

  // State to store user data
  const [data, setData] = useState([]);

  // Log input values for debugging
  console.log(inpval);

  // Handle input change and update state accordingly
  const getdata = (e) => {
    const { value, name } = e.target;
    setInpval(() => ({
      ...inpval,
      [name]: value
    }));
  };

  // Handle form submission
  const addData = (e) => {
    e.preventDefault();

    // Destructure input values
    const { name, email, date, password } = inpval;

    // Validate input fields
    if (name === "") {
      alert("Name field is required");
    } else if (email === "") {
      alert("Email field is required");
    } else if (!email.includes("@")) {
      alert("Please enter a valid email address");
    } else if (date === "") {
      alert("Date field is required");
    } else if (password === "") {
      alert("Password field is required");
    } else if (password.length < 5) {
      alert("Password length should be greater than 5");
    } else {
      // Display success message and add data to local storage
      console.log("Data added successfully!");
      localStorage.setItem("userData", JSON.stringify([...data, inpval]));
    }
  };

  // Render JSX
  return (
    <>
      <div className='container mt-3'>
        <section className='d-flex justify-content-between'>
          {/* Left side of the registration page */}
          <div className="left-data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className='text-center col-lg-6'>Register</h3>
            <Form>
              {/* Input field for user's name */}
              <Form.Group className="mb-3 col-lg-6" controlId='formBasicEmail'>
                <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" />
              </Form.Group>

              {/* Input field for user's email */}
              <Form.Group className="mb-3 col-lg-6" controlId='formBasicEmail'>
                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter Email" />
              </Form.Group>

              {/* Input field for user's date of birth */}
              <Form.Group className="mb-3 col-lg-6" controlId='formBasicEmail'>
                <Form.Control onChange={getdata} name='date' type="date" />
              </Form.Group>

              {/* Input field for user's password */}
              <Form.Group className='mb-3 col-lg-6' controlId='formBasicPassword'>
                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
              </Form.Group>

              {/* Button to submit the form */}
              <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67,185,127)" }} type="submit">
                Submit
              </Button>
            </Form>

            {/* Navigation link to login page */}
            <p className="mt-3">Already Have an Account? <span><NavLink to="/login">LogIn</NavLink></span></p>
          </div>

          {/* Right side of the registration page displaying an image */}
          <Sign_img />
        </section>
      </div>
    </>
  );
};

// Export the Home component
export default Home;

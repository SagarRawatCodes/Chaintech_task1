import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Sign_img from './Sign_img';
import { NavLink, useNavigate } from 'react-router-dom';

// Define functional component Login
const Login = () => {

  // useHistory hook for programmatic navigation
  const history = useNavigate();

  // State to manage input values (email and password)
  const [inpval, setInpval] = useState({
    email: " ",
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

    // Retrieve stored user data from local storage
    const getuserArr = localStorage.getItem("userData");

    // Validate email and password
    const { email, password } = inpval;
    if (email === "") {
      alert("Email field is required");
    } else if (!email.includes("@")) {
      alert("Please enter a valid email address");
    } else if (password === "") {
      alert("Password field is required");
    } else if (password.length < 5) {
      alert("Password length should be greater than 5");
    } else {
      // Check if stored user data is available
      if (getuserArr && getuserArr.length) {
        const ourData = JSON.parse(getuserArr);

        // Filter user data based on input credentials
        const userLogin = ourData.filter((el, k) => {
          return el.email === email && el.password === password;
        });

        // Handle invalid login details
        if (userLogin.length === 0) {
          alert("Invalid details");
        } else {
          // Display success message and navigate to Account Management page
          console.log("User login successful");
          localStorage.setItem("user_login", JSON.stringify(userLogin));
          history("/AccountManagement");
        }
      }
    }
  };

  // Render JSX
  return (
    <>
      <div className='container mt-3'>
        <section className='d-flex justify-content-between'>
          {/* Left side of the login page */}
          <div className="left-data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className='text-center col-lg-6'>Log In</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId='formBasicEmail'>
                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter Email" />
              </Form.Group>
              <Form.Group className='mb-3 col-lg-6' controlId='formBasicPassword'>
                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
              </Form.Group>
              <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67,185,127)" }} type="submit">
                Submit
              </Button>
            </Form>
            <p className="mt-3">Don't have an account?<span><NavLink to="/">Register</NavLink></span></p>
          </div>

          {/* Right side of the login page displaying an image */}
          <Sign_img />
        </section>
      </div>
    </>
  );
};

// Export the Login component
export default Login;

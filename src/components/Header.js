import React from 'react';

// Importing Navbar component from react-bootstrap
import Navbar from 'react-bootstrap/Navbar';

// Importing Container and Nav components from react-bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

// Define functional component Header
const Header = () => {
  // Render JSX
  return (
    <>
      {/* Navbar component with a dark background and Bootstrap theme */}
      <Navbar bg="dark" data-bs-theme="dark">
        {/* Container component for responsive layout */}
        <Container>
          {/* Brand link in the Navbar */}
          <Navbar.Brand href="#home">User Registration</Navbar.Brand>

          {/* Navigation links aligned to the right */}
          <Nav className="me-auto">
            {/* Home navigation link */}
            <Nav.Link href="#home">Home</Nav.Link>
            
            {/* Logout navigation link */}
            <Nav.Link href="/">Log out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

// Export the Header component
export default Header;

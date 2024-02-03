import React from 'react';
import { useNavigate } from 'react-router-dom';

// Define functional component Error
const Error = () => {

    // useHistory hook for programmatic navigation
    const history = useNavigate();

    // Render JSX
    return (
        <>
            <div className="container">
                <div className="error d-flex flex-column justify-content-lg-center align-items-center">
                    {/* Display 404 error message */}
                    <h4>404 Error! Page Not Found 😭</h4>

                    {/* Button to redirect to the Login Page */}
                    <button className='btn btn-primary' onClick={() => history("/")}>Redirect to Login Page</button>
                </div>
            </div>
        </>
    );
};

// Export the Error component
export default Error;

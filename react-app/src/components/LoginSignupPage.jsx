import React, { useState } from 'react';

import "./LoginSignupPage.css"
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';



const LoginSignupPage = () => {
    const [action, setAction] = useState("Log In");
    const navigate = useNavigate();

    const handleExit = () => {
        navigate('/'); // Navigate to the home page or any other route
    };
    return (
        <div className="wrapper">
            <FontAwesomeIcon
                icon={faTimes}
                className="exit-icon"
                onClick={handleExit}
            />
            <h1>Login/Signup</h1>
            <form action="">
                <h1>{action}</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required />
                    {/* <FaUser className="icon" /> */}

                </div>
                {action === "Log In" ? <div></div> : <div className="input-box">
                    <input type="email" placeholder='email' required />
                    {/* <MdEmail className="icon" /> */}
                </div>}



                <div className="input-box">
                    <input type="password" placeholder='Password' required />
                    {/* <FaLock className="icon" /> */}
                </div>


                {action === "Sign Up" ? <div></div> : <div className="remember-forgot">
                    <label> <input type="checkbox" />Remeber me</label>
                    <a className='tt'> Forgot Password?</a>
                </div>}
                {action === "Log In" ? <div></div> : <div>
                    <button type="submit">Sign-Up</button>
                </div>
                }
                {action === "Sign Up" ? <div></div> : <div>
                    <button type="submit">Log-In</button>
                </div>}

                {action === "Sign Up" ? <div className="register-link">
                    <p>Already have an account? </p>
                    <a className={action == "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Log In") }} >Login</a>
                </div> : <div></div>}
                {action === "Log In" ? <div className="register-link">
                    <p>Don't have an account? </p>
                    <a className={action == "Log In" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Register</a>
                </div> : <div></div>}

            </form>
            {/* <LoginSignupForm /> */}
        </div>
    );
};

export default LoginSignupPage;


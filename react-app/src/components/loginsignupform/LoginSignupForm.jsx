import React, { useState } from 'react';
import './LoginSignupForm.css';
// import { FaUser, FaLock } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";


const LoginSignupForm = () => {
    const [action, setAction] = useState("Log In");

    return (
        <div className='wrapper'>
            <form action="">
                <h1>{action}</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required />
{/*                     <FaUser className="icon" /> */}

                </div>
                {action === "Log In" ? <div></div> : <div className="input-box">
                    <input type="email" placeholder='email' required />
{/*                     <MdEmail className="icon" /> */}
                </div>}



                <div className="input-box">
                    <input type="password" placeholder='Password' required />
{/*                     <FaLock className="icon" /> */}
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
        </div>
    );
};

export default LoginSignupForm;

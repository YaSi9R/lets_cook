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
            <img src={process.env.PUBLIC_URL + '/Login_page1.png'} alt="Let's_Cook_logo" className="Login-background_image" />


            <div className='Wrapper-header'>



                <svg class="inline-block w-9 h-9 mr-1" viewBox="0 0 520 600" role="img" xmlns="http://www.w3.org/2000/svg">
                    <path d="M462.3 31.6C407.5 -15.1 326 -6.7 275.7 45.2L256 65.5L236.3 45.2C186.1 -6.7 104.5 -15.1 49.7 31.6C-13.1 
                      85.2 -16.4 181.4 39.8 239.5L233.3 439.3C245.8 452.2 266.1 452.2 278.6 439.3L472.1 239.5C528.4 181.4 525.1 85.2 462.3 31.6V31.6Z"
                        fill="yellow">

                    </path>

                </svg>

                <span class="wrapper-header-span mr-1 font-Dancing" >Our Recipes, Your Inbox...
                <span class="wrapper-header-span inline-block">Login/Signup
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-right"
                        class="w-8 h-8 inline -mt-1" role="img"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M218.101 38.101L198.302 57.9c-4.686 4.686-4.686 12.284 0
                         16.971L353.432 230H12c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h341.432l-155.13 155.13c-4.686 4.686-4.686 12.284 0
                              16.971l19.799 19.799c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L235.071 38.101c-4.686-4.687-12.284-4.687-16.97 0z">

                        </path>
                    </svg>
                </span>
                </span>

            </div>


            <FontAwesomeIcon
                icon={faTimes}
                className="exit-icon"
                onClick={handleExit}
            />
            {/* <h1></h1> */}
            <div className='wrapper_form'>
                <form action="" >
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
            </div>

        </div>
    );
};

export default LoginSignupPage;


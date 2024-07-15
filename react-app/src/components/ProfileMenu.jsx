import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ProfileMenu.css'; // Make sure to import your CSS

const ProfileMenu = ({ to }) => {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    const handleMouseLeave = () => {
        setShowMenu(false);
    };

    return (
        <div className="profile_menu" ref={menuRef} onMouseLeave={handleMouseLeave}>
            <button onClick={toggleMenu} className="menu-button">
                <span className="material-icons text-white">
                    account_circle
                </span>
            </button>

            <ul className={`dropdown-menu ${showMenu ? 'show' : ''}`}>
                {/*                 <li className='justify-start'>
                    <Link className="dropdown-item" to="LogIn_Page" onClick={closeMenu}>
                        Log In
                        <span className="material-symbols-outlined pl-6">
                            how_to_reg
                        </span>
                    </Link>
                </li>
                <li className='justify-start'>
                    <Link className="dropdown-item" to="Register_Page" onClick={closeMenu}>
                        Register
                        <span className="material-symbols-outlined pl-4">
                            login
                        </span>
                    </Link>
                </li> */}
                <li className='justify-start'>
                    <Link className="dropdown-item" to="/" onClick={closeMenu}>
                        Home
                        <span className="material-symbols-outlined pl-4">
                            home
                        </span>
                    </Link>
                </li>

                <li className='justify-start'>
                    <Link className="dropdown-item" to="/InPage" onClick={closeMenu}>
                        Card
                        <span className="material-symbols-outlined pl-4">
                            home
                        </span>
                    </Link>
                </li>



                <li className='justify-start'>
                    <Link className="dropdown-item" to="/login-signup" onClick={closeMenu}>
                        Login/Signup
                        <span className="material-symbols-outlined pl-4">
                            login
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default ProfileMenu;

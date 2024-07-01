import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);

  };

  const closeMenu = () => {
    setShowMenu(false);
  };
  // const [open, setOpen] = useState(false);
  return (

    <nav className="header">

      <div className="navbar ">
        <div className="container-fluid">

          {/* This link is only for logo */}
          {/* <Link to="/" >
            <img src={process.env.PUBLIC_URL + '/Background.png'} alt="Lets_Cook_Logo" className="logo-navbar" />

          </Link>
          */}

          {/* It's fpr temporary show */}

          <a className="navbar-brand text-white cursor-pointer">LET'S COOK</a>



          <ul className=" navBar-Items md:flex hidden uppercase items-center gap-14 font-[Poppins]">
            <li>
              <Link to="/" className=" text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className=" text-white">
                Recipe's
              </Link>
            </li>
            <li>
              <Link to="/" className=" text-white">
                Article
              </Link>
            </li>
            <li>
              <Link to="/" className=" text-white">
                About Us
              </Link>
            </li>



          </ul>



          <form className="search_form d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search Recipe's" aria-label="Search" />
            <button className="btn btn-outline-success text-white" type="submit">Search</button>
          </form>



          <div className="profile_menu">
            <a href="#" onClick={toggleMenu}>
              <span className="material-symbols-outlined text-white">
                account_circle
              </span>
            </a>

            {showMenu && (
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="#" onClick={closeMenu}>Log In</Link></li>
                <li><Link className="dropdown-item" to="#" onClick={closeMenu}>Register</Link></li>
                {/* <li><Link className="dropdown-item" to="#" onClick={closeMenu}>Something else here</Link></li> */}
              </ul>
            )}
          </div>






          {/* <ProfileMenu /> */}


        </div>
      </div>





      <div className="section_background">

        <img src={process.env.PUBLIC_URL + '/Background_main1.png'} alt="Let's_Cook_logo" className="background_image" />


        <div class="text_block">
          <h1>The Easiest Way<br /> To Make Your<br /> Favourite Meal</h1>
          <p>Discover 1000+ recipes in your hand with the best recipe.<br />
            Help you to find the easiest way to cook.</p>
          {/* <button type="button" class="btn btn-success">Explore Recipes</button> */}
          <Link to="/explore-recipes" className=" btn btn-success w-[220px]" role="button">
            Explore Recipes
          </Link>


        </div>


      </div>
    </nav>
  );
};

export default Header;

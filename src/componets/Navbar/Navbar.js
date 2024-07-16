import React from 'react';
import './Navbar.css';
import logo from "../../Images/logo.png";
import user from "../../Images/User.png";
import megnify from "../../Images/Megnify.png";
import cart from "../../Images/Cart.png";


const Navbar = () => {
  return (
    <>
    <div className="Navbar">
      <div className="container">
        <div className="row">
          <div className="logo-div">
            <a href="/" className="logo">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="col-md-4">
            <ul className="nav">
              <li className="nav-item">
                <a href="/" className="nav-link ">
                  PRODUCTS
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  AIOT SOLUTION
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link" id='news'>
                  WHAT'S NEW
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  SUPPORT
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="social-media">
              <li>
                <a href="/" className="social-link">
                   <img src={megnify} alt="megnify" />
                </a>
              </li>
              <li>
                <a href="/" className="social-link">
                  <img src={user} alt ="user" />
                </a>
              </li>
              <li>
                <a href="/" className="social-link">
                  <img src={cart} alt ="cart" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;
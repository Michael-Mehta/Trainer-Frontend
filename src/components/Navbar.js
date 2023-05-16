import React from 'react';
import logo from './logo.png';

const Navbar = () => {
  return (
    <div className="navbar-container" >
        <img src = {logo} className='logo' alt = 'logo'/>
      <ul className= "navbar-items">
        <li><a>Home</a></li>
        <li><a>About Us</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
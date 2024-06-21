import React, { useState } from 'react';


function Header() {
  

  return (
    <header className="header">
      <a href="#">
        <img className="logo" alt="A-z logo" src={require("../assets/images/atoz..png")} />
      </a>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li><a className="main-nav-link" href="#how">Services</a></li>
          <li><a className="main-nav-link" href="#meals">How It Works</a></li>
          <li><a className="main-nav-link" href="#testimonials">Review</a></li>
          <li><a className="main-nav-link" href="#pricing">Pricing</a></li>
          <li><a className="main-nav-link nav-cta" href="#cta">Book Now</a></li>
        </ul>
      </nav>

      <button className="btn-mobile-nav">
        <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
        <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
        
      </button>
    </header>
  );
}

export default Header;

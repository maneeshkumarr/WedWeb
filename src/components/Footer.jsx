// Footer.js

import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container grid grid--footer footerflex">
        <div className="footerflexthis">
          <div className="logo-col">
            <div className="az-wed-ev">
              {" "}
              <h1 className="az">A-Z </h1> <br />
              <h2 className="wed">Wedding</h2>
              <br />
              <h3 class="ev">Event Management</h3>
              <br />
              <br />
              <br />
            </div>

            <ul className="social-links">
              <li>
                <a className="footer-link" href="#">
                  <ion-icon
                    className="social-icon"
                    name="logo-instagram"
                  ></ion-icon>
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  <ion-icon
                    className="social-icon"
                    name="logo-facebook"
                  ></ion-icon>
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  <ion-icon
                    className="social-icon"
                    name="logo-twitter"
                  ></ion-icon>
                </a>
              </li>
            </ul>

            <p className="copyright">
              Copyright &copy; <span className="year">2024</span> A-Z Wedding
              Services, Inc. All rights reserved.
            </p>
          </div>

          <div className="address-col">
            <p className="footer-heading">Contact us</p>
            <address className="contacts">
              <p className="address">
                ujire,Belthangady,Dakshina Kannada 574219
              </p>
              <p>
                <a className="footer-link" href="tel:9980764304">
                  9980764304
                </a>
                <br />
                <a className="footer-link" href="tel:8792489207">
                  8792489207
                </a>
                <br />
                <a className="footer-link" href="Weddingservices247@gmail.com">
                  Weddingservices247@gmail.com
                </a>
              </p>
            </address>
          </div>

          <nav className="nav-col">
            <p className="footer-heading">Account</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="#">
                  Create account
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Sign in
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  iOS app
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Android app
                </a>
              </li>
            </ul>
          </nav>

          <nav className="nav-col">
            <p className="footer-heading">Company</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Services
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  How it Works
                </a>
              </li>
            </ul>
          </nav>

          <nav className="nav-col">
            <p className="footer-heading">Resources</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="#">
                  A-Z Team
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Help center
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Privacy & terms
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="cont">
          <h1 className="webs">Web Architects</h1>
          <br />
          <h2>Maneesh Kumar</h2>
          <br />
          <h2>Prasanna V Bhat</h2>
          <br />

          <img
            src={require("../assets/images/classs/jodi.jpg")}
            className="meal-imgg"
            alt="Speak to Us"
          />
        </div>

      </div>
    </footer>
  );
}

export default Footer;

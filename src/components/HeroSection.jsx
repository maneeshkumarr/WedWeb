// HeroSection.js

import React from 'react';

function HeroSection() {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">
            From the moment you say 'Yes' to the moment you say 'I Do,' we take care of everything.
          </h1>
          <p className="hero-description">
            Experience the joy of wedding planning without the hassle. From initial consultations to the final send-off, our dedicated team is here to curate your dream wedding, leaving you with unforgettable memories that last a lifetime.
          </p>
          <a href="#cta" className="btn btn--full margin-right-sm">
            Start the process
          </a>
          <a href="#how" className="btn btn--outline">
            Learn more &darr;
          </a>
          <div className="delivered-meals">
            <div className="delivered-imgs">
              <img src={require("../assets/images/classs/prasanna.jpg")} alt="Customer photo" />
              <img src={require("../assets/images/classs/adarsh.jpg")} alt="Customer photo" />
              <img src={require("../assets/images/classs/shrajan.jpg")} alt="Customer photo" />
              <img src={require("../assets/images/classs/kiran.jpg")} alt="Customer photo" />
              <img src={require("../assets/images/classs/akshay.jpg")} alt="Customer photo" />
              <img src={require("../assets/images/classs/manish.jpg")} alt="Customer photo" />
            </div>
            <p className="delivered-text">
              <span>250,000+</span> meals delivered last year!
            </p>
          </div>
        </div>
        <div className="hero-img-box">
          <picture>
            <source srcSet={require("../assets/images/weddingss.webp")} type="image/webp" />
            <source srcSet={require("../assets/images/weddingss.webp")} type="image/webp" />
            <source srcSet={require("../assets/images/weddingss.webp")} type="image/png" />

            <img
              src={require("../assets/images/weddingss.webp")}
              className="hero-img"
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

// HowItWorks.js

import React from 'react';

function HowItWorks() {
  return (
    <section className="section-meals" id="meals">
      <div className="container center-text">
        <span className="subheading">How It Works</span>
        <h2 className="heading-secondary">
          5 easy steps for a hassle-free wedding
        </h2>
      </div>

      <div className="container grid grid--3-cols margin-bottom-md">
        {/* Step 01: Speak to Us */}
        <div className="meal">
          <img
            src={require("../assets/images/how it works/speak.jpg")}
            className="meal-img"
            alt="Speak to Us"
          />
          <div className="meal-content">
            <div className="meal-tags">
              <span className="tag tag--vegetarian">Speak to Us</span>
            </div>
            <p className="meal-title">Give your requirement & preferences to our wedding expert</p>
          </div>
        </div>

        {/* Step 02: See the Options */}
        <div className="meal">
          <img
            src={require("../assets/images/how it works/options.jpg")}
            className="meal-img"
            alt="See the Options"
          />
          <div className="meal-content">
            <div className="meal-tags">
              <span className="tag tag--vegetarian">See the Options</span>
            </div>
            <p className="meal-title">Get a walkthrough of our designs, pricing & services</p>
          </div>
        </div>

        {/* Step 03: Get Custom Package */}
        <div className="meal">
          <img
            src={require("../assets/images/how it works/package.jpg")}
            className="meal-img"
            alt="Get Custom Package"
          />
          <div className="meal-content">
            <div className="meal-tags">
              <span className="tag tag--vegetarian">Get Custom Package</span>
            </div>
            <p className="meal-title">Receive a customised package based on your requirement</p>
          </div>
        </div>

        {/* Step 04: Book Us */}
        <div className="meal">
          <img
            src={require("../assets/images/how it works/book.jpg")}
            className="meal-img"
            alt="Book Us"
          />
          <div className="meal-content">
            <div className="meal-tags">
              <span className="tag tag--vegetarian">Book Us</span>
            </div>
            <p className="meal-title">Pay a small booking fee to confirm once you are happy</p>
          </div>
        </div>

        {/* Step 05: Relax */}
        <div className="meal">
          <img
            src={require("../assets/images/how it works/relax.jpg")}
            className="meal-img"
            alt="Relax"
          />
          <div className="meal-content">
            <div className="meal-tags">
              <span className="tag tag--vegetarian">Relax</span>
            </div>
            <p className="meal-title">Sit back & relax while we do all the work</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

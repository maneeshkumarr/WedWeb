import React, { useState } from 'react';
import './Pricing.css'; // Ensure you have appropriate CSS styles defined here

function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({});

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleBackClick = () => {
    setSelectedPlan(null);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Store form data in local storage
    localStorage.setItem(selectedPlan, JSON.stringify(formData));
    // Clear the form after submission
    setFormData({});
    // Optionally, you can add a success message or redirect to another page
  };

  return (
    <section className="section-pricing" id="pricing">
      <div className="container">
        <span className="subheading">Pricing</span>
        <h2 className="heading-secondary">
          Wedding Event Management Plans
        </h2>
      </div>

      {selectedPlan ? (
        <div>
          <form onSubmit={handleFormSubmit}>
            <h2>{selectedPlan} Plan Details</h2>
            <div>
              <label>Full Name:</label>
              <input type="text" name="fullName" onChange={handleInputChange} required />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" name="email" onChange={handleInputChange} required />
            </div>
            {/* Add more fields as required for each plan */}
            <button type="submit">Submit</button>
            <button type="button" onClick={handleBackClick}>
              Back
            </button>
          </form>
        </div>
      ) : (
        <>
          <h1 className='advance'>ADVANCE</h1>
          <div className="container grid grid--3-cols margin-bottom-md">
            {/* Pricing Plan - Gold */}
            <div className="pricing-card">
              <header className="plan-header plan-header--gold">
                <p className="plan-name">Gold</p>
                <p className="plan-price"><span>Rs</span>34999</p>
              </header>
              <ul className="list">
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Venue selection assistance</span>
                </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Basic decoration setup</span>
                </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Wedding day coordination</span>
                </li>
              </ul>
              <div className="plan-sign-up">
                <button className="btn btn--full" onClick={() => handlePlanSelect('Gold')}>
                  Plan your wedding
                </button>
              </div>
            </div>

            {/* Pricing Plan - Platinum */}
            <div className="pricing-card">
              <header className="plan-header plan-header--platinum">
                <p className="plan-name">Platinum</p>
                <p className="plan-price"><span>Rs</span>49999</p>
              </header>
              <ul className="list">
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Venue selection and booking</span>
                </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Comprehensive decoration setup</span>
                </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Wedding day coordination</span>
                </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Photography and videography</span>
                </li>
              </ul>
              <div className="plan-sign-up">
                <button className="btn btn--full" onClick={() => handlePlanSelect('Platinum')}>
                  Plan your wedding
                </button>
              </div>
            </div>

            {/* Pricing Plan - Diamond */}
            <div className="pricing-card">
              <header className="plan-header plan-header--diamond">
                <p className="plan-name">Diamond</p>
                <p className="plan-price"><span>Rs</span>74999</p>
              </header>
              <ul className="list">
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Exclusive venue selection and booking</span>
                </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Luxury decoration setup</span>
                </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Wedding day coordination</span>
                </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Photography, videography, and live streaming</span>
                </li>
                <li className="list-item">
                  <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                  <span>Customized wedding planning services</span>
                </li>
              </ul>
              <div className="plan-sign-up">
                <button className="btn btn--full" onClick={() => handlePlanSelect('Diamond')}>
                  Plan your wedding
                </button>
              </div>
            </div>
          </div>

          <div className="container-grid">
            <aside className="plan-details">
              Prices include all applicable taxes. You can cancel at any time.
              All plans include the following:
            </aside>
          </div>

          <div className="container grid grid--4-cols">
            {/* Feature 01 */}
            <div className="feature">
              <ion-icon className="feature-icon" name="infinite-outline"></ion-icon>
              <p className="feature-title">Comprehensive planning</p>
              <p className="feature-text">
                Our team handles all aspects of the wedding planning process.
              </p>
            </div>
            {/* Feature 02 */}
            <div className="feature">
              <ion-icon className="feature-icon" name="nutrition-outline"></ion-icon>
              <p className="feature-title">Vendor coordination</p>
              <p className="feature-text">
                We work with top vendors to ensure a seamless event.
              </p>
            </div>
            {/* Feature 03 */}
            <div className="feature">
              <ion-icon className="feature-icon" name="leaf-outline"></ion-icon>
              <p className="feature-title">Attention to detail</p>
              <p className="feature-text">
                Every detail is meticulously planned and executed.
              </p>
            </div>
            {/* Feature 04 */}
            <div className="feature">
              <ion-icon className="feature-icon" name="pause-outline"></ion-icon>
              <p className="feature-title">Customizable packages</p>
              <p className="feature-text">
                Tailor our services to match your unique vision.
              </p>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Pricing;

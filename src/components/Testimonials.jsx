// Testimonials.js

import React from 'react';

function Testimonials() {
  return (
    <section className="section-testimonials" id="testimonials">
      <div className="testimonials-container">
        <span className="subheading">Review</span>
        <h2 className="heading-secondary">See What Our Customers Say About Us</h2>

        <div className="testimonials">
          {/* Testimonial 01 */}
          <figure className="testimonial">
            <img
              className="testimonial-img"
              alt="Photo of customer Dave Bryson"
              src={require("../assets/images/customers/dave.jpg")}
            />
            <blockquote className="testimonial-text">
              Our wedding day was absolutely perfect, thanks to the incredible team at A to Z wedding services. They took care of every detail, from the stunning decorations to the delicious catering. Highly recommended!
            </blockquote>
            <p className="testimonial-name">&mdash; Dave Bryson</p>
          </figure>

          {/* Testimonial 02 */}
          <figure className="testimonial">
            <img
              className="testimonial-img"
              alt="Photo of customer Ben Hadley"
              src={require("../assets/images/customers/ben.jpg")}
            />
            <blockquote className="testimonial-text">
              A to Z wedding services exceeded our expectations in every way. The venue was gorgeous, the entertainment kept everyone dancing all night, and the mehendi artist created the most beautiful designs.
            </blockquote>
            <p className="testimonial-name">&mdash; Ben Hadley</p>
          </figure>

          {/* Testimonial 03 */}
          <figure className="testimonial">
            <img
              className="testimonial-img"
              alt="Photo of customer Steve Miller"
              src={require("../assets/images/customers/steve.jpg")}
            />
            <blockquote className="testimonial-text">
              We couldn't have been happier with the services provided by A to Z wedding services. The decorations were elegant, and the catering was top-notch. Thank you for making our day so special!
            </blockquote>
            <p className="testimonial-name">&mdash; Steve Miller</p>
          </figure>

          {/* Testimonial 04 */}
          <figure className="testimonial">
            <img
              className="testimonial-img"
              alt="Photo of customer Hannah Smith"
              src={require("../assets/images/customers/hannah.jpg")}
            />
            <blockquote className="testimonial-text">
              Choosing A to Z wedding services for our wedding was the best decision we made. The team was friendly, and truly dedicated to making our wedding day amazing.
            </blockquote>
            <p className="testimonial-name">&mdash; Hannah Smith</p>
          </figure>
        </div>
      </div>

      <div className="gallery">
        <figure className="gallery-item">
          <img className="var" 
            src={require("../assets/images/var/stage.jpg")}
            alt="Photo of beautifully arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <img className="var" 
            src={require("../assets/images/var/chairs.jpg")}
            alt="Photo of beautifully arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <img className="var" 
            src={require("../assets/images/var/enter.jpg")}
            alt="Photo of beautifully arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <img className="var" 
            src={require("../assets/images/var/food.jpg")}
            alt="Photo of beautifully arranged food"
          />
        </figure>
        {/* Add more gallery items below */}
        <figure className="gallery-item">
          <img className="var" 
            src={require("../assets/images/var/food1.jpg")}
            alt="Photo of beautifully arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <img className="var" 
            src={require("../assets/images/var/food2.jpg")}
            alt="Photo of beautifully arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <img className="var" 
            src={require("../assets/images/var/hair.jpg")}
            alt="Photo of beautifully arranged food"
          />
        </figure>
        {/* Add more gallery items as needed */}
        <figure className="gallery-item">
          <img className="var" 
            src={require("../assets/images/var/inv.jpg")}
            alt="Photo of beautifully arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <img className="var" 
            src={require("../assets/images/var/photo1.jpg")}
            alt="Photo of beautifully arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <img className="var" 
            src={require("../assets/images/var/photo2.jpg")}
            alt="Photo of beautifully arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <img className="var" 
            src={require("../assets/images/var/Mehndi.webp")}
            alt="Photo of beautifully arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <img className="var" 
            src={require("../assets/images/var/vid.jpg")}
            alt="Photo of beautifully arranged food"
          />
        </figure>  
      </div>
    </section>
  );
}

export default Testimonials;

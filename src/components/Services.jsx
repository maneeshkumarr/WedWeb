// Services.js

import React from 'react';

function Services() {
  return (
    <main>
    <section className="section-how" id="how">
      <div className="container">
        <span className="subheading">services</span>
        <h2 className="heading-secondary">
          We Provide Value for Money Services
        </h2>
      </div>

      <div className="container grid grid--2-cols grid--center-v">
        {/* STEP 01: Decoration */}
        <div className="step-text-box">
          <p className="step-number">01</p>
          <h3 className="heading-tertiary">Decoration</h3>
          <p className="step-description">
            Transform your special day with our exquisite wedding decorations. From elegant floral arrangements to stunning lighting designs, we create the perfect ambiance to make your dream wedding a reality. Let us craft a magical setting for your unforgettable celebration.
          </p>
        </div>

        <div className="step-img-box">
          <img src={require("../assets/images/deco.jpg")} className="step-img" alt="Decoration" />
        </div>

        {/* STEP 02: Photography */}
        <div className="step-img-box">
          <img src={require("../assets/images/var/photo1.jpg")} className="step-img" alt="Photography" />
        </div>
        <div className="step-text-box">
          <p className="step-number">02</p>
          <h3 className="heading-tertiary">Photography</h3>
          <p className="step-description">
            Preserve the memories of your big day with our exceptional wedding photography. Our experienced photographers blend creativity with expertise to deliver stunning images that tell the story of your love. Treasure your wedding moments with our timeless photos.
          </p>
        </div>

        {/* STEP 03: Videography */}
        <div className="step-text-box">
          <p className="step-number">03</p>
          <h3 className="heading-tertiary">Videography</h3>
          <p className="step-description">
            Capture every precious moment of your wedding with our professional videography services. Our skilled videographers create beautiful, cinematic films that you can cherish forever. Relive your love story through our lens.
          </p>
        </div>
        <div className="step-img-box">
          <img src={require("../assets/images/var/vid.jpg")} className="step-img" alt="Videography" />
        </div>

        {/* STEP 04: Makeup and HairStyling */}
        <div className="step-img-box">
          <img src={require("../assets/images/var/style.jpg")} className="step-img" alt="Makeup and HairStyling" />
        </div>
        <div className="step-text-box">
          <p className="step-number">04</p>
          <h3 className="heading-tertiary">Makeup and HairStyling</h3>
          <p className="step-description">
            Look and feel your best on your wedding day with our expert makeup and hairstyling services. Our talented artists create flawless looks tailored to your style and preferences. Be the radiant bride you've always dreamed of being.
          </p>
        </div>

        {/* Repeat the above pattern for the remaining steps */}

        {/* STEP 05: Mehendi */}
        <div className="step-text-box">
          <p className="step-number">05</p>
          <h3 className="heading-tertiary">Mehendi</h3>
          <p className="step-description">
            Adorn your hands and feet with our intricate and beautiful mehendi designs. Our skilled mehendi artists create stunning patterns that reflect tradition and elegance. Add a touch of artistry to your wedding celebrations.
          </p>
        </div>
        <div className="step-img-box">
          <img src={require("../assets/images/var/Mehndi.webp")} className="step-img" alt="Mehendi" />
        </div>

        {/* STEP 06: Catering */}
        <div className="step-img-box">
          <img src={require("../assets/images/var/food2.jpg")} className="step-img" alt="Catering" />
        </div>
        <div className="step-text-box">
          <p className="step-number">06</p>
          <h3 className="heading-tertiary">Catering</h3>
          <p className="step-description">
            Delight your guests with our exquisite wedding catering services. From sumptuous multi-course meals to delectable desserts, we offer a culinary experience that will impress and satisfy. Enjoy a feast that complements your joyous occasion.
          </p>
        </div>

        {/* STEP 07: Entertainment */}
        <div className="step-text-box">
          <p className="step-number">07</p>
          <h3 className="heading-tertiary">Entertainment</h3>
          <p className="step-description">
            Make your wedding memorable with our top-notch entertainment services. Whether it's live bands, DJs, dancers, or other performers, we provide captivating entertainment that keeps the celebration lively and fun. Create unforgettable moments for you and your guests.
          </p>
        </div>
        <div className="step-img-box">
          <img src={require("../assets/images/var/enter.jpg")} className="step-img" alt="Entertainment" />
        </div>

        {/* STEP 08: Venue */}
        <div className="step-img-box">
          <img src={require("../assets/images/var/stage.jpg")} className="step-img" alt="Venue" />
        </div>
        <div className="step-text-box">
          <p className="step-number">08</p>
          <h3 className="heading-tertiary">Venue</h3>
          <p className="step-description">
            Find the perfect setting for your wedding with our venue selection services. We offer a range of beautiful and unique locations to match your vision and style. Let us help you choose the ideal backdrop for your special day.
          </p>
        </div>

      </div>
    </section>
    </main>
  );
}

export default Services;

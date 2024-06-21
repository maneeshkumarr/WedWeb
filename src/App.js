import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedIn from './components/FeaturedIn';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import './assets/css/general.css';
import './assets/css/style.css';
import './assets/css/queries.css';

function App() {
  return (


    
    <>


<div className="App">
      {/* Links */}
      <link rel="icon" href="img/favicon.png" />
      <link rel="apple-touch-icon" href="img/apple-touch-icon.png" />
      <link rel="manifest" href="manifest.webmanifest" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="css/general.css" />
      <link rel="stylesheet" href="css/style.css" />
      <link rel="stylesheet" href="css/queries.css" />

      {/* Scripts */}
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule=""
        src="https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.js"
      ></script>
      <script
        defer
        src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"
      ></script>
      <script defer src="js/script.js"></script>

      {/* Your application content goes here */}
    </div>
      <Header />
      <HeroSection />
      <FeaturedIn />
      <Services />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}

export default App;

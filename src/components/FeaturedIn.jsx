// FeaturedIn.js

import React from 'react';

function FeaturedIn() {
  return (
    <section className="section-featured">
      <div className="container">
        <h2 className="heading-featured-in">As featured in</h2>
        <div className="logos">
          <img src={require("../assets/images/logos/techcrunch.png")} alt="Techcrunch logo" />
          <img src={require("../assets/images/logos/business-insider.png")} alt="Business Insider logo" />
          <img src={require("../assets/images/logos/the-new-york-times.png")} alt="The New York Times logo" />
          <img src={require("../assets/images/logos/forbes.png")} alt="Forbes logo" />
          <img src={require("../assets/images/logos/usa-today.png")} alt="USA Today logo" />
        </div>
      </div>
    </section>
  );
}

export default FeaturedIn;

import React from "react";
import "./HeaderBody.css";

const HeaderBody = () => {
  return (
    <div className="img-body">
      <div className="img-container">
        <div className="hero-content">
          <h1>
            PERFUME <br />
            <span>SALE EVENT</span>
          </h1>
          <p>
            Shop for stylish earrings, pendants, bracelets & more from top
            brands. Buy now! Easy & Fast Delivery. Best Deals. Great Offers. Top
            Brands. Huge Selection. Low Prices. No Cost EMI Available.
          </p>
          <button className="hero-btn" onClick={() => window.scrollTo(0, 500)}>
            Shop Now
          </button>
        </div>
        <img
          style={{ objectFit: "cover", height: "70vh", margin: "2rem 0" }}
          src="/Images/newBody1.png"
          alt="main"
          className="hero-img"
        />
      </div>
    </div>
  );
};

export default HeaderBody;

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
          style={{ objectFit: "cover", height: "80vh" }}
          src="https://images.unsplash.com/photo-1587305138714-9675ed5c9415?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80"
          alt="main"
          className="hero-img"
        />
      </div>
    </div>
  );
};

export default HeaderBody;

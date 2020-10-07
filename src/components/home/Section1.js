import React from "react";
import "./section1.css";

const Section1 = () => {
  return (
    <div className="section1-container">
      <div className="section1-subContainer">
        <div className="section1-box">
          <img
            className="box-img"
            src="https://images.unsplash.com/photo-1503328427499-d92d1ac3d174?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            alt="categories"
          />
          <h2 className="box-content">Accessories</h2>
        </div>
        <div className="section1-box">
          <img
            className="box-img"
            src="https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            alt="categories"
          />
          <h2 className="box-content">Women</h2>
        </div>
        <div className="section1-box">
          <img
            className="box-img"
            src="https://images.unsplash.com/photo-1416339698674-4f118dd3388b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80"
            alt="categories"
          />
          <h2 className="box-content">Men</h2>
        </div>
      </div>
    </div>
  );
};

export default Section1;

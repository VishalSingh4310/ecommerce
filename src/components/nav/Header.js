import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <div className="sub-container">
        <div className="left-header">
          <img
            style={{ borderRadius: "50%", width: "10vh", height: "10vh" }}
            src="https://images.unsplash.com/photo-1602024902590-5ad79a22219f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            alt="logo"
          />
        </div>
        <div className="right-header">
          <a href="">Login</a> / <a href="">SignUp</a>
          <br />
          <input />
        </div>
      </div>
      <div className="strip">
        <div className="inner-strip">
          <ul className="strip-container">
            <li>MEN</li>
            <li>WOMEN</li>
            <li>ACCESSORIES</li>
            <li>NEW ARRIVALS</li>
            <li>COLLECTIONS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

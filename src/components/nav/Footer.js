import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-subContainer">
        <div className="box">
          <ul>
            <li>Blog</li>
            <li>Product Index</li>
          </ul>
        </div>

        <div className="box">
          <ul>
            <li>Terms and Conditions</li>
            <li>Category Index</li>
          </ul>
        </div>
        <div className="box">
          <ul>
            <li>Become an Alliance</li>
          </ul>
        </div>
        {/* <div className="box"></div> */}
        <div className="box">
          <ul>
            <li>
              <span className="heading">Become an Alliance</span>
            </li>
            <li className="tags">
              <span>insta</span>
              <span>facebook</span>
              <span>twitter</span>
            </li>
            <li>
              <span className="heading">MAILING LIST</span>
              <br />
              <div className="form">
                <input className="submit-input" placeholder="Email Address" />
                <button className="submit-btn">GO</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

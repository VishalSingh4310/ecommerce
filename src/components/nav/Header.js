import React, { useEffect, useState, useRef } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import { BrowserRouter as Router, Link } from "react-router-dom";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [height, setHeight] = useState(0);
  const ref = useRef(null);
  const handleScroll = () => {
    const offset = window.scrollY;
    // console.log(offset);
    if (offset - height >= 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    setHeight(ref.current.clientHeight);
  });
  window.addEventListener("scroll", handleScroll);
  const menuHandler = () => {
    var element = document.getElementById("myDIV");
    element.classList.toggle("mobile-menu");
  };
  return (
    <div className="container">
      <div className="sub-container" ref={ref}>
        <div className="header-cont">
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
        <IconButton onClick={menuHandler} id="menu-icon">
          <MenuIcon />
        </IconButton>
      </div>
      <div className={scrolled ? "strip scrolled" : "strip"} id="myDIV">
        <div className="inner-strip">
          <ul className="strip-container">
            <Router>
              <Link to="/Men Wear">
                <li>MEN</li>
              </Link>

              <Link to="/Women Wear">
                <li>WOMEN</li>
              </Link>
              <Link to="/Accessories">
                <li>ACCESSORIES</li>
              </Link>
              <Link to="/Laptop">
                <li>NEW ARRIVALS</li>
              </Link>
              <Link to="/Mobile">
                <li>SMARTPHONES</li>
              </Link>
            </Router>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

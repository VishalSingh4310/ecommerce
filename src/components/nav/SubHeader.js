import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import "./Header.css";

const useStyles = makeStyles({
  root: {
    color: "#d2d2d2",
  },
  links: {
    color: "#d2d2d2",
    "& .makeStyles-links-2": {
      color: "#fff",
      fontWeight: 600,
    },
  },
});

const SubHeader = () => {
  const classes = useStyles();
  const [scrolled, setScrolled] = useState(false);
  const [height, setHeight] = useState(0);
  const ref = useRef(null);
  const handleScroll = () => {
    const offset = window.scrollY;
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
  return (
    <div className={scrolled ? "strip scrolled" : "strip"} id="myDIV" ref={ref}>
      <div
        className="inner-strip"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <ul className="strip-container" style={{ margin: 0 }}>
          <Link to="/" className={classes.links}>
            <li>HOME</li>
          </Link>
          <Link to="/Men Wear" className={classes.links}>
            <li>MEN</li>
          </Link>

          <Link to="/Women Wear" className={classes.links}>
            <li>WOMEN</li>
          </Link>
          <Link to="/Accessories" className={classes.links}>
            <li>ACCESSORIES</li>
          </Link>
          <Link to="/Laptop" className={classes.links}>
            <li>NEW ARRIVALS</li>
          </Link>
          <Link to="/Smartphones" className={classes.links}>
            <li>SMARTPHONES</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SubHeader;

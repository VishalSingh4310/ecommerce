import React, { useEffect, useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton, makeStyles, fade, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { grey, amber } from "@material-ui/core/colors";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    background: grey[200],
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    // width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "20px",
      background: "transparent",
    },
    marginTop: "0.5rem",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "#333",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const menuHandler = () => {
    var element = document.getElementById("myDIV");
    element.classList.toggle("mobile-menu");
  };
  return (
    <div className="container">
      <div className="sub-container">
        <div className="header-cont">
          <div className="left-header">
            <img
              style={{ borderRadius: "50%", width: "10vh", height: "10vh" }}
              src="https://images.unsplash.com/photo-1602024902590-5ad79a22219f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              alt="logo"
            />
          </div>
          <div className="right-header">
            <div
              style={{
                justifyContent: "flex-end",
                display: "flex",
                alignItems: "center",
                paddingRight: "1rem",
              }}
            >
              <PersonOutlineOutlinedIcon style={{ color: amber[600] }} />
              <span>
                <a href="" style={{ color: "#333" }}>
                  Login
                </a>{" "}
                /{" "}
                <a href="" style={{ color: "#333" }}>
                  SignUp
                </a>
              </span>
            </div>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon style={{ color: amber[600] }} />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </div>
        </div>
        <IconButton onClick={menuHandler} id="menu-icon">
          <MenuIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;

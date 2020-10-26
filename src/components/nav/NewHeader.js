import React from "react";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Avatar from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import { grey, amber, orange } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { useDispatch, useSelector } from "react-redux";
import * as AuthActions from "../../store/actions/auth";
import { useHistory } from "react-router-dom";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 8,
    top: 15,
    // border: `2px solid #d2d2d2`,
    padding: "0 4px",
    background: orange[500],
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  header: {
    background: "white",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: grey[400],
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,

    background: grey[300],
    color: grey[800],
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
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
    color: "inherit",
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
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  navIcons: {
    color: grey[600],
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  // badgeColor: {
  //   color: amber[200],
  // },
}));
const LoginStyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.2)",
      opacity: 0,
    },
  },
}))(Badge);

export default function NewHeader() {
  const items = useSelector((state) => state.cart.items);
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const verified = useSelector((state) => state.auth.verified);
  const token = useSelector((state) => state.auth.token);
  const UserName = useSelector((state) => state.auth.username);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const menuHandler = () => {
    var element = document.getElementById("myDIV");
    element.classList.toggle("mobile-menu");
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const logoutHandler = async () => {
    try {
      await dispatch(AuthActions.logout());
      handleMenuClose();
      history.push("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  const loginHandler = async () => {
    try {
      handleMenuClose();
      history.push("/auth");
    } catch (err) {
      console.log(err.message);
    }
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {token == null && <MenuItem onClick={loginHandler}>Login</MenuItem>}
      {token !== null && (
        <MenuItem onClick={handleMenuClose}>Hello {UserName}</MenuItem>
      )}
      {/* {token !== null && (
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      )} */}
      {token !== null && <MenuItem onClick={logoutHandler}>Logout</MenuItem>}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {token !== null && (
        <MenuItem>
          <Link
            to="/cart"
            className={classes.links}
            style={{ display: "flex" }}
          >
            <StyledBadge badgeContent={items.length} color="secondary">
              <IconButton>
                <ShoppingCartOutlinedIcon />
              </IconButton>
            </StyledBadge>
            <p style={{ color: "#6C6C6C" }}>Cart</p>
          </Link>
        </MenuItem>
      )}
      <MenuItem>
        <StyledBadge color="secondary">
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <NotificationsOutlinedIcon />
          </IconButton>
        </StyledBadge>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          {UserName == null && (
            <AccountCircleOutlinedIcon className={classes.navIcons} />
          )}
          {UserName !== null && (
            <LoginStyledBadge
              overlap="circle"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant="dot"
            >
              <Avatar className={classes.small} style={{ color: orange }}>
                {UserName.charAt(0)}
              </Avatar>
            </LoginStyledBadge>
          )}
        </IconButton>

        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            id="menu-icon"
            onClick={menuHandler}
          >
            <MenuIcon style={{ color: amber[200] }} />
          </IconButton>
          <Link to="/">
            <Typography
              className={classes.title}
              variant="h4"
              noWrap
              component="div"
              className="logo-parent"
            >
              <img
                src="/Images/new_ecommerLogo.png"
                alt="logo"
                className="logo-img"
              />
            </Typography>
          </Link>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
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
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to="/cart" className={classes.links}>
              <StyledBadge badgeContent={items.length} color="secondary">
                <IconButton className={classes.badgeColor}>
                  <ShoppingCartOutlinedIcon />
                </IconButton>
              </StyledBadge>
            </Link>
            <StyledBadge
              badgeContent={0}
              color="secondary"
              className={classes.links}
            >
              <IconButton aria-label="show 17 new notifications">
                <NotificationsOutlinedIcon className={classes.navIcons} />
              </IconButton>
            </StyledBadge>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {UserName == null && (
                <AccountCircleOutlinedIcon className={classes.navIcons} />
              )}
              {UserName !== null && (
                <LoginStyledBadge
                  overlap="circle"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  variant="dot"
                >
                  <Avatar className={classes.small} style={{ color: orange }}>
                    {UserName.charAt(0)}
                  </Avatar>
                </LoginStyledBadge>
              )}
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon style={{ color: amber[200] }} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

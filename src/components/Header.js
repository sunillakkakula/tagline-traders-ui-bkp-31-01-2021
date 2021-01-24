import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useDispatch, useSelector } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { fade, makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Nav, NavDropdown, Row } from "react-bootstrap";
import { logout } from "../actions/userAction";
import { Link as RouterLink, Route } from "react-router-dom";
import { IoIosArrowDown, IoIosSearch, BiRupee } from "react-icons/io";
import { DropdownMenu } from "./MaterialUI";
import SearchBox from "./SearchBox";
import Tippy from "@tippyjs/react";
import { Button } from "@material-ui/core";
import MoreTippy from "../screens/MoreTippy";
import { light } from "@material-ui/core/styles/createPalette";
import logo from "../assets/logo.jpg";
import ZipCodeTracker from "./ZipCodeTracker";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
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
  searchInputContainer: {
    width: "560px",
    position: "relative",
    background: "#fff",
    height: "36px",
    borderRadius: "1px",
    overflow: "hidden",
    display: "flex",
    marginLeft: "4vh",
  },
  searchInput: {
    width: "518px",
    border: "0",
    height: "36px",
    outline: "none",
    boxSizing: "border-box",
    padding: "0 10px",
  },
  searchIconContainer: {
    display: "flex",
    flex: "1",
    justifyContent: "center",
    alignItems: "center",
  },
  rightMenu: {
    display: "flex",
    flex: "auto",
    marginRight: "10em",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    display: "block",
    width: "100px",
    height: "30px",
    background: "#fff",
    textAlign: "center",
    lineHeight: "30px",
    color: "#2874f0",
    fontWeight: "500",
    fontSize: "16px",
    cursor: "pointer",
  },
  more: {
    fontWeight: "bold",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    margin: "0 20px",
    cursor: "pointer",
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Header = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <Container fluid="true">
          <AppBar>
            <Toolbar disableGutters={true}>
              <div>
                <img
                  className="img-thumbnail"
                  alt="Staples"
                  src={logo}
                  style={{
                    height: "3.5rem",
                    width: "3.5rem",
                    marginRight: "5em",
                    marginLeft: "5em",
                  }}
                />
              </div>
              <LinkContainer to="/">
                <span className={classes.title} style={{ fontSize: "1.75rem" }}>
                  <b>
                    <i>
                      <h5>Tagline Traders</h5>
                    </i>
                  </b>
                </span>
              </LinkContainer>
              {/* <div className={classes.searchInputContainer}>
                <Route
                  render={({ history }) => <SearchBox history={history} />}
                />
              </div> */}

              <div className={classes.grow} />

              {/* right side menu */}
              <div className="_2yTL60" style={{ marginLeft: "5em" }}>
                <ZipCodeTracker />

                <div style={{ justifyContent: "space-around" }}>
                  {/* <svg
                    width="4.7"
                    height="8"
                    viewBox="0 0 16 27"
                    xmlns="http://www.w3.org/2000/svg"
                    className="_2Dwidy"
                  >
                    <path
                      d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                      fill="#fff"
                      className="_1O_n_j"
                    ></path>
                  </svg> */}

                  {/* <Tippy
                    content={<MoreTippy />}
                    theme="light"
                    interactive={true}
                    visible={true}
                    offset={[5, 18]}
                  >
                    <span>More</span>
                  </Tippy> */}
                </div>
                <DropdownMenu
                  menu={
                    <a className={classes.more}>
                      <span>More</span>
                      <IoIosArrowDown />
                    </a>
                  }
                  menus={[
                    { label: "Notification Preference", href: "", icon: null },
                    { label: "24x7 Customer Care", href: "", icon: null },
                    { label: "Advertise", href: "", icon: null },
                    { label: "Download App", href: "", icon: null },
                  ]}
                />
                <LinkContainer to="/cart">
                  <ShoppingCartIcon count="10" style={{ marginTop: "2.0em" }} />
                </LinkContainer>
                {userInfo ? (
                  <>
                    <LinkContainer to="/profile">
                      <div style={{ marginRight: "1.5em" }}>
                        {userInfo.name}
                      </div>
                    </LinkContainer>
                    <LinkContainer
                      to="/logout"
                      style={{ marginRight: "1.5em" }}
                    >
                      <div
                        onClick={logoutHandler}
                        style={{ marginLeft: "1.5em" }}
                      >
                        Logout
                      </div>
                    </LinkContainer>
                  </>
                ) : (
                  <div
                    style={{
                      marginLeft: "3em",
                      display: "flex",
                      alignItems: "right",
                      cursor: "pointer",
                      paddingRight: "0px",
                    }}
                  >
                    <LinkContainer to="/login">
                      <i className="fas fa-user" />
                    </LinkContainer>
                  </div>
                )}
                {userInfo && userInfo.isAdmin && (
                  <NavDropdown title="Admin" id="adminmenu">
                    <LinkContainer to="/admin/userlist">
                      <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/productlist">
                      <NavDropdown.Item>Products</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/orderlist">
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                )}
              </div>
              {/* right side menu ends here */}
            </Toolbar>
          </AppBar>
        </Container>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
};

export default Header;

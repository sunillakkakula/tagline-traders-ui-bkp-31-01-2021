import React, { useEffect, useState } from "react";
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
import { Modal, MaterialInput, MaterialButton } from "./MaterialUI";
// import "./Header.css";
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
}));

function ElevationScroll(props) {
  const { children, window } = props;

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
  const [loginModal, setLoginModal] = useState(false);
  const [signup, setSignup] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const logoutHandler = () => {
    dispatch(logout());
  };
  const renderLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={<a className="fullName">{userInfo.user}</a>}
        menus={[
          { label: "My Profile", href: "", icon: null },
          { label: "SuperCoin Zone", href: "", icon: null },
          { label: "Flipkart Plus Zone", href: "", icon: null },
          {
            label: "Orders",
            href: `/account/orders`,
            icon: null,
          },
          { label: "Wishlist", href: "", icon: null },
          { label: "My Chats", href: "", icon: null },
          { label: "Coupons", href: "", icon: null },
          { label: "Rewards", href: "", icon: null },
          { label: "Notifications", href: "", icon: null },
          { label: "Gift Cards", href: "", icon: null },
          { label: "Logout", href: "", icon: null, onClick: logout },
        ]}
      />
    );
  };

  const renderNonLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={
          <a
            className="loginButton"
            onClick={() => {
              setSignup(false);
              setLoginModal(true);
            }}
          >
            Login
          </a>
        }
        menus={[
          { label: "My Profile", href: "", icon: null },
          { label: "Flipkart Plus Zone", href: "", icon: null },
          {
            label: "Orders",
            href: `/account/orders`,
            icon: null,
            onClick: () => {
              !userInfo && setLoginModal(true);
            },
          },
          { label: "Wishlist", href: "", icon: null },
          { label: "Rewards", href: "", icon: null },
          { label: "Gift Cards", href: "", icon: null },
        ]}
        firstMenu={
          <div className="firstmenu">
            <span>New Customer?</span>
            <a
              onClick={() => {
                setLoginModal(true);
                setSignup(true);
              }}
              style={{ color: "#2874f0" }}
            >
              Sign Up
            </a>
          </div>
        }
      />
    );
  };

  return (
    <React.Fragment>
      <Modal visible={loginModal} onClose={() => setLoginModal(false)}>
        <div
          style={{
            color: "#212121",
            margin: "0 auto",
            borderRadius: "2px",
            height: "528px",
            maxWidth: "750px",
            minWidth: "650px",
            zIndex: "1000",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexFlow: "row wrap",
              height: "528px",
              maxWidth: "750px",
              minWidth: "650px",
            }}
          >
            <div
              style={{
                width: "40%",
                height: "100%",
                color: "#fff",
                letterSpacing: "1px",
                // background-image: url('../assets/logo.jpg');
                backgroundImage: "url('../assets/logo.jpg')",
                backgroundColor: "#26A541",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center 85%",
                padding: "40px 33px",
                boxSizing: "border-box",
              }}
            >
              <h2>Login</h2>
              <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>
            <div
              style={{
                display: "flex",
                flex: "1",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "0 30px",
                  margin: "40px 0",
                }}
              >
                {userInfo && (
                  <div style={{ color: "red", fontSize: 12 }}>{userInfo}</div>
                )}
                {signup && (
                  <MaterialInput
                    type="text"
                    label="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                )}
                {signup && (
                  <MaterialInput
                    type="text"
                    label="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                )}

                <MaterialInput
                  type="text"
                  label="Email/Mobile Number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MaterialInput
                  type="password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <MaterialButton
                  title={signup ? "Register" : "Login"}
                  bgColor="#fb641b"
                  textColor="#ffffff"
                  style={{
                    margin: "40px 0 20px 0",
                  }}
                  onClick={userLogin}
                />
                <p style={{ textAlign: "center" }}>OR</p>
                <MaterialButton
                  title="Request OTP"
                  bgColor="#ffffff"
                  textColor="#2874f0"
                  style={{
                    margin: "20px 0",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
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
                {userInfo ? renderLoggedInMenu() : renderNonLoggedInMenu()}
                <div style={{ justifyContent: "space-around" }}></div>
                <DropdownMenu
                  menu={
                    <div className={classes.more}>
                      <span>More</span>
                      <IoIosArrowDown />
                    </div>
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

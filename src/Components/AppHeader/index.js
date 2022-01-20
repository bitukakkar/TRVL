import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Container, Box } from "@material-ui/core";

import Logo from "../../Assets/images/logo.svg";
import HamBurger from "../../Assets/images/hamBurger.svg";

// import { removeUser } from "../../Redux/Reducers/user";
import { WalletModal } from "../";
import { useStyles } from "./styles";
import { getAccountDetail } from "../../Utils";
// import { logoutTorusWallet } from "../../Utils";
import { AppPreHeader } from "../AppPreHeader";
import clsx from "clsx";
import axios from "axios";
import APIConfig from "./../../APIs/config";
import { setUserInfo } from "./userinfoRedux";
import { useMediaQuery } from "@material-ui/core";
import AppHeaderDrawer from "../AppHeaderDrawer";

export const AppHeader = () => {
  const scheme = useSelector((state) => state?.scheme?.name || "blue");
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const address = useSelector((state) => state.user.address);
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const [userName, setUserName] = useState("");
  const [showDrawerBoolean, setShowDrawerBoolean] = useState(false);

  const userToken = useSelector((state) => state.authToken.authToken);
  const { showNavBgInfo } = useSelector((state) => state.headerBgInfo);
  const [showNavBg, showNavBgHeight, showNavBgColor] = showNavBgInfo;

  const boxBg = {
    height: `calc(${showNavBgHeight}px - 58px)`,
    position: "absolute",
    width: "100%",
    top: "58px",
    left: "0",
    backgroundColor: showNavBgColor ? `${showNavBgColor}` : "#c4edec",
  };

  // const loginHandler = () => {
  //   setOpen(true);
  // };

  useEffect(() => {
    if (address) {
      // If user already logged in then don't open torus popup
      getAccountDetail();
      setOpen(false);
    }
  }, [address]);

  // const handleLogout = async () => {
  //   // Logout from torus wallet
  //   const isSuccess = await logoutTorusWallet();
  //   if (isSuccess) {
  //     // Remove user from redux store
  //     dispatch(removeUser());
  //   }
  // };

  const getUserName = async (token) => {
    try {
      const res = await axios.get(`${APIConfig.FASTAPI_URL}/v1/api/me`, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (res?.data?.id) {
        setUserName(res?.data?.email);
        dispatch(setUserInfo(res.data));
      }
    } catch (error) {
      console.error(error?.response);
    }
  };

  const hamberHandler = () => {
    setShowDrawerBoolean(true);
  };

  useEffect(() => {
    if (!!userToken?.access_token) {
      getUserName(userToken?.access_token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navBg = {
    backgroundColor: showNavBg
      ? showNavBgColor
        ? `${showNavBgColor}`
        : "#c4edec"
      : "transparent",
  };

  const isMobileScreen = useMediaQuery("(max-width: 767px)");

  return scheme === "blue" ? (
    <>
      <Box
        className={showNavBg ? clsx(classes.box) : clsx(classes.customclass)}
        style={navBg}>
        <Container className={classes.container}>
          <div className={classes.topheader}>
            <div className={classes.headerleft}>
              <Link to={"/"} className={classes.headerlogo}>
                <img className={classes.logo} src={Logo} alt="logo" />
              </Link>
              <div className={classes.powerbytext}>
                Powered by
                <br />
                Fetch.ai
              </div>
            </div>
            <div className={classes.headerright}>
              {isMobileScreen ? (
                <img
                  src={HamBurger}
                  alt=""
                  className={classes.hamBurger}
                  onClick={hamberHandler}
                />
              ) : (
                <div>
                  <ul className={classes.menuUl}>
                    <li>
                      <NavLink
                        to="/hotel-list"
                        title="Browse Hotels"
                        className={classes.menu_a}
                        activeClassName={classes.nav_selected_item}>
                        Browse Hotels
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/digital-agent"
                        title="Digital Agent"
                        className={classes.menu_a}
                        activeClassName={classes.nav_selected_item}>
                        Digital Agent
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/token"
                        title="Tokens"
                        className={classes.menu_a}
                        activeClassName={classes.nav_selected_item}>
                        Tokens
                      </NavLink>
                    </li>
                    {!!userToken && (
                      <li>
                        <NavLink
                          to="/settings/account"
                          title="Tokens"
                          className={classes.menu_a}
                          activeClassName={classes.nav_selected_item}>
                          My account
                        </NavLink>
                      </li>
                    )}
                  </ul>
                </div>
              )}

              {(!!userToken && (
                <>
                  {/* <div className={classes.userblock}>
                <div className={classes.username}>{userName}</div>
                <div className={classes.userpic}>
                  <img src={Userpic} alt="User" title="User" />{" "}
                </div>
              </div> */}
                </>
              )) || (
                <div>
                  <Link to="/login">
                    <button className={classes.signInBtn}>Sign in</button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </Container>
        {showNavBg && <div style={boxBg}></div>}
        <WalletModal open={open} setOpen={setOpen} />
        <AppHeaderDrawer controls={[showDrawerBoolean, setShowDrawerBoolean]} />
      </Box>
    </>
  ) : (
    <>
      <AppPreHeader />
      <Box className={classes.blueBox}>
        <Container className={classes.container}>
          <h2 className={classes.textWhite}>Travel</h2>
          <div>
            <Button variant="text" className={classes.textWhite}>
              Search
            </Button>
            <Button variant="text" className={classes.textWhite}>
              Agent
            </Button>
            <Button variant="text" className={classes.textWhite}>
              Token
            </Button>
          </div>
          <Button variant="contained" className={classes.roundButton}>
            Sign In
          </Button>
        </Container>
      </Box>
    </>
  );
};

import React from "react";
import { useStyles } from "./styles";
import back_arrow from "./../../Assets/images/back_arrow.svg";
import heartCircleHeader from "./../../Assets/images/heartCircleHeader.svg";
import bellIcon from "./../../Assets/images/bellIcon.svg";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeAuthToken } from "../../Redux/Reducers/authToken";
import clsx from "clsx";

const AppHeaderDrawer = ({ controls }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [showDrawerBoolean, setShowDrawerBoolean] = controls;
  const closeDrawer = () => setShowDrawerBoolean(false);
  const { authToken } = useSelector((state) => state.authToken);

  return showDrawerBoolean ? (
    <div className={classes.drawer}>
      <div className={classes.drawer_box}>
        <img src={back_arrow} alt="back_arrow" onClick={closeDrawer} />
        <div className={classes.menuBlock}>
          <h2 className={classes.title}>Menu</h2>
          <div className={classes.icon_div}>
            <img src={bellIcon} alt="heart" className={classes.bellCircle} />
            <img src={heartCircleHeader} alt="heart" className={classes.heartCircle} />
          </div>
        </div>
        <ul className={classes.menu}>
          <li>
            <NavLink to="/hotel-list" title="Browse Hotels" activeClassName={classes.nav_selected_item} onClick={closeDrawer}>
              Browse Hotels
            </NavLink>
          </li>
          <li>
            <NavLink to="/digital-agent" title="Digital Agent" activeClassName={classes.nav_selected_item} onClick={closeDrawer}>
              Digital Agent
            </NavLink>
          </li>
          <li>
            <NavLink to="/tokens-page" title="Tokens" activeClassName={classes.nav_selected_item} onClick={closeDrawer}>
              Tokens
            </NavLink>
          </li>
          {authToken?.access_token ? (
            <li>
              <NavLink to="/settings/account" title="Tokens" activeClassName={classes.nav_selected_item} onClick={closeDrawer}>
                My account
              </NavLink>
            </li>
          ) : (
            <></>
          )}
        </ul>
        <div className={classes.btn_div}>
          {authToken?.access_token ? (
            <button className={clsx(classes.sign_in_btn, classes.sign_out_btn)} onClick={() => dispatch(removeAuthToken())}>
              Sign out
            </button>
          ) : (
            <Link to="/login" onClick={closeDrawer} className={classes.sign_in_btn}>
              Sign in
            </Link>
          )}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default AppHeaderDrawer;

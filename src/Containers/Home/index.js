import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useStyles } from "./styles";
import landingImg from "../../Assets/images/landing.svg";
import { Logo } from "../../Assets";
import { TEXT } from "../../Constants/Strings";

export const Home = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.landingMainContainer}>
      <div className={classes.landingContainer}>
        <div className={classes.landingContentContainer}>
          <div className={classes.logoContainer}>
            <img className={classes.logo} src={Logo} alt="logo" />
            <div>
              <a
                className={classes.subscriptTitle}
                href={"https://fetch.ai/"}
                target={"_blank"}
                rel="noreferrer"
              >
                {TEXT.POWERED_BY_FETCH}
              </a>
            </div>
          </div>
          <h1>{TEXT.LANDING_TITLE}</h1>
          <p>{TEXT.LANDING_SUBTITLE}</p>
          <div className={classes.buttonContainer}>
            <Button
              variant="contained"
              onClick={() => history.push("/agent")}
              style={{ marginRight: "20px" }}
              className={classes.primaryBtn}
            >
              {TEXT.TRAVEL_AGENT}
            </Button>
            <Button
              variant="outlined"
              onClick={() => history.push("/search")}
              className={classes.secondaryBtn}
            >
              {TEXT.SEARCH}
            </Button>
          </div>
        </div>
        <div className={classes.landingImageContainer}>
          <img src={landingImg} alt="landing" />
        </div>
      </div>
    </div>
  );
};

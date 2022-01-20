import React from "react";

import { useStyles } from "./styles";
import { Search } from "../Search";

export const LandingBlue = () => {
  const classes = useStyles();

  return (
    <div className={classes.landingBlueBox}>
      <h1 className={classes.title}>Your Travel Guide</h1>
      <p className={classes.titleDescription}>
        Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Debitis ex
        ipsam
        <br />
        accusamus tempora id optio laborum nisi praesentium
      </p>
      <Search />
    </div>
  );
};

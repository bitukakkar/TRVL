import React from "react";
import { useStyles } from "./styles";
import Banner from "./banner";
import Bestoffer from "./bestoffer";
import Digitalagent from "./digitalagent";

const LandingPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.landing_block}>
      <div className={classes.bannersection}>
        <Banner />
      </div>
      <div className={classes.bestoffersection}>
        <Bestoffer subTitle="Look what I found for you" title="Hotels with 10% OFF" />
      </div>
      <div className={classes.digitalagentsection}>
        <Digitalagent />
      </div>
    </div>
  );
};

export default LandingPage;

import React from "react";
import { useStyles } from "../styles";
import agentImage from "./../../../../Assets/images/agent.svg";
import SimilarHotelCard from "../SimilarHotelCard";

const SimilarHotels = () => {
  const classes = useStyles();
  return (
    <section className={classes.similarHotelsSection}>
      <div className={classes.flex}>
        <div className={classes.commentImgCircle}>
          <img src={agentImage} alt="agent" />
        </div>
        <div className={classes.shsTitleDiv}>
          <h4 className={classes.shsSmallTitle}>Similar hotels</h4>
          <h2 className={classes.shsBigTitle}>Those might interest you</h2>
        </div>
      </div>
      <div className={classes.flex} style={{ overflowX: "scroll" }}>
        <SimilarHotelCard />
        <SimilarHotelCard />
        <SimilarHotelCard />
        <SimilarHotelCard />
      </div>
    </section>
  );
};

export default SimilarHotels;

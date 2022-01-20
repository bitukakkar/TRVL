import React from "react";
import { useStyles } from "../styles";
import Comment from "../Comment";

const Reviews = () => {
  const classes = useStyles();
  return (
    <section className={classes.reviewSection}>
      <h3 className={classes.reviewSectionTitle}>Reviews</h3>
      <p className={classes.reviewSectionSubTitle}>92 commentaries</p>
      <div>
        <div className={classes.flex}>
          <div>
            <Comment />
          </div>
          <div className={classes.marginLeft20}>
            <Comment />
          </div>
        </div>
        <div className={classes.flex}>
          <div>
            <Comment />
          </div>
          <div className={classes.marginLeft20}>
            <Comment />
          </div>
        </div>
        <div className={classes.flex}>
          <div>
            <Comment />
          </div>
          <div className={classes.marginLeft20}>
            <Comment />
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <button className={classes.reviewSectionButton}>Show more</button>
      </div>
    </section>
  );
};

export default Reviews;

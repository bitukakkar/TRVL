import React from "react";
import { useStyles } from "../styles";
import StarIcon from "@material-ui/icons/Star";
import clsx from "clsx";

const Comment = () => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.commentBox, classes.flex)}>
      <div>
        <div className={classes.commentImgCircle}></div>
        <div className={clsx(classes.starDiv)}>
          <h4 className={classes.starNumber}>9</h4>
          <h4 style={{ margin: "0" }}>
            <StarIcon className={classes.commentStarIcon} />
          </h4>
        </div>
      </div>
      <div className={classes.comment}>
        <div className={classes.commentMargin}>
          <h5 className={classes.commentUserName}>
            Username, <span className={classes.commentUserNameSpan}>5min ago</span>
          </h5>
          <p className={classes.commentText}>
            We spent 4 nights staying in a very clean, spacious and comfortable room within Val's apartment. Our window overlooked an inner
            courtyard.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;

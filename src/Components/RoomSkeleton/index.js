import React from "react";

import { useStyles } from "./styles";
import { Skeleton } from "../Skeleton";

export const RoomSkeleton = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.roomDetailContainer}>
        <div className={classes.detailContainer}>
          <Skeleton />
        </div>
        <div className={classes.roomImageContainer}>
          <Skeleton />
        </div>
      </div>
      <div className={classes.headingContainer}>
        <Skeleton />
      </div>
      <div className={classes.rowContainer}>
        <Skeleton />
      </div>
      <div className={classes.rowContainer}>
        <Skeleton />
      </div>
    </div>
  );
};

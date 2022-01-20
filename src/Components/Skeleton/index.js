import React from "react";
import { useStyles } from "./styles";

export const Skeleton = ({ height, width }) => {
  const classes = useStyles();
  return <div className={classes.line} style={{ height, width }}></div>;
};

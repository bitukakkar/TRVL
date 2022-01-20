import React from "react";
import { useStyles } from "./styles";

export const Blackdrop = ({ visible }) => {
  const classes = useStyles();
  return visible ? <div className={classes.blackdropContainer} data-testid="container"/> : null;
};

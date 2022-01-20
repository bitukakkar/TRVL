import React from "react";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { Router } from "../Router";
import { useStyles } from "./styles";
import packageJson from "../../package.json";
import { Blackdrop } from "../Components/Blackdrop";

const loadingSelector = createSelector(
  (state) => state.loading,
  (state) => state.loading,
);

function App() {
  const classes = useStyles();
  const loading = useSelector(loadingSelector);
  const showBlackdrop = useSelector((state) => state.loading.showBlackdrop);
  return (
    <>
      <Backdrop open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Router />
      <Blackdrop visible={showBlackdrop} />
      <span className={classes.versionTag}>{packageJson.version}</span>
    </>
  );
}

export default App;

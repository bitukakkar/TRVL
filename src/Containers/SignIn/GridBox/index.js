import React from "react";
import { Box, Grid } from "@material-ui/core";
import { useStyles } from "./styles";
import placeHolderX from "../../../Assets/images/placeholderX.png";

const GridBox = ({ component }) => {
  const classes = useStyles();
  const Component = component;
  return (
    <Box className={classes.boxWidth}>
      <Grid container spacing={2} className={classes.gridRow}>
        <Grid item xs={12} sm={6}>
          <div className={classes.imageDivStyle}>
            <img src={placeHolderX} alt="x" />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.contentDivStyle}>
            <div>
              <Component />
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GridBox;

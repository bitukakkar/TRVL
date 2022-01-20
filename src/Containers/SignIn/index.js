import React from "react";
import { Box, Grid } from "@material-ui/core";
import { useStyles } from "./styles";
import EnterEmail from "./Email";
import useMediaQuery from "@material-ui/core/useMediaQuery";
const SignIn = () => {
  const classes = useStyles();
  const isTabletScreen = useMediaQuery("(max-width:767px)");
  return (
    <Box className={classes.boxWidth}>
      <Grid container spacing={isTabletScreen ? 0 : 2} className={classes.gridRow}>
        <Grid item xs={12} sm={12} md={6} className={classes.imageDiv}>
          <div className={classes.imageDivStyle}></div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className={classes.contentDivStyle}>
            <div>
              <EnterEmail />
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignIn;

import React from "react";
import { Button, Box } from "@material-ui/core";
import { useStyles } from "./styles";

export const AppPreHeader = () => {
  const classes = useStyles();

  return (
    <Box className={classes.blueBox}>
      Fancy cookies? We use cookies for better experience. Learn more
      <Button variant="contained" className={classes.roundButton}>Got it!</Button>
    </Box>
  );
}



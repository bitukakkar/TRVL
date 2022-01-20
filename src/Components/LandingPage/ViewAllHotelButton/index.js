import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useStyles } from "./styles";

const ViewAllHotelButton = () => {
  const classes = useStyles();
  return (
    <Link to="/hotel-list">
      <Button variant="contained" size="medium" color="primary" className={classes.offerViewAllButton}>
        View all
      </Button>
    </Link>
  );
};

export default ViewAllHotelButton;

import { ErrorMessage } from "@hookform/error-message";
import { Grid, useMediaQuery } from "@material-ui/core";
import React from "react";
import { useStyles } from "../styles";

const GuestInput = ({ rootKey, register, formError }) => {
  const classes = useStyles();
  const isTabletScreen = useMediaQuery("(max-width: 767px)");
  return (
    <Grid container spacing={isTabletScreen ? 0 : 2}>
      <Grid item xs={12} md={6}>
        <label htmlFor={`firstName_${rootKey}`} className={classes.guestLabel}>
          Guest name
        </label>
        <input
          type="text"
          id={`firstName_${rootKey}`}
          className={classes.input}
          placeholder="Guest name"
          {...register(`guest_name_${rootKey}`, {
            required: "Guest name is required",
          })}
        />
        <ErrorMessage
          errors={formError}
          name={`guest_name_${rootKey}`}
          render={({ message }) => <span className={classes.form_error_msg}>{message}</span>}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <label htmlFor={`lastName_${rootKey}`} className={classes.guestLabel}>
          Guest email
        </label>
        <input
          type="text"
          id={`lastName_${rootKey}`}
          className={classes.input}
          placeholder="Guest Email"
          {...register(`guest_email_${rootKey}`, {
            required: "Guest email is required",
          })}
        />
        <ErrorMessage
          errors={formError}
          name={`guest_email_${rootKey}`}
          render={({ message }) => <span className={classes.form_error_msg}>{message}</span>}
        />
      </Grid>
    </Grid>
  );
};

export default GuestInput;

import { ErrorMessage } from "@hookform/error-message";
import { Grid, useMediaQuery } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";
import { useStyles } from "../styles";

const DefaultGuestField = ({ rootKey, register }) => {
  const classes = useStyles();
  const { control, setValue, clearErrors, errors: formError } = useFormContext();

  const { customerFistName, customerLastName, customerEmail, areYouGuest } = useSelector((state) => state.bookingPageInfo);
  const nameRef = useRef();
  const emailRef = useRef();
  let guestData;

  if (customerFistName === "" && customerLastName === "") {
    guestData = "";
  } else if ((customerFistName !== "" && customerLastName === "") || (customerFistName === "" && customerLastName !== "")) {
    guestData = `${customerFistName} ${customerLastName}`;
  } else {
    guestData = `${customerFistName} ${customerLastName}`;
  }

  useEffect(() => {
    if (areYouGuest === "no") {
      nameRef.current.value = "";
      emailRef.current.value = "";
      setValue(`guest_name_${rootKey}`, "");
      setValue(`guest_email_${rootKey}`, "");
      clearErrors(`guest_name_${rootKey}`);
      clearErrors(`guest_email_${rootKey}`);
    } else {
      nameRef.current.value = guestData;
      emailRef.current.value = customerEmail;
      if (customerFistName || customerLastName) {
        setValue(`guest_name_${rootKey}`, `${customerFistName} ${customerLastName}`);
        clearErrors(`guest_name_${rootKey}`);
      }

      if (customerEmail) {
        setValue(`guest_email_${rootKey}`, customerEmail);
        clearErrors(`guest_email_${rootKey}`);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [areYouGuest, customerFistName, customerLastName, customerEmail]);

  useEffect(() => {
    if (customerFistName === "" && customerLastName === "") {
      setValue(`guest_name_${rootKey}`, "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customerFistName, customerLastName]);

  const isTabletScreen = useMediaQuery("(max-width: 767px)");

  return (
    <Grid container spacing={isTabletScreen ? 0 : 2}>
      <Grid item xs={12} md={6}>
        <label htmlFor={`firstName_${rootKey}`} className={classes.guestLabel}>
          Guest name
        </label>
        <Controller
          render={({ field }) => (
            <input
              ref={nameRef}
              type="text"
              id={`firstName_${rootKey}`}
              className={classes.input}
              placeholder="Guest name"
              onChange={(e) => {
                field.onChange(e);
              }}
            />
          )}
          control={control}
          name={`guest_name_${rootKey}`}
          rules={{
            required: "Guest name is required",
          }}
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
        <Controller
          render={({ field }) => (
            <input
              ref={emailRef}
              type="email"
              id={`lastName_${rootKey}`}
              className={classes.input}
              placeholder="Guest Email"
              onChange={(e) => {
                field.onChange(e);
              }}
            />
          )}
          control={control}
          name={`guest_email_${rootKey}`}
          rules={{ required: "Guest email is required" }}
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

export default DefaultGuestField;

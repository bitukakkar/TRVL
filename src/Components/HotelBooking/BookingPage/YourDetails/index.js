import React, { useEffect, useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateAreYouGuest, updateCustomerEmail, updateCustomerFistName, updateCustomerLastName } from "../bookingRedux";
import { useStyles, newUseStyles } from "./styles";
import { FormControl, FormControlLabel, Grid, Radio, RadioGroup, useMediaQuery } from "@material-ui/core";
import clsx from "clsx";
import { ErrorMessage } from "@hookform/error-message";

const YourDetails = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [travelForWork, setTravelForWork] = React.useState("no");
  const [travelForGuest, setTravelForGuest] = React.useState("yes");
  const userInfo = useSelector((state) => state.userInfo);

  const fistNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();

  const handlerTravelForWork = (event) => {
    setTravelForWork(event.target.value);
  };
  const handlerTravelForGuest = (event) => {
    setTravelForGuest(event.target.value);
    dispatch(updateAreYouGuest(event.target.value));
    if (event.target.value === "no") {
      dispatch(updateCustomerFistName(""));
      dispatch(updateCustomerLastName(""));
      dispatch(updateCustomerEmail(""));
    } else {
      dispatch(updateCustomerFistName(fistNameRef.current.value));
      dispatch(updateCustomerLastName(lastNameRef.current.value));
      dispatch(updateCustomerEmail(emailRef.current.value));
    }
  };

  const { control, setValue, errors: formError } = useFormContext();

  function StyledRadioButton(props) {
    const newClasses = newUseStyles();
    return (
      <Radio
        className={newClasses.root}
        disableRipple
        color="default"
        checkedIcon={<span className={clsx(newClasses.icon, newClasses.checkedIcon)} />}
        icon={<span className={newClasses.icon} />}
        inputProps={{ "aria-label": "decorative checkbox" }}
        {...props}
      />
    );
  }
  const isTabletScreen = useMediaQuery("(max-width: 767px)");

  useEffect(() => {
    if (userInfo?.userinfo) {
      fistNameRef.current.value = userInfo.userinfo.first_name;
      setValue("fname", userInfo.userinfo.first_name);
      dispatch(updateCustomerFistName(userInfo.userinfo.first_name));

      lastNameRef.current.value = userInfo.userinfo.last_name;
      setValue("lname", userInfo.userinfo.last_name);
      dispatch(updateCustomerLastName(userInfo.userinfo.last_name));

      emailRef.current.value = userInfo.userinfo.email;
      setValue("email", userInfo.userinfo.email);
      dispatch(updateCustomerEmail(userInfo.userinfo.email));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  return (
    <section className={classes.detailsSection} id="detailSection">
      <h3 className={classes.title}>Your details</h3>
      <div className={classes.detailsForms}>
        <div className={classes.detailsFormsPadding}>
          {/* <div className={classes.flexSpaceBetween}> */}
          <Grid container spacing={isTabletScreen ? 0 : 2}>
            <Grid item xs={12} sm={12} md={6}>
              <label htmlFor="firstName" className={classes.label}>
                First name
              </label>
              <Controller
                render={({ field }) => (
                  <input
                    ref={fistNameRef}
                    type="text"
                    className={classes.input}
                    placeholder="Your name"
                    onChange={(e) => {
                      dispatch(updateCustomerFistName(e.target.value));
                      field.onChange(e);
                    }}
                  />
                )}
                control={control}
                name="fname"
                rules={{ required: "First name is required" }}
              />
              <ErrorMessage
                errors={formError}
                name="fname"
                render={({ message }) => <span className={classes.form_error_msg}>{message}</span>}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <label htmlFor="lastName" className={clsx(classes.label, classes.lastNameLabel)}>
                Last name
              </label>
              <Controller
                render={({ field }) => (
                  <input
                    ref={lastNameRef}
                    type="text"
                    onChange={(e) => {
                      dispatch(updateCustomerLastName(e.target.value));
                      field.onChange(e);
                    }}
                    className={classes.input}
                    placeholder="Your name"
                  />
                )}
                control={control}
                name="lname"
                rules={{ required: "Last name is required" }}
              />

              <ErrorMessage
                errors={formError}
                name="lname"
                render={({ message }) => <span className={classes.form_error_msg}>{message}</span>}
              />
            </Grid>
            <Grid item xs={12}>
              <div className={classes.marginTop30}>
                <div className={classes.flexSpaceBetween}>
                  <label htmlFor="firstName" className={classes.label}>
                    Your email
                  </label>
                  <p className={classes.emailLabelSideText}>A confirmation will be sent to your email.</p>
                </div>
                <Controller
                  render={({ field }) => (
                    <input
                      ref={emailRef}
                      type="email"
                      className={clsx(classes.input, classes.fullWidth)}
                      placeholder="You email"
                      onChange={(e) => {
                        dispatch(updateCustomerEmail(e.target.value));
                        field.onChange(e);
                      }}
                    />
                  )}
                  control={control}
                  name="email"
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value:
                        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                      message: "Invalid email",
                    },
                  }}
                />
                <ErrorMessage
                  errors={formError}
                  name="email"
                  render={({ message }) => <span className={classes.form_error_msg}>{message}</span>}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6} className={classes.marginTop30}>
              <div>
                <p className={clsx(classes.label, classes.marginBottom10)}>Are you traveling on work?</p>
                <Controller
                  render={({ field }) => (
                    <FormControl component="fieldset" className={classes.marginTop10}>
                      <RadioGroup
                        aria-label="travelForWork"
                        name="travelForWork1"
                        className={classes.radioGroup}
                        value={travelForWork}
                        onChange={(e) => {
                          handlerTravelForWork(e);
                          field.onChange(e);
                        }}
                        row>
                        <FormControlLabel
                          value="yes"
                          control={<StyledRadioButton />}
                          label={<span className={classes.radioLabel}>Yes</span>}
                        />
                        <FormControlLabel
                          className={classes.radioInputLastItem}
                          value="no"
                          control={<StyledRadioButton />}
                          label={<span className={classes.radioLabel}>No</span>}
                        />
                      </RadioGroup>
                    </FormControl>
                  )}
                  control={control}
                  name="is_travel_for_work"
                  defaultValue={travelForWork}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6} className={classes.marginTop30}>
              <p className={clsx(classes.label, classes.marginBottom10)}>Are you the guest?</p>
              <Controller
                render={({ field }) => (
                  <FormControl component="fieldset" className={classes.marginTop10}>
                    <RadioGroup
                      aria-label="travelGuest"
                      name="travelGuest1"
                      className={classes.radioGroup}
                      value={travelForGuest}
                      onChange={(e) => {
                        handlerTravelForGuest(e);
                        field.onChange(e);
                      }}
                      row>
                      <FormControlLabel
                        value="yes"
                        control={<StyledRadioButton />}
                        label={<span className={classes.radioLabel}>Yes</span>}
                      />
                      <FormControlLabel
                        className={classes.radioInputLastItem}
                        value="no"
                        control={<StyledRadioButton />}
                        label={<span className={classes.radioLabel}>No, it's for another person</span>}
                      />
                    </RadioGroup>
                  </FormControl>
                )}
                control={control}
                name="are_you_guest"
                defaultValue={travelForGuest}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
};
export default YourDetails;

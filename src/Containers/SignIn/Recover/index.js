import React from "react";
import { useStyles } from "./styles";
import { useForm } from "react-hook-form";
import { vestResolver } from "@hookform/resolvers/vest";
import { validateEmail } from "../ValidationSuite";
import Alert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";
import { Box, Grid, useMediaQuery } from "@material-ui/core";
import { forgetPasswordHandler } from "./../../../APIs/AccountServices/ForgetService/index";

const RecoverPassword = () => {
  const classes = useStyles();
  const history = useHistory();
  const isTabletScreen = useMediaQuery("(max-width:767px)");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: vestResolver(validateEmail),
  });

  const onSubmit = (data) => {
    forgetPasswordHandler(data?.email);
  };

  const backToLoginHandler = () => {
    history.push("/login");
  };
  return (
    <Box className={classes.boxWidth}>
      <Grid
        container
        spacing={isTabletScreen ? 0 : 2}
        className={classes.gridRow}>
        <Grid item xs={12} sm={12} md={6} className={classes.imageDiv}>
          <div className={classes.imageDivStyle}></div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className={classes.contentDivStyle}>
            <div>
              <div className={classes.box}>
                <h2 className={classes.title}>Recover your password</h2>
                <p className={classes.subTitle}>
                  A link with password reset will be sent to your email
                </p>
                <div>
                  {errors && errors?.email && (
                    <>
                      <Alert severity="error">{errors?.email?.message}</Alert>
                      <br />
                    </>
                  )}
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label htmlFor="email" className={classes.label}>
                    Email
                  </label>
                  <input
                    id="email"
                    placeholder="Email"
                    className={classes.input}
                    type="text"
                    {...register("email")}
                  />
                  <button className={classes.button} type="submit">
                    Send link
                  </button>
                </form>
                <p className={classes.goBackToLoginDiv}>
                  <span
                    className={classes.primary_text_style}
                    onClick={backToLoginHandler}>
                    Go back to login
                  </span>
                </p>
              </div>
              <div className={classes.bottom_small_screen_bg}></div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RecoverPassword;

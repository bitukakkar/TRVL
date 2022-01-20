import React from "react";
import { useStyles } from "./styles";
import Alert from "@material-ui/lab/Alert";
import { useForm } from "react-hook-form";
import { vestResolver } from "@hookform/resolvers/vest";
import { validatePasswordAndConfirmPassword } from "../ValidationSuite";
import { Box, Grid, useMediaQuery } from "@material-ui/core";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";

const NewPassword = () => {
  const classes = useStyles();
  const isTabletScreen = useMediaQuery("(max-width:767px)");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: vestResolver(validatePasswordAndConfirmPassword),
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <ScopedCssBaseline>
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
                  <h2 className={classes.title}>Create a new password</h2>
                  <p className={classes.subTitle}>
                    Use at least 10 characters, including uppercase letters,
                    lowercase letters and numbers
                  </p>
                  <div>
                    {errors && errors?.password && (
                      <>
                        <Alert severity="error">
                          {errors?.password?.message}
                        </Alert>
                        <br />
                      </>
                    )}
                    {errors && errors?.confirmPassword && (
                      <>
                        <Alert severity="error">
                          {errors?.confirmPassword?.message}
                        </Alert>
                        <br />
                      </>
                    )}
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={classes.textFieldDiv}>
                      <label htmlFor="password" className={classes.label}>
                        Password
                      </label>
                      <input
                        id="password"
                        className={classes.input}
                        placeholder="Password"
                        type="password"
                        {...register("password")}
                      />
                      <label
                        htmlFor="confirm_password"
                        className={classes.label}>
                        Confirm password
                      </label>
                      <input
                        id="confirm_password"
                        className={classes.input}
                        placeholder="Password"
                        type="password"
                        {...register("confirmPassword")}
                      />
                    </div>
                    <div className={classes.bottom_small_screen_bg}>
                      <button className={classes.button} type="submit">
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </ScopedCssBaseline>
  );
};

export default NewPassword;

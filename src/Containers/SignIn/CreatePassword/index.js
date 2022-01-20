import React from "react";
import { useStyles } from "./styles";
import Alert from "@material-ui/lab/Alert";
import { useForm } from "react-hook-form";
import { vestResolver } from "@hookform/resolvers/vest";
import { validatePasswordAndConfirmPassword } from "../ValidationSuite";
import { Box, Grid, useMediaQuery } from "@material-ui/core";
import EmailField from "./email";
import { useDispatch, useSelector } from "react-redux";
import { setPassword } from "./signUpRedux";
import { registerUserHandler } from "../../../APIs/AccountServices/SignUpService/index";
import { useHistory } from "react-router-dom";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";

const CreatePassword = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.signUpInfo.email);
  const userPassword = useSelector((state) => state.signUpInfo.password);
  const showEmail = useSelector((state) => state.signUpInfo.showEmailField);
  const history = useHistory();
  const isTabletScreen = useMediaQuery("(max-width:767px)");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: vestResolver(validatePasswordAndConfirmPassword),
  });

  const onSubmit = async (data) => {
    dispatch(setPassword(data.confirmPassword));
    registerUserHandler(userEmail, data.confirmPassword).then((data) => {
      data && data?.email && history.push("/login");
    });
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
                {(showEmail && <EmailField />) || (
                  <>
                    <div className={classes.box}>
                      <h2 className={classes.title}>Create a password</h2>
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
                        <button className={classes.button} type="submit">
                          Create account
                        </button>
                      </form>
                      <div className={classes.borderBottom}></div>
                    </div>
                    <div className={classes.privacy_terms_div}>
                      <p className={classes.privacy_terms_text_style}>
                        By logging in or creating an account, you agree to our{" "}
                        <span className={classes.privacy_terms_span_text_color}>
                          Terms and Conditions
                        </span>{" "}
                        and{" "}
                        <span className={classes.privacy_terms_span_text_color}>
                          Privacy Statement
                        </span>
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </ScopedCssBaseline>
  );
};

export default CreatePassword;

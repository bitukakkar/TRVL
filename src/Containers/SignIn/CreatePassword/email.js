import React from "react";
import { useStyles } from "../Email/styles";
import Alert from "@material-ui/lab/Alert";
import { useForm } from "react-hook-form";
import { vestResolver } from "@hookform/resolvers/vest";
import { validateEmail } from "../ValidationSuite";
import facebookIcon from "./../../../Assets/images/social/facebook.png";
import googleIcon from "./../../../Assets/images/social/google.png";
import appleIcon from "./../../../Assets/images/social/apple.png";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { setEmail, setShowEmail } from "./signUpRedux";

const EmailField = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    dispatch(setShowEmail(false));
    dispatch(setEmail(data.email));
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: vestResolver(validateEmail),
  });
  return (
    <>
      <div className={classes.box}>
        <h2 className={classes.title}>Log in or create an account</h2>
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
            {...register("email")}
          />
          <button className={classes.button} type="submit">
            Continue with email
          </button>
        </form>
        <p className={classes.horizontal_line_with_text}>
          <span className={classes.horizontal_line_with_text_span}>
            or use one of the following options
          </span>
        </p>
        <div className={classes.flexCenter}>
          <button className={clsx(classes.social_button, classes.btnGoogle)}>
            <img
              src={facebookIcon}
              alt="facebookIco"
              className={classes.social_icon_size}
            />
          </button>
          <button className={clsx(classes.social_button, classes.btnGoogle)}>
            <img
              src={googleIcon}
              alt="google"
              className={classes.social_icon_size}
            />
          </button>
          <button className={clsx(classes.social_button, classes.btnApple)}>
            <img
              src={appleIcon}
              alt="apple"
              className={classes.social_icon_size}
            />
          </button>
        </div>
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
  );
};

export default EmailField;

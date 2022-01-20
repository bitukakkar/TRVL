import React, { useState } from "react";
import Alert from "@material-ui/lab/Alert";
import { useStyles } from "./styles";
import { useForm } from "react-hook-form";
import { vestResolver } from "@hookform/resolvers/vest";
import { validateLoginPassword } from "../ValidationSuite";
import EnterEmail from "../Email";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPassword } from "../Email/loginRedux";
import { loginHandler } from "../../../APIs/AccountServices/LoginService";
import { setAuthToken } from "./../../../Redux/Reducers/authToken";
import { CircularProgress } from "@material-ui/core";
import clsx from "clsx";

const EnterPassword = () => {
  const classes = useStyles();

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const [showEnterPassword, setShowEnterPassword] = useState(true);
  const [showSignIn, setShowSignIn] = useState(false);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.loginInfo.email);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: vestResolver(validateLoginPassword),
  });
  const onSubmit = (data) => {
    setIsBtnDisabled(true);
    dispatch(setPassword(data?.password));
    loginHandler(userEmail, data.password, setIsBtnDisabled).then((data) => {
      dispatch(setAuthToken(data));
      if (data?.access_token) {
        history.replace(from);
      }
    });
  };
  const handleForgetPassword = () => {
    // setShowRecoverPassword(true);
    // setShowEnterPassword(false);
    history.push("/forget-password");
  };
  return (
    <>
      {showEnterPassword && (
        <>
          <div className={classes.box}>
            <h2 className={classes.title}>Enter your password</h2>
            <div>
              {errors && errors?.password && (
                <>
                  <Alert severity="error">{errors?.password?.message}</Alert>
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
                placeholder="Password"
                className={classes.input}
                type="password"
                {...register("password")}
              />
              <button
                className={clsx(
                  classes.button,
                  isBtnDisabled && classes.btnDisabled
                )}
                type="submit"
                disabled={isBtnDisabled}>
                {isBtnDisabled ? (
                  <CircularProgress size="25px" className={classes.white} />
                ) : (
                  `Login`
                )}
              </button>
            </form>
            <p className={classes.text_center}>
              <span
                className={classes.primary_text_style}
                onClick={handleForgetPassword}>
                Forget your password?
              </span>
            </p>
            <div className={classes.borderBottom}></div>
            <p className={classes.privacy_terms_text_style}>
              By logging, you agree to our{" "}
              <span className={classes.privacy_terms_span_text_color}>
                Terms and Conditions
              </span>{" "}
              and{" "}
              <span className={classes.privacy_terms_span_text_color}>
                Privacy Statement
              </span>
            </p>
          </div>
          <div className={classes.privacy_terms_bg}></div>
        </>
      )}
      {/* {showRecoverPassword && <RecoverPassword setShowSignIn={setShowSignIn} setShowRecoverPassword={setShowRecoverPassword} />} */}
      {showSignIn && <EnterEmail />}
    </>
  );
};

export default EnterPassword;

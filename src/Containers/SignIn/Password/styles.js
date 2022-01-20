import { makeStyles } from "@material-ui/core/styles";
import password_img from "../../../Assets/images/small-screen-login/password.png";

export const useStyles = makeStyles((theme) => ({
  box: {
    "@media (max-width:767px)": {
      padding: "0 20px",
    },
  },
  title: {
    fontSize: "40px",
    lineHeight: "48px",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    margin: "0",
    marginBottom: "30px",
    color: theme.colorPlate.blueCharcoal,
  },
  subTitle: {
    marginBottom: "10px",
    color: theme.colorPlate.blueCharcoal,
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 400,

    fontSize: "16px",
  },
  button: {
    borderRadius: "6px",
    backgroundColor: "#21D1CC",
    color: "#fff",
    padding: "15px",
    marginBottom: "20px",
    width: "100%",
    maxWidth: "350px",
    height: "48px",
    border: "none",
    cursor: "pointer",
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "16.8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width:480px)": {
      maxWidth: "100%",
    },
  },
  white: {
    color: "#fff",
  },
  btnDisabled: {
    opacity: "0.8",
    pointerEvents: "auto! important",
    cursor: "not-allowed! important",
  },
  horizontal_line_with_text: {
    textAlign: "center",
    width: "100%",
    borderBottom: "1.5px solid rgba(55, 65, 106, 0.2);",
    lineHeight: "0.2em",
    margin: "30px auto",
  },
  horizontal_line_with_text_span: {
    background: "#fff",
    color: "gray",
    fontFamily: "Inter",
    fontWeight: 400,

    fontSize: "14px",
    padding: "0 10px",
  },
  social_button: {
    // marginLeft: "10px",
    borderRadius: "40px",
    minWidth: "80px",
    height: "48px",
    background: "#FFFFFF",
    border: "1.5px solid rgba(55, 65, 106, 0.2);",
    boxSizing: "border-box",
    marginBottom: "19px",
  },
  social_icon_size: {
    height: "24px",
    width: "24px",
  },
  btnFacebook: {
    marginLeft: "37px",
  },
  btnGoogle: {
    marginLeft: "9px",
  },
  btnApple: {
    marginLeft: "10px",
  },
  privacy_terms_text_style: {
    lineHeight: "16.8px",
    margin: "0",
    fontSize: "12px",
    color: "rgba(28, 35, 43, 0.5)",

    textAlign: "center",
    width: "100%",
    boxSizing: "border-box",
  },
  privacy_terms_span_text_color: {
    color: "#21D1CC",
    cursor: "pointer",
  },
  privacy_terms_bg: {
    width: "100%",
    display: "none",
    "@media (max-width:480px)": {
      display: "block",
      background: `url(${password_img})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center top",
      height: "186px",
    },
  },
  flex_center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text_center: {
    textAlign: "center",
  },
  primary_text_style: {
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "16.8px",
    color: "#21D1CC",
    cursor: "pointer",
  },
  textFieldDiv: {
    [`& fieldset`]: {
      borderRadius: 40,
    },
  },
  textField: {
    width: "100%",
  },
  label: {
    fontSize: "14px",
    color: theme.colorPlate.blueCharcoal,
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 400,

    marginBottom: "6px",
    display: "block",
  },
  input: {
    padding: "14px 20px 14px 15px",
    width: "100%",
    marginBottom: "23px",
    border: "1.5px solid rgba(55, 65, 106, 0.2)",
    borderRadius: "6px",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "14px",
    color: theme.colorPlate.blueCharcoal,

    height: "48px",
  },
  borderBottom: {
    borderBottom: "1.5px solid rgba(55, 65, 106, 0.2);",
    marginBottom: "16px",
    marginTop: "20px",
  },
  grayText: {
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: "14px",
  },
}));

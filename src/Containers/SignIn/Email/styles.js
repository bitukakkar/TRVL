import { makeStyles } from "@material-ui/core/styles";
import login_img from "../../../Assets/images/small-screen-login/login.png";

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
    marginBottom: "19px",
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
  horizontal_line_with_text: {
    textAlign: "center",
    width: "100%",
    borderBottom: "solid 1.5px #CDD5D6",
    lineHeight: "0.2em",
    margin: "30px auto",
    "@media (max-width:480px)": {
      margin: "26px auto",
    },
  },
  horizontal_line_with_text_span: {
    background: "#ecf4f4",
    color: "#464D53",
    fontFamily: "Inter",
    fontWeight: 400,

    fontSize: "14px",
    padding: "0 10px",
  },
  social_button: {
    // marginLeft: "10px",
    borderRadius: "6px",
    minWidth: "80px",
    height: "48px",
    background: "#FFFFFF",
    border: "1.5px solid rgba(55, 65, 106, 0.2);",
    boxSizing: "border-box",
    marginBottom: "20px",
    cursor: "pointer",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width:480px)": {
      borderRadius: "40px",
    },
  },
  social_icon_size: {
    height: "24px",
    width: "24px",
  },
  buttonFb: {
    marginLeft: "9px",
    "@media (max-width:480px)": {
      marginLeft: "-3px",
      marginRight: "5px",
    },
  },
  btnGoogle: {
    marginLeft: "9px",
    "@media (max-width:480px)": {
      marginLeft: "4px",
    },
  },
  btnApple: {
    marginLeft: "10px",
  },
  privacy_terms_div: {
    width: "100%",
    "@media (max-width:480px)": {
      background: `linear-gradient(180deg, #ECF4F4 0%, rgba(137, 143, 143, 0) 73.96%), url(${login_img})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "top",
      height: "186px",
    },
  },
  privacy_terms_text_style: {
    padding: "0 20px",
    lineHeight: "16.8px",
    margin: "0",
    fontSize: "12px",
    color: "rgba(28, 35, 43, 0.8)",

    textAlign: "center",
    width: "100%",
    // height: "34px",
    boxSizing: "border-box",
  },
  privacy_terms_span_text_color: {
    color: "#21D1CC",
    cursor: "pointer",
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
    fontWeight: 400,

    fontSize: "14px",
    lineHeight: "14px",
    color: "#21D1CC",
    cursor: "pointer",
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
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 400,

    fontSize: "14px",
    color: theme.colorPlate.blueCharcoal,
  },
  borderBottom: {
    borderBottom: "solid 1.5px #CDD5D6",
    marginBottom: "20px",
  },
  grayText: {
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: "14px",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

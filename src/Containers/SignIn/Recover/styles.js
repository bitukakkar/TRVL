import { makeStyles } from "@material-ui/core/styles";
import login_img from "../../../Assets/images/login_img.png";
import home_img from "../../../Assets/images/small-screen-login/password.png";

export const useStyles = makeStyles((theme) => ({
  boxWidth: {
    maxWidth: "1440px",
    margin: "0 auto",
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 400,
    padding: "30px 40px 80px",
    position: "relative",
    zIndex: 1,
    boxSizing: "border-box",
    width: "100%",
    "&:before": {
      position: "absolute",
      bottom: 0,
      left: "-12%",
      content: "''",
      background: "#EEE7E6",
      width: 443,
      height: 299,
      borderTopRightRadius: "100%",
      zIndex: -1,
      "@media (max-width:767px)": {
        display: "none",
      },
    },
    "@media (max-width:767px)": {
      paddingLeft: "20px",
      paddingRight: "20px",
    },
    "@media (max-width:480px)": {
      padding: "26px 0 0 0",
    },
  },
  gridRow: {
    alignItems: "center",
  },
  imageDiv: {
    "@media (max-width:767px)": {
      display: "none",
    },
  },
  imageDivStyle: {
    width: "100%",
    height: "720px",
    maxWidth: "680px",
    borderRadius: "40px",
    background: `url(${login_img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    "@media (max-width:599px)": {
      marginRight: "40px",
    },
  },
  img_fluid: {
    width: "100%",
  },
  loginimg: {
    width: "100%",
  },
  contentDivStyle: {
    width: "100%",
    maxWidth: "350px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    "@media (max-width:1050px)": {
      margin: "0 auto",
    },
    "@media (max-width:480px)": {
      maxWidth: "100%",
    },
  },
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
    marginBottom: "10px",
    color: theme.colorPlate.blueCharcoal,
  },
  subTitle: {
    margin: 0,
    marginBottom: "30px",
    color: "rgba(28, 35, 43, 0.7)",
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 400,

    fontSize: "16px",
    "@media (max-width:480px)": {
      marginBottom: "32px",
    },
  },
  button: {
    borderRadius: "6px",
    backgroundColor: "#21D1CC",
    color: "#fff",
    padding: "15px",
    marginBottom: "20px",
    width: "100%",
    height: "48px",
    border: "none",
    display: "block",
    cursor: "pointer",
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "16.8px",
  },
  goBackToLoginDiv: {
    textAlign: "center",
    "@media (max-width:480px)": {
      marginBottom: "40px",
    },
  },
  primary_text_style: {
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "14px",
    color: "#21D1CC",
    cursor: "pointer",
  },
  bottom_small_screen_bg: {
    width: "100%",
    display: "none",
    "@media (max-width:480px)": {
      display: "block",
      background: `url(${home_img})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center top",
      height: "186px",
    },
  },

  label: {
    fontSize: "14px",
    color: theme.colorPlate.blueCharcoal,
    fontFamily: "Inter",
    fontWeight: 600,
    marginBottom: "6px",
    display: "block",
  },
  input: {
    padding: "14px 20px 14px 15px",
    width: "100%",
    height: "48px",
    marginBottom: "23px",
    border: " 1.5px solid rgba(55, 65, 106, 0.2);",
    borderRadius: "6px",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 400,

    color: theme.colorPlate.blueCharcoal,
  },
}));

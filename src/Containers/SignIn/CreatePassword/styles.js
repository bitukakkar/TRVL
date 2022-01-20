import { makeStyles } from "@material-ui/core/styles";
import login_img from "../../../Assets/images/login_img.png";
import password_img from "../../../Assets/images/small-screen-login/password.png";

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
    overflowX: "hidden",
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
      padding: "25px 0px 0px 0px",
    },
  },
  box: {
    "@media (max-width:767px)": {
      padding: "0 20px",
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
    marginLeft: "154px",
    "@media (max-width:1050px)": {
      margin: "0 auto",
    },
    "@media (max-width:480px)": {
      maxWidth: "100%",
    },
  },
  title: {
    fontSize: "40px",
    lineHeight: "48px",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    width: "100%",
    height: "96px",
    margin: "0",
    marginBottom: "10px",
  },
  subTitle: {
    margin: "0",
    padding: "0",
    marginBottom: "30px",
    fontSize: "16px",
    fontFamily: "Inter",
    fontWeight: 400,

    lineHeight: "22.4px",
    color: "rgba(0,0,0,0.7)",
  },
  button: {
    borderRadius: "6px",
    backgroundColor: "#21D1CC",
    color: "#fff",
    padding: "15px",
    marginBottom: "21px",
    width: "100%",
    maxWidth: "350px",
    height: "48px",
    border: "none",
    display: "block",
    cursor: "pointer",
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 400,

    fontSize: "14px",
    lineHeight: "16.8px",
    "@media (max-width:480px)": {
      maxWidth: "100%",
      marginBottom: "18px",
    },
  },
  privacy_terms_div: {
    width: "100%",
    "@media (max-width:480px)": {
      background: `url(${password_img})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center top",
      height: "186px",
    },
  },
  privacy_terms_text_style: {
    padding: "0 20px",
    lineHeight: "16.8px",
    margin: "0",
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 400,
    fontSize: "12px",
    color: "rgba(0, 0, 0, 0.5)",
    textAlign: "center",
    width: "100%",
    height: "34px",
    boxSizing: "border-box",
    "@media (max-width:480px)": {
      color: "rgba(28, 35, 43, 0.8) !important",
    },
  },
  privacy_terms_span_text_color: {
    color: "#21D1CC",
    cursor: "pointer",
  },
  text_center: {
    textAlign: "center",
  },
  primary_text_style: {
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 400,

    fontSize: "14px",
    lineHeight: "14px",
    color: "#FD7269",
    cursor: "pointer",
  },
  label: {
    fontSize: "14px",
    color: "#000",
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 400,

    marginBottom: "6px",
    display: "block",
  },
  input: {
    padding: "15px 20px 16px 15px",
    width: "100%",
    height: "51px",
    marginBottom: "20px",
    border: "1.5px solid rgba(55, 65, 106, 0.2);",
    borderRadius: "6px",
    outline: "none",
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 400,

    boxSizing: "border-box",
    "@media (max-width:480px)": {
      marginBottom: "20px",
      height: "48px",
    },
  },
  borderBottom: {
    borderBottom: "1.5px solid rgba(55, 65, 106, 0.2);",
    marginBottom: "19px",
  },
}));

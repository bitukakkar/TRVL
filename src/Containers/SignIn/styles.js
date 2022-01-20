import { makeStyles } from "@material-ui/core/styles";
import login_img from "../../Assets/images/login_img.png";

export const useStyles = makeStyles((theme) => ({
  boxWidth: {
    maxWidth: "1440px",
    margin: "0 auto 0px auto",
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 400,
    alignItems: "center",
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
      paddingLeft: "0px",
      paddingRight: "0px",
      padding: "25px 0px 0px 0px",
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
}));

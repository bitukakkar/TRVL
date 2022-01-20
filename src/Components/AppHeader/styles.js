import { makeStyles } from "@material-ui/core/styles";
import headerbgElement from "../../Assets/images/headerbgElement.png";

export const useStyles = makeStyles((theme) => ({
  box: {
    background: "#c4edec",
    display: "flex",
    padding: "35px 30px 18px 30px",
    "@media (max-width:480px)": {
      padding: "15px 20px 20px",
    },
  },

  container: {
    maxWidth: "1180px",
    paddingLeft: "0",
    paddingRight: "0",
  },

  topheader: {
    width: "100%",
    marginBottom: "0px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    zIndex: "1",
  },
  headerleft: {
    width: "auto",
    display: "flex",
    alignItems: "center",
  },
  headerright: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    // margin: "auto 0px",
  },
  logo: {
    height: "auto",
  },
  headerlogo: {
    float: "left",
    fontSize: "32px",
    lineHeight: "38.4px",
    fontFamily: "Inter",
    fontWeight: 900,
    letterSpacing: "0em",
    textAlign: "left",
    color: "#1C232B",
    "@media (max-width: 375px)": {
      fontSize: "27px",
      lineHeight: "32.4px",
    },
  },
  menublock: {
    float: "left",
    paddingTop: "20px",
    width: "50%",
  },
  menu_ul: { float: "left", listStyle: "none", margin: "0px", padding: "0px" },
  menu_li: { float: "left", width: "135px" },
  agent_li: { width: "120px" },
  menu_a: {
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "14px",
    color: "#1C232B",
    display: "block",
    transition: "all ease 0.4s",
    "&:hover": {
      color: theme.colorPlate.green,
      transition: "all ease 0.4s",
    },
  },
  username: {
    // display: "none",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "16px",
    lineHeight: "120%",
    textAlign: "right",
    color: "#1C232B",
    float: "left",
    paddingTop: "20px",
  },
  userpic: {
    float: "left",
    width: "60px",
    height: "60px",
    marginLeft: "10px",
  },
  usernotify: {
    float: "left",
    width: "60px",
    height: "60px",
    border: "1px solid rgba(28, 35, 43, 0.15)",
    boxSizing: "border-box",
    textAlign: "center",
    padding: "15px",
    borderRadius: "52px",
    marginLeft: "15px",
  },
  userlike: {
    float: "left",
    width: "60px",
    height: "60px",
    marginLeft: "15px",
  },
  userblock: {
    display: "none",
    float: "left",
  },
  powerbytext: {
    fontFamily: "Inter",
    fontWeight: 500,
    fontStyle: "italic",
    fontSize: "12px",
    lineHeight: "120%",
    color: "#1C232B",
    opacity: "0.7",
    paddingLeft: "14px",
    marginLeft: "14px",
    borderLeft: "1.5px solid #5a6268",
    "@media (max-width: 375px)": {
      fontSize: "10px",
    },
  },
  navButton: {
    fontSize: "17px",

    padding: "8px",
    marginRight: "4px",
    color: theme.palette.primary.light,
    "&:hover": {
      background: theme.palette.secondary.main,
      color: theme.palette.primary.text,
    },
  },
  profileContainer: {
    display: "flex",
  },
  buttonsMainContainer: {
    display: "flex",
  },

  blueBox: {
    background: theme.blueScheme.lightBlue,
    padding: "20px",
  },
  textWhite: {
    color: "white",
  },
  roundButton: {
    borderRadius: "24px",
    background: "white",
    marginLeft: "16px",
  },
  signInBtn: {
    width: "86px",
    height: "48px",
    background: theme.colorPlate.green,
    color: theme.colorPlate.white,
    border: 0,
    borderRadius: 6,
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 600,
    cursor: "pointer",
    marginLeft: "40px",
    "@media (max-width: 767px)": {
      display: "none",
    },
  },
  menuUl: {
    display: "flex",
    listStyle: "none",
    margin: "0px",
    "& > li": {
      marginLeft: "30px",
      "@media (max-width: 620px)": {
        marginLeft: "10px",
      },
    },
    "@media (max-width: 620px)": {
      paddingLeft: "0px",
    },
  },
  nav_selected_item: {
    color: "#21D1CC",
  },
  customclass: {
    position: "relative",
    background: "tranparent",
    display: "flex",
    // padding: "30px 30px 0px 30px",
    padding: "35px 30px 18px 30px",
    "@media (max-width:480px)": {
      padding: "15px 20px 20px",
    },
    "&:before": {
      position: "absolute",
      content: " '' ",
      background: `url(${headerbgElement}) `,
      height: "453px",
      width: "641px",
      top: "0%",
      right: "0px",
      backgroundPosition: "center center",
      left: "auto",
      backgroundSize: "cover",
      zIndex: "-1",
      "@media (max-width: 375px)": {
        background: "none",
      },
    },
    "@media (max-width: 375px)": {
      padding: "15px 20px",
    },
  },
  // hamBurger
  hamBurger: {
    cursor: "pointer",
  },
}));

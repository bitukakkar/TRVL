import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "GTWalsheim",
    fontWeight: 400,
  },
  paper: {
    color: theme.palette.text.secondary,
    borderRadius: "14px",
    boxShadow: "none !important",
    background: "transparent !important",
  },
  box: {
    padding: "0 20px",
    "@media (max-width: 767px)": {
      paddingBottom: 23,
    },
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px",
    maxWidth: "1180px",
  },
  agenttitle: {
    float: "left",
    width: "100%",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "40px",
    lineHeight: "120%",
    color: "#1C232B",
    margin: 0,
    padding: 0,
    marginTop: 29.98,
    "@media (max-width: 480px)": {
      fontSize: "24px",
    },
  },
  agentdesc: {
    float: "left",
    width: "100%",
    margin: "10px 0 30px",
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "140%",
    color: "#1C232B",
    opacity: "0.8",
    paddingBottom: 10,
    display: "inherit",
    "@media (max-width: 480px)": {
      fontSize: "16px",
      lineHeight: "22.4px",
      margin: "5px 0 20px",
    },
  },
  agentcontent: {
    float: "left",
    width: "100%",
    marginTop: "20px",
  },
  contentleft: {
    float: "left",
    width: "80px",
  },
  contentright: {
    float: "left",
    width: "calc(100% - 80px)",
  },
  contentright1: {
    margin: 0,
    float: "left",
    width: "100%",
    marginBottom: "5px",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "24px",
    lineHeight: "120%",
    color: "#1C232B",
  },
  contentright2: {
    margin: 0,
    float: "left",
    width: "100%",
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "140%",
    color: "#1C232B",
    opacity: "0.8",
  },
  agentImage: {
    width: "100%",
    "@media (max-width: 375px)": {
      maxHeight: "369.02px",
    },
  },
  agenticon: {
    width: "65px",
    height: "65px",
    color: "#FF263C",
  },
  innercontainer: {
    marginTop: "0px",
    marginBottom: "20px",
    alignItems: "center",
  },
}));

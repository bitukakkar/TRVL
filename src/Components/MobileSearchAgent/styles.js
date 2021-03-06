import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "100vw",
    minHeight: "100vh",
    background: "#C3EDEC",
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    zIndex: "999999",
    boxSizing: "border-box",
    // padding: "20px",
    // paddingTop: "32px",
    overflowX: "hidden !important",
  },
  title: {
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    fontSize: "32px",
    lineHeight: "38.4px",
    color: "#1C232B",
    margin: "61px 0 0 20px",
    width: 194,
    height: 76,
  },
  agentContainer: {
    width: "100%",
    height: "calc(100vh - 165px)",
    backgroundColor: "#ECF4F4",
    boxShadow: "0px 30px 60px rgba(0, 0, 0, 0.05)",
    borderRadius: "40px 40px 0 0",
    boxSizing: "border-box",
    padding: "20px",
    marginTop: "20px",
    position: "relative",
  },
  top_container: {
    "& > img": {
      position: "absolute",
      top: "20px",
      left: "20px",
    },
    "& p": {
      fontFamily: "IBMPlexSans",
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "19.2px",
      color: "#1C232B",
      margin: 0,
      padding: 0,
      textAlign: "center",
    },
  },
  agentInfoContainer: {
    width: "100%",
    height: "100px",
    background: "#FFFFFF",
    borderRadius: "20px",
    margin: "0 auto",
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    padding: "20px",
    boxSizing: "border-box",
  },
  img: {
    width: "60px",
    height: "60px",
    background: "#000",
    borderRadius: "200px",
  },
  agent_info_block: {
    marginLeft: "10px",
    "& > h4": {
      fontFamily: "IBMPlexSans",
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "21.6px",
      color: "#1C232B",
      margin: 0,
    },
  },
  lower_price: {
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "19.6px",
    color: "rgba(rgba(28, 35, 43, .4))",
    margin: 0,
    marginTop: "5px",
  },
  forward_arrow: {
    display: "inline-block",
    marginLeft: "auto",
  },
  btn_div: {},
  btn: {
    marginTop: "20px",
    width: "100%",
    boxSizing: "border-box",
    height: "48px",
    background: theme.colorPlate.teal,
    borderRadius: "6px",
    border: 0,
    fontSize: "14px",
    lineHeight: "16.8px",
    color: theme.colorPlate.white,
    fontFamily: "Inter",
    fontWeight: 600,
    cursor: "pointer",
  },
  btn_skip: {
    background: theme.colorPlate.transparent,
    marginTop: "10px",
    border: "1.5px solid rgba(55, 65, 106, 0.2)",
    color: "#37416A",
  },
}));

import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  agentcontent: {
    display: "flex",
    width: "100%",
    marginTop: "40px",
    "@media (max-width: 560px)": {
      marginTop: "30px",
    },
    "@media (max-width: 480px)": {
      marginTop: "22px",
    },
  },
  contentleft: {
    marginRight: "20px",
    "@media (max-width: 480px)": {
      marginRight: "16px",
    },
    "& > img": {
      "@media (max-width: 480px)": {
        width: 40,
        height: 40,
      },
    },
  },
  contentright: {
    width: "calc(100% - 80px)",
    "@media (max-width: 480px)": {
      width: "calc(100% - 40px)",
    },
  },
  contentright1: {
    width: "100%",
    marginBottom: "5px",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "24px",
    lineHeight: "120%",
    color: "#1C232B",
    "@media (max-width: 480px)": {
      fontSize: "18px;",
    },
  },
  contentright2: {
    width: "100%",
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "16px",
    lineHeight: "140%",
    color: "#1C232B",
    opacity: "0.8",
    "@media (max-width: 480px)": {
      fontSize: "14px;",
    },
  },
}));

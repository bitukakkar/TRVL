import { makeStyles } from "@material-ui/core/styles";
import bestoffer_bg from "../../Assets/images/landing/bestoffer_bg.png";
import agent_bg from "../../Assets/images/ellipsLgtGreen.png";

export const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: theme.navBarBackground,
    padding: "8px",
  },
  headersection: {
    float: "left",
    width: "100%",
  },
  bannersection: {
    float: "left",
    width: "100%",
  },
  bestoffersection: {
    float: "left",
    width: "100%",
    marginTop: "60px",
    backgroundImage: `url(${bestoffer_bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    // maxHeight: "700px",
    backgroundPosition: "left",
    "@media (max-width: 560px)": {
      marginTop: 50,
    },
    "@media (max-width: 480px)": {
      marginTop: 40,
    },
    "@media (max-width: 375px)": {
      backgroundImage: "none",
    },
  },
  digitalagentsection: {
    position: "relative",
    marginBottom: "82px",
    marginTop: "81px",
    float: "left",
    width: "100%",
    "&:before": {
      backgroundImage: `url(${agent_bg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition: "right",
      width: "551px",
      position: "absolute",
      top: "50%",
      right: "0",
      content: " ' ' ",
      transform: "translateY(-50%)",
      "@media (max-width: 767px)": {
        backgroundImage: "none",
      },
    },
    "@media (min-width:768px) and (max-width:992px)": {
      marginTop: "60px",
    },
    "@media (max-width: 767px)": {
      marginTop: 40,
      marginBottom: "0px",
    },
  },
  searchhotelsection: {
    float: "left",
    width: "100%",
  },
  footersection: {
    float: "left",
    width: "100%",
    background: "#0f1920",
  },
  landing_block: {
    float: "left",
    width: "100%",
    overflowX: "hidden",
  },
}));

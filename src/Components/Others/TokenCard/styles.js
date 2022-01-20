import { makeStyles } from "@material-ui/core/styles";
import Enthusiastpack from "../../../Assets/images/Enthusiastpack.svg";
import pro from "../../../Assets/images/pro.svg";
import utilityImg from "../../../Assets/images/utility.svg";
import rewardsImg from "../../../Assets/images/reward.svg";
import infrastructureImg from "../../../Assets/images/infrastructure.svg";
import { Slider, withStyles } from "@material-ui/core";
import modalBriefCaseIcon from "../../../Assets/images/modalBriefCaseIcon.svg";
export const useStyles = makeStyles((theme) => ({
  /**
   * flex
   */
  flex: {
    display: "flex",
  },
  flexSpaceBetween: {
    display: "flex",
    justifyContent: "space-between",
  },
  flexSpaceEvenly: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    "@media (max-width: 1135px)": {
      justifyContent: "center",
    },
  },

  /**
   * @ token
   */
  token: {
    width: "100%",
    background: theme.colorPlate.white,
    marginLeft: "10px",
    marginBottom: "10px",
    borderRadius: "20px",
  },
  tokenPadding: {
    padding: "30px",
  },
  imgCircle: {
    width: "105px",
    height: "105px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "contain",
  },
  basic: {
    backgroundImage: `url(${modalBriefCaseIcon})`,
  },
  Enthusiast: {
    backgroundImage: `url(${Enthusiastpack})`,
  },
  pro: {
    backgroundImage: `url(${pro})`,
  },
  utilityImg: {
    backgroundImage: `url(${utilityImg})`,
  },
  rewardsImg: {
    backgroundImage: `url(${rewardsImg})`,
  },
  infrastructureImg: {
    backgroundImage: `url(${infrastructureImg})`,
  },
  packDetails: {
    marginLeft: "24px",
    "& > h3": {
      margin: "0",
      fontSize: "18px",
      fontFamily: "IBMPlexSans",
      lineHeight: "21.6px",
      color: theme.colorPlate.blueCharcoal,
      marginTop: "8px",
    },
    "& > h1": {
      margin: "0",
      marginTop: "3px",
      fontSize: "56px",
      fontFamily: "IBMPlexSans",
      lineHeight: "67.2px",
      color: theme.colorPlate.blueCharcoal,
      "& > img": {
        marginRight: "5px",
      },
      "& > span": {
        fontSize: "18px",
        fontFamily: "IBMPlexSans",
        lineHeight: "21.6px",
        color: theme.colorPlate.black,
      },
    },
  },
  priceBox: {
    "& > h3": {
      margin: "0",
      fontSize: "24px",
      fontFamily: "IBMPlexSans",
      lineHeight: "28.8px",
      color: theme.colorPlate.blueCharcoal,
      textAlign: "right",
      paddingTop: "7px",
    },
    "& > button": {
      margin: "0",
      marginTop: "10px",
      marginRight: "-3px",
      width: "104px",
      height: "48px",
      background: theme.colorPlate.green,
      fontSize: "14px",
      fontFamily: "IBMPlexSans",
      lineHeight: "16.8px",
      color: theme.colorPlate.white,
      padding: "15px 20px 16px",
      borderRadius: "6px",
      Padding: "15px, 20px, 16px, 20px",
      border: "none",
      outline: "none",
      cursor: "pointer",
      fontWeight: 600,
    },
  },

  input_range_amount: {
    margin: "0px",
  },
  form_block: {
    marginTop: "1rem",
    width: "100%",
    "& input": {
      width: "100%",
      display: "block",
      height: "4.8rem",
      margin: "0 0 2rem 0",
      padding: "1rem",
      boxSizing: "border-box",
      border: "1.5px solid rgba(55, 65, 106, 0.2)",
      borderRadius: "6px",
      background: "#FFFFFF",
      "&:focus": {
        outline: "none",
        boxShadow: "0 0 .5px .5px #21D1CC",
      },
    },

    "& label": {
      margin: "0",
      color: "#000",
      fontSize: "1.4rem",
      lineHeight: "16.8px",
      display: "block",
      fontFamily: "IBMPlexSans",
      marginBottom: "6px",
    },
  },
}));

// #################### AmountSlider #################### //

export const AmountSlider = withStyles({
  root: {
    color: "#21D1CC",
    height: 4,
  },
  thumb: {
    height: 16,
    width: 16,
    backgroundColor: "#21D1CC",
    border: "2px solid currentColor",
    marginTop: -6.5,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },

  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 4,
    borderRadius: 4,
  },
  rail: {
    height: 4,
    borderRadius: 4,
  },
})(Slider);

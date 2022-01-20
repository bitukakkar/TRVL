import { makeStyles } from "@material-ui/core/styles";
import { Slider, withStyles } from "@material-ui/core";
const colorPlate = {
  dark: "#1C232B",
  deepDark: "#0F1920",
  gray: "#F2F2F2",
  darkGray: "#E7E7E7",
  black: "#000",
  white: "#fff",
  white2: "#F5F9FD",
  orange: "#F55035",
};
export const useStyles = makeStyles((theme) => ({
  card: {
    width: 500,
    minHeight: 500,
    backgroundColor: "#fff",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  title: {
    textAlign: "center",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    margin: 0,
  },
  max_purchase_text: {
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    margin: "10px 0 25px",
  },
  form_block: {
    width: "100%",
    "& input": {
      width: "100%",
      display: "block",
      height: "48px",
      margin: "10px 0",
      padding: "10px",
      boxSizing: "border-box",
      border: "1.5px solid rgba(55, 65, 106, 0.2)",
      borderRadius: "6px",
      "&:focus": {
        outline: "none",
        boxShadow: "0 0 .5px .5px #21D1CC",
      },
    },

    "& label": {
      margin: "0",
      color: colorPlate.black,
      fontSize: "14px",
      lineHeight: "16.8px",
      display: "block",
      fontFamily: "Inter",
      fontWeight: 600,
      marginBottom: "5px",
    },
  },
  btn_block: {
    display: "flex",
    justifyContent: "center",
    "& button": {
      width: 183,
      height: 51,
      fontSize: "16px",
      background: "#21D1CC",
      border: 0,
      margin: "10px 10px 0 10px",
      fontFamily: "IBMPlexSans",
      fontWeight: 600,
      color: "#fff",
      cursor: "pointer",
      borderRadius: "6px",
    },
  },
  // #################### input_range_amount_input_div #################### //
  input_range_amount_input_div: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "5px",
  },
  input_range_amount: {
    margin: "0 0 0 20px",
    fontFamily: "Inter",
    fontWeight: 600,
    width: "45px",
  },
}));

// #################### AmountSlider #################### //

export const AmountSlider = withStyles({
  root: {
    color: "#21D1CC",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
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
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

import { makeStyles } from "@material-ui/core";
import rightArrow from "./../../../Assets/images/rightArrow.svg";

export const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormLabel-root": {
      fontSize: "14px",
      lineHeight: "140%",
      color: "rgba(28, 35, 43, .8)",
      fontFamily: "Inter",
      fontWeight: 400,
    },
    "& .MuiInputBase-input": {
      height: "auto",
    },
  },
  box: {
    boxSizing: "border-box",
    maxWidth: "100%",
    height: 223,
    background: "#FFFFFF",
    boxShadow: "0px 30px 60px rgba(0, 0, 0, 0.05)",
    borderRadius: 20,
    margin: "0 90px",
    "@media (max-width: 1080px)": {
      margin: "0 60px",
    },
    "@media (max-width: 980px)": {
      margin: "0 40px",
    },
    "@media (max-width: 900px)": {
      margin: "0 10px",
    },
  },
  box_1: {
    width: "100%",
    height: "122px",
    background: "#F6F9F9",
    borderRadius: "20px 20px 0 0",
    padding: "0px 40px",
    display: "flex",
    alignItems: "center",
    "@media (max-width: 980px)": {
      padding: "0 20px",
    },
  },

  title: {
    margin: 0,
    padding: 0,
    fontSize: 14,
    lineHeight: "140%",
    color: "rgba(28, 35, 43, .8)",
  },
  block_input: {
    border: 0,
    background: "transparent",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    fontSize: 18,
    lineHeight: "120%",
    color: "#1C232B",
    width: "100%",
    height: "auto",
  },

  agent_block: {
    display: "flex",
    alignItems: "flex-start",
    borderRight: " 1px solid rgba(28, 35, 43, .15)",
    minHeight: 60,
    minWidth: 180,
    "@media (max-width: 860px)": {
      minWidth: 160,
    },
    "& > img": {
      height: 60,
      width: 60,
      objectFit: "cover",
      borderRadius: "200px",
    },
  },
  agent_name_input_block: {
    marginLeft: "11px",
  },
  search_block: {
    marginLeft: "20px",
    borderRight: " 1px solid rgba(28, 35, 43, .15)",
    minHeight: 60,
    display: "flex",
    alignItems: "center",
    width: "100%",
    maxWidth: "404px",
  },
  date_picker_block: {
    marginLeft: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    maxWidth: "319px",
    position: "relative",
    "@media (max-width: 860px)": {
      marginLeft: "10px",
    },
  },
  divider: {
    margin: "0 20px",
  },
  arrow_icon: {
    width: "18px",
    height: "18px",
  },
  check_in_block: {
    width: "110px",
  },
  check_out_block: {
    width: "110px",
  },
  check_in_out_center_icon: {
    background: `url${rightArrow}`,
    width: "11.33px",
    height: 12,
    position: "absolute",
    left: "40%",
    top: "50%",
    transform: "translate(-40%, -50%)",
  },

  box_2: {
    width: "100%",
    height: "101px",
    background: "#fff",
    borderRadius: "0 0 20px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 40px",
    boxSizing: "border-box",
    "@media (max-width: 980px)": {
      padding: "0 20px",
    },
  },
  box_2_block_container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  box_2_block: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: "20px",
    // width: "100%",
    "@media (max-width: 860px)": {
      marginRight: "10px",
    },
  },
  box_2_block_input: {
    marginLeft: 10,
    fontSize: 14,
    lineHeight: "120%",
    color: "#1C232B",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
  },
  search_hotels_btn: {
    ...theme.button,
    width: 164,
    height: 60,
    backgroundColor: "#21D1CC",
    borderRadius: 6,
    border: 0,
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: "120%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#FFFFFF",
    cursor: "pointer",
  },
  formControl_native_select: {
    width: 100,
    marginLeft: "10px",
  },
}));

export const selectInputStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "white", border: 0 }),
  valueContainer: (styles) => ({
    ...styles,
    width: "120px",
    padding: "0px",
    border: "0",
  }),
  indicatorsContainer: (styles) => ({ ...styles, padding: "0px" }),
  indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
  indicatorContainer: (styles) => ({ ...styles, padding: "0px" }),
};

export const selectInputMultiStyles = {
  ...selectInputStyles,
  multiValue: (styles) => ({ ...styles, backgroundColor: "transparent" }),
  valueContainer: (styles) => ({ ...styles, width: "300px" }),
};

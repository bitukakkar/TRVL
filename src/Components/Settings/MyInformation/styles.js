import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  /**
   * @ flex options
   */
  flex: {
    display: "flex",
    width: "100%",
    margin: "0 -10px",
    "@media (max-width:560px)": {
      flexDirection: "column",
      margin: "0",
    },
    "& > div": {
      width: "50%",
      padding: "0 10px",
      "@media (max-width:560px)": {
        width: "100%",
        padding: "0",
      },
    },
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
  },
  /**
   * @ margins
   */
  marginLeft20: {
    marginLeft: "20px",
    "@media (max-width:560px)": {
      marginLeft: "0px",
    },
  },
  title: {
    margin: "0",
    fontSize: "24px",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    lineHeight: "28.8px",
    color: theme.colorPlate.blueCharcoal,
    "@media (max-width:767px)": {
      marginTop: "20px",
    },
  },
  /**
   * @ name address etc form
   */
  myInformationBox: {
    marginBottom: "120px",
    "@media (max-width:767px)": {
      marginBottom: "40px",
    },
  },
  circularProgress: {
    color: "#fff",
  },
  formSection: {
    // width: "780px",
    width: "100%",
    // height: "645px",
    background: theme.colorPlate.white,
    borderRadius: "20px",
    marginTop: "10px",
  },
  formPadding: {
    padding: "30px",
    "@media (max-width:767px)": {
      padding: "20px",
    },
  },
  label: {
    display: "block",
    margin: "0",
    marginBottom: "7px",
    lineHeight: "16.8px",
    color: theme.colorPlate.blueCharcoal,
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 600,
  },
  input: {
    width: "100%",
    height: "48px",
    borderRadius: "6px",
    border: "1.5px solid rgba(55, 65, 106, 0.2);",
    background: theme.colorPlate.white,
    padding: "14px 20px 14px 15px",
    marginBottom: "30px",
    outline: "none",
    color: theme.colorPlate.blueCharcoal,
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 400,
    lineHeight: "19.6px",
    "@media (max-width:767px)": {
      marginBottom: "20px",
    },
    "&:disabled": {
      background: "#eee",
    },
  },
  fullWidth: {
    width: "100% !important",
  },
  cancelButton: {
    width: "88px",
    height: "48px",
    borderRadius: "6px",
    padding: "15px 20px 16px",
    border: "1.5px solid rgba(55, 65, 106, 0.2)",
    outline: "none",
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 600,
    color: "#37416A",
    lineHeight: "16.8px",
    cursor: "pointer",
    background: theme.colorPlate.white,
  },
  saveButton: {
    width: "73px",
    height: "48px",
    borderRadius: "6px",
    padding: "15px 20px 16px",
    background: "#21D1CC",
    outline: "none",
    border: "none",
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 600,
    color: theme.colorPlate.white,
    lineHeight: "16.8px",
    marginLeft: "10px",
    cursor: "pointer",
  },
  textEnd: {
    textAlign: "end",
  },
  passwordFormButtons: {
    // marginTop: "10px",
  },
  formerror: {
    paddingTop: "20px",
  },
}));

export const reactSelectStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    boxShadow: "none",
    minHeight: 48,
    maxWidth: "100%",
    minWidth: "350px",
    marginTop: "10px",
    paddingLeft: "12px",
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 400,
    lineHeight: "19.6px",
    outline: 0,
    borderRadius: 6,
    border: "1.5px solid rgba(55, 65, 106, 0.2)",
    cursor: "pointer",
    ":hover": {
      border: "1.5px solid rgba(15, 25, 32, 0.25)",
    },
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? "rgba(0,0,0,0.1)"
        : isFocused
        ? "rgba(0,0,0,0.05)"
        : null,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? "white" > 2
          ? "white"
          : "#1C232B"
        : "#1C232B",
      cursor: isDisabled ? "not-allowed" : "pointer",
      outline: "none",
      border: "1px solid rgba(255,255,255,0.1)",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled && (isSelected ? "rgba(0,0,0,0.5)" : null),
        outline: "none",
      },
      ":focus": {
        ...styles[":focus"],
        backgroundColor: !isDisabled && (isSelected ? "rgba(0,0,0,0.5)" : null),
        outline: "none",
      },
    };
  },
  dropdownIndicator: (base) => ({
    ...base,
    color: "black",
    padding: "2px 9px 0 0",
  }),
  indicatorSeparator: (styles) => ({ display: "none" }),
  valueContainer: (styles) => {
    return {
      ...styles,
      padding: 0,
    };
  },
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: "#EFEFEF",
      height: "40px",
      display: "flex",
      alignItems: "center",
      flexDirection: "row-reverse",
      borderRadius: "40px",
      border: "1.5px solid rgba(55, 65, 106, 0.2);",
      padding: "10px 5px",
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: "#1C232B",
    fontSize: "14px",
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    cursor: "pointer",
    ":hover": {
      backgroundColor: data.color,
      color: "rgba(0,0,0,0.7)",
      "& svg": {
        // display: "none !important",
        border: "2px solid rgba(0,0,0,0.7)",
      },
    },
    "& svg": {
      // display: "none !important",
      border: "2px solid #000000",
      width: "20px",
      height: "20px",
      borderRadius: "200px",
    },
  }),
};

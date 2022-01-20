import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  /**
   * @ flex options
   */
  flex: {
    display: "flex",
    justifyContent: "center",
  },
  flexCenterSpaceBetween: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  /**
   * @ box
   */
  boxWidth: {
    margin: "0 auto",
    padding: "0 20px 100px",
    maxWidth: "1204px",
    fontFamily: "Inter",
    fontWeight: 400,
    marginTop: "53px",
    "@media (max-width: 780px)": {
      marginTop: "0",
    },
    "@media (max-width: 767px)": {
      paddingTop: "0",
      paddingBottom: "40px",
    },
  },
  leftBox: {
    // marginLeft: "60px",
    zIndex: 1,
    "@media (max-width: 1260px)": {
      // marginLeft: "10px",
    },
    "@media (max-width: 767px)": {
      display: "none",
    },
  },
  // right box
  rightBox: {
    marginLeft: "53px",
    zIndex: 1,
    flexGrow: 1,
    maxWidth: "780px",
    width: "100%",
    "@media (max-width: 1260px)": {
      marginLeft: "10px",
    },
    "@media (max-width: 765px)": {
      marginLeft: "0px",
    },
  },
  rightBox_top_sect: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: "20px",
    maxWidth: "750px",
    "@media (max-width: 375px)": {
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      // marginTop: "10px",
      marginBottom: "38px",
    },
  },
  rightBox_top_title_div: {
    "& > h3": {
      margin: "0",
      fontFamily: "IBMPlexSans",
      fontWeight: 400,
      fontSize: "40px",
      lineHeight: "48px",
      color: "#1C232B",
      "@media (max-width: 375px)": {
        fontSize: "24px",
        lineHeight: "28.8px",
      },
    },
  },
  hotel_result_text: {
    fontFamily: "Inter",
    fontWeight: 400,

    fontSize: "14px",
    lineHeight: "19.6px",
    color: "#1C232B",
  },
  formControl: {
    marginTop: "0px",
    // marginBottom: "20px",
    fontSize: "14px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    minWidth: 120,
    "@media (max-width: 769px)": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      height: "20px",
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  selectStyle: {
    width: "165px",
  },
  nohotelsfound: {
    maxWidth: "780px",
    "& > h4": {
      margin: 0,
      fontSize: "24px",
      fontWeight: 400,
    },
  },
  searchInputDiv: {
    marginBottom: "30px",
    display: "flex",
    alignItems: "center",
  },
  searchInput: {
    margin: "0 !important",
    height: "60px",
    borderRadius: "40px",
    width: "100%",
    outline: "none",
    border: "0",
    // padding: "20px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    fontSize: "16px",
    marginRight: "19px !important",
  },

  filterCircleDiv: {
    minWidth: "60px",
    minHeight: "60px",
    borderRadius: "3000px",
    border: "1.5px solid rgba(55, 65, 106, .2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
}));

// react select styles

export const reactSelectStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "transparent",
    boxShadow: "none",
    height: 51,
    width: "100%",
    paddingLeft: "12px",
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 400,
    lineHeight: "19.6px",
    outline: 0,
    borderRadius: 5,
    border: "0",
    cursor: "pointer",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? "#21D1CC"
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
  singleValue: (styles) => {
    return {
      ...styles,
      color: "#000",
      fontFamily: "Inter",
      fontWeight: 600,
    };
  },
  menu: (styles) => {
    return {
      ...styles,
      marginTop: -8,
      paddingTop: 0,
    };
  },
};

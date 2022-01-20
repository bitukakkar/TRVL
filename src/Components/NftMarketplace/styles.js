import { makeStyles } from "@material-ui/core/styles";
import nftimg from "../../Assets/images/NFT.svg";
import search from "../../Assets/images/search.svg";

export const useStyles = makeStyles((theme) => ({
  /**
   * @ flex
   */
  flex: {
    display: "flex",
  },

  /**
   * @ margin
   */
  mr15: {
    marginRight: "15px !important",
  },

  boxWidth: {
    width: "100%",
    // maxWidth: "1181px",
    margin: "0 auto",
    padding: "0 20px",
    boxSizing: "border-box",
  },
  /**
   * @ heading
   */
  headingSection: {
    marginTop: "60px",
    "@media (max-width: 767px)": {
      marginTop: "40px",
    },
  },
  headingSectionMaxWidth: {
    maxWidth: "1181px",
    margin: "0 auto",
    paddingTop: "0px",
    paddingBottom: "40px",
  },
  heading_block: {
    display: "flex",
    alignItems: "center",
  },
  headingImgCircle: {
    width: 65,
    height: 65,
    borderRadius: 200,
    background: `url(${nftimg})`,
    marginTop: "3px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
  headingTitle: {
    marginLeft: 21,
    "& > h4": {
      margin: "0",
      fontSize: "18px",
      fontFamily: "IBMPlexSans",
      fontWeight: 600,
      color: theme.colorPlate.blueCharcoal,
      "@media (max-width: 560px)": {
        fontSize: "14px",
      },
    },
    "& > h2": {
      margin: "0",
      fontSize: "40px",
      fontFamily: "IBMPlexSans",
      fontWeight: 400,
      lineHeight: "48px",
      color: theme.colorPlate.blueCharcoal,
      "@media (max-width: 560px)": {
        fontSize: "24px",
        lineHeight: "28.8px",
      },
    },
  },
  // select1: {
  //   "& div:first-child": {
  //     background: "#c4edec",
  //     borderColor: "#c4edec",
  //     borderRadius: "6px",
  //     cursor: "pointer",
  //   },
  // },
  searchBox: {
    marginTop: 20,
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width: 767px)": {
      flexDirection: "column",
    },
  },
  searchContainer: {
    width: "100%",
    maxWidth: "580px",
    "@media (max-width: 767px)": {
      maxWidth: "100%",
    },
    position: "relative",
    "&:before": {
      content: "''",
      background: `url(${search})`,
      backgroundSize: "contain",
      width: "20px",
      height: "20px",
      backgroundPosition: "center center",
      position: "absolute",
      top: "50%",
      left: "20px",
      transform: "translateY(-50%)",
    },
  },
  input: {
    margin: 0,
    height: 60,
    width: "180px",
    outline: 0,
    borderRadius: 6,
    border: "1.5px solid rgba(55, 65, 106, 0.2);",
    padding: "15px 20px 16px 15px",
    background: theme.colorPlate.white,
    color: theme.colorPlate.blueCharcoal,
    fontSize: 14,
    lineHeight: 19.6,
    fontFamily: "Inter",
    fontWeight: 400,
  },

  searchInputWidth: {
    paddingLeft: "50px",
    width: "100%",
  },
  sort_container: {
    display: "flex",
    "@media (max-width: 767px)": {
      justifyContent: "space-between",
    },
  },
  /**
   * @ cardsSection
   */
  cardsSection: {
    maxWidth: "1181px",
    margin: "0 auto",
    marginTop: 90,
    paddingBottom: "110px",
    "@media (max-width: 767px)": {
      marginTop: 70,
      paddingBottom: "40px",
    },
  },
  cardsSectionTitle: {
    margin: 0,
    marginBottom: 10,
    fontSize: 18,
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    lineHeight: "21.6px",
    color: theme.colorPlate.black,
  },
  cards: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    "@media (max-width: 1210px)": {
      justifyContent: "center",
    },
  },
}));

export const reactSelectStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "#c4edec",
    boxShadow: "none",
    minWidth: "180px",
    height: 55,
    paddingLeft: "4px",
    paddingRight: ".2px",
    fontFamily: "Inter",
    fontWeight: 600,
    outline: 0,
    borderRadius: 6,
    border: "1.5px solid #c4edec;",
    cursor: "pointer",
    opacity: 1,
    color: "#1C232B",
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
  }),
};

export const reactSelectStylesTwo = {
  ...reactSelectStyles,
  control: (styles) => ({
    ...styles,
    backgroundColor: "#c4edec",
    boxShadow: "none",
    width: "110px",
    height: 55,
    paddingLeft: "4px",
    paddingRight: ".2px",
    fontFamily: "Inter",
    fontWeight: 600,
    outline: 0,
    borderRadius: 6,
    border: "1.5px solid #c4edec;",
    cursor: "pointer",
    opacity: 1,
    color: "#1C232B",
    ":hover": {
      border: "1.5px solid rgba(15, 25, 32, 0.25)",
    },
  }),
};

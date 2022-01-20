import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  /**
   * @ flex options
   */
  flex: {
    display: "flex",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
  },
  flexVerticalCenter: {
    display: "flex",
    alignItems: "center",
  },
  /**
   * @ margins
   */
  marginLeft20: {
    marginLeft: "20px",
  },
  marginTop10: {
    marginTop: "10px",
  },
  marginTop20: {
    marginTop: "20px",
  },
  title: {
    margin: "0",
    fontSize: "24px",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    lineHeight: "28.8px",
    color: theme.colorPlate.blueCharcoal,
    "@media (max-width:767px)": {
      display: "none",
    },
  },
  nftBox: {
    marginBottom: "120px",
    "@media (max-width:767px)": {
      marginBottom: "40px",
    },
  },
  searchInputContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10px",
    "@media (max-width:767px)": {
      marginTop: "20px",
    },
  },
  input: {
    margin: "0",
    marginLeft: "3px",
    width: "100%",
    maxWidth: "509px",
    height: "51px",
    color: theme.colorPlate.black,
    background: theme.colorPlate.white,
    padding: "15px 20px 16px 15px",
    borderRadius: "6px",
    border: "1.5px solid rgba(55, 65, 106, 0.2);",
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "14px",

    lineHeight: "19.6px",
    outline: "none",
    marginRight: "12px",
  },
  selectOrderBy: {
    margin: "0",
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 400,

    lineHeight: "16.8px",
    color: theme.colorPlate.blueCharcoal,
    marginLeft: "133px",
  },
}));

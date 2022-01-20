import { makeStyles } from "@material-ui/core/styles";
import nft_image from "../../../Assets/images/nft_image.png";
export const useStyles = makeStyles((theme) => ({
  /**
   * @ flex
   */
  flexBetween: {
    display: "flex",
    justifyContent: "space-between",
  },
  flexVerticalCenter: {
    display: "flex",
    alignItems: "center",
  },

  /**
   * @ width
   */
  w92: {
    width: "92px !important",
  },

  card: {
    margin: "10px 0",
    width: "100%",
    minHeight: "269px",
    background: "#fff",
    borderRadius: "20px",
    boxSizing: "border-box",
    // padding: "10px 30px 10px 10px",
    padding: "10px 10px 10px 10px",
    display: "flex",
    "@media (min-width: 1210px)": {
      width: "580px",
    },
    "@media (max-width: 1209px)": {
      width: "100%",
      maxWidth: "335px",
      margin: "10px",
      flexDirection: "column",
    },
    "@media (max-width: 575px)": {
      width: "100%",
      maxWidth: "335px",
      margin: "5px",
      flexDirection: "column",
    },
  },
  cardPadding: {
    // padding: "10px 30px 10px 10px",
    display: "flex",
  },
  cardImg: {
    minWidth: "186.67px",
    width: "100%",
    height: "248.89px",
    backgroundImage: `url(${nft_image})`,
    borderRadius: "12px",
    backgroundRepeat: "no-repeat",
    "@media (max-width: 1209px)": {
      backgroundPosition: "center",
    },
  },
  cardContent: {
    boxSizing: "border-box",
    padding: "20px",
    width: "100%",
    "@media (max-width: 767px)": {
      padding: "10px 5px",
      marginTop: "26px",
    },
  },
  title: {
    margin: "0",
    fontSize: "24px",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    lineHeight: "28.8px",
    color: theme.colorPlate.blueCharcoal,
  },
  stamp: {
    margin: "0",
    textTransform: "uppercase",
    minWidth: "52px",
    height: "30px",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: theme.colorPlate.lgtOrange,
    fontSize: "12px",
    lineHeight: "17px",
    color: theme.colorPlate.white,
    minHeight: "33px",
  },
  byDiv: {
    marginTop: 3,
    display: "flex",
    alignItems: "center",
    "& > p": {
      margin: "0",
      fontSize: "14px",
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "19.6px",
      color: theme.colorPlate.blueCharcoal,
    },
  },
  byDivTwo: {
    marginTop: 3,
    display: "flex",
    alignItems: "center",
    "& p": {
      margin: "0",
      fontSize: "14px",
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "19.6px",
      color: theme.colorPlate.blueCharcoal,
    },
    "& :last-child": {
      color: theme.colorPlate.orange,
      fontFamily: "Inter",
      fontWeight: 600,
      lineHeight: "16.8px",
    },
  },
  imageDiv: {
    position: "relative",
    width: "90px",
    height: "30px",
    display: "flex",
    "& :nth-child(1)": {
      marginLeft: "1px",
    },
    "& :nth-child(2)": {
      marginLeft: "-10px",
    },
    "& :nth-child(3)": {
      marginLeft: "-10px",
    },
    "& :nth-child(4)": {
      marginLeft: "-10px",
    },
  },
  imgCircle: {
    margin: "0",
    width: "30px",
    height: "30px",
    background: "#c4edec",
    border: ` 2px solid ${theme.colorPlate.white}`,
    borderRadius: "200px",
  },
  imgCircleTwo: {
    margin: "0",
    width: "30px",
    height: "30px",
    background: "#c4edec",
    border: ` 2px solid ${theme.colorPlate.white}`,
    borderRadius: "200px",
    marginLeft: "6px",
    "& + p": {
      marginLeft: "5px",
    },
  },
  rewardText: {
    margin: "0",
    marginTop: "20px",
    fontSize: "14px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    lineHeight: "17px",
    color: theme.colorPlate.blueCharcoal,
    "@media (max-width: 767px)": {
      marginTop: "11px",
    },
  },
  offerText: {
    margin: "0",
    marginTop: "3px",
    fontSize: "18px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    lineHeight: "22px",
    color: theme.colorPlate.blueCharcoal,
  },
  orangeText: {
    color: "#21D1CC",
  },
  buyOutText: {
    margin: "0",
    marginTop: "17px",
    fontSize: "14px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    lineHeight: "17px",
    color: theme.colorPlate.blueCharcoal,
    "@media (max-width: 767px)": {
      marginTop: "7px",
    },
  },
  priceBox: {
    marginTop: "4px",
    display: "flex",
    justifyContent: "space-between",
  },
  price: {
    "& > h4": {
      margin: "0",
      fontSize: "18px",
      fontFamily: "IBMPlexSans",
      fontWeight: 600,
      lineHeight: "22px",
      color: theme.colorPlate.blueCharcoal,
    },
    "& > p": {
      margin: "0",
      marginTop: "5px",
      fontSize: "12px",
      fontFamily: "Inter",
      fontWeight: 400,
      lineHeight: "17px",
      color: theme.colorPlate.blueCharcoal,
    },
  },
  viewBtn: {
    width: "106px",
    height: "48px",
    borderRadius: "6px",
    background: "#21D1CC",
    border: 0,
    outline: 0,
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 600,
    lineHeight: "17px",
    color: theme.colorPlate.white,
    cursor: "pointer",
    padding: "15px 20px 16px 20px",
  },
}));

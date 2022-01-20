import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  /**
   * @ margin
   */
  marginLeft20: {
    marginLeft: "20px",
  },
  marginLeft21: {
    marginLeft: "21px",
    "@media (max-width: 480px)": {
      marginLeft: "11.5px",
    },
  },
  marginTop30: {
    marginTop: "30px",
  },

  /**
   * @ flex
   */
  flex: {
    display: "flex",
  },
  flexCenterSpaceBetween: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  /**
   * @ box
   */
  boxWidth: {
    maxWidth: "1180px",
    margin: "0 auto",
    width: "100%",
    boxSizing: "border-box",
    padding: "60px 0 120px",
    "@media (max-width: 1260px)": {
      padding: "60px 20px 120px",
      justifyContent: "center",
    },
    "@media (max-width: 768px)": {
      padding: "20px 20px 40px",
      justifyContent: "center",
    },
  },
  /**
   * titles
   */

  imgCircle: {
    width: "60px",
    height: "60px",
    borderRadius: "200px",
    background: theme.colorPlate.bunker,
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    "@media (max-width: 560px)": {
      width: "46px",
      height: "46px",
    },
  },
  subTitle: {
    margin: "0",
    color: theme.colorPlate.blueCharcoal,
    fontSize: "16px",
    fontFamily: "Inter",
    fontWeight: 400,
    lineHeight: "19.2px",
  },
  title: {
    margin: "0",
    color: theme.colorPlate.blueCharcoal,
    fontSize: "40px",
    fontFamily: "Inter",
    fontWeight: 400,
    lineHeight: "48px",
    "@media (max-width: 480px)": {
      fontSize: "24px",
      lineHeight: "28.8px",
    },
  },

  /**
   * cards
   */

  cards: {
    display: "flex",
    flexWrap: "wrap",
    "@media (max-width: 1260px)": {
      justifyContent: "center",
    },
  },

  /**
   * @ hotel card
   */
  hotelCard: {
    width: "100%",
    maxWidth: "281px",
    height: "auto",
    minHeight: "414px",
    background: "#fff",
    borderRadius: "20px",
    margin: "0",
    marginTop: "30px",
    transition: "all .3s",
    marginRight: "10px",
    "&:hover": {
      transform: "scale(1.02)",
    },
    "@media (max-width: 1260px)": {
      maxWidth: "335px",
      marginLeft: "10px",
    },
    "@media (max-width: 785px)": {
      maxWidth: "281px",
    },
    "@media (max-width: 677px)": {
      maxWidth: "100%",
      marginLeft: "0px",
      marginRight: "0px",
    },
    "@media (max-width: 480px)": {
      marginTop: "20px",
      minHeight: "auto",
    },
  },
  hotelCardPadding: {
    padding: "10px",
  },
  shsHotelCardImage: {
    width: "100%",
    height: "271px",
    borderRadius: "12px",
    position: "relative",
  },
  favhotelimg: {
    borderRadius: "12px",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  shsHotelCardBody: {
    padding: "0 10px",
  },
  nohtels: {
    float: "left",
    width: "100%",
    textAlign: "left",
    padding: "30px",
    fontSize: "18px",
  },
  favicon: {
    position: "absolute",
    right: "5%",
    top: "4.31%",
    cursor: "pointer",
  },
  shsHotelCardName: {
    margin: "0",
    marginTop: "15px",
    fontFamily: "Inter",
    fontWeight: 600,

    fontSize: "18px",
    lineHeight: "21.6px",
    color: "#1C232B",
  },
  shsHotelCardAmenities: {
    margin: "0",
    marginTop: "5px",
    paddingRight: "14px",
    fontSize: "13px",
    lineHeight: "15.6px",
    color: "#1c232b",
    display: "inline-block",
  },
  borderLeft: {
    paddingLeft: "12px",
    paddingRight: "12px",
    borderLeft: "1px solid rgba(28, 35, 43, 0.15)",
  },
  shsHotelCardPrice: {
    fontSize: "22px",
    fontFamily: "Inter",
    fontWeight: 400,
    color: "#1c232b",
    lineHeight: "26.4px",
    margin: "0",
    marginTop: "17px",
  },
  showmore: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "15px 20px 16px",
    width: "1180px",
    height: "48px",
    border: "1.5px solid rgba(55, 65, 106, 0.2)",
    boxSizing: "border-box",
    borderRadius: "6px",
    fontFamily: "Inter",
    fontWeight: 400,

    fontSize: "14px",
    lineHeight: "120%",
    textAlign: "center",
    color: "#37416A",
    cursor: "pointer",
    marginTop: "25px",
  },
  shsHotelCardPriceText: {
    marginLeft: "6px",
    fontSize: "12px",
  },
  shsHotelCardButton: {
    width: "51.33px",
    height: "31px",
    border: "1px solid rgba(28, 35, 43, 0.15)",
    color: "#37416A",
    borderRadius: "6px",
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    background: theme.colorPlate.transparent,
  },
}));

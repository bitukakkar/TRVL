import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  cardBox: {
    width: "100%",
    maxWidth: "750px",
    minHeight: "297px",
    padding: "10px 30px 10px 10px",
    "@media (max-width: 780px)": {
      padding: "10px 10px 10px 10px",
    },
    borderRadius: "20px",
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // paddingBottom: "5px",
    marginBottom: "10px",
    position: "relative",
  },
  imageDiv: {
    position: "relative",
  },
  imageSliderMaxWidth: {
    // maxWidth: "369px",
    width: "100%",
  },
  image: {
    width: "100%",
    // maxWidth: "369px",
    height: "277px",
    borderRadius: "12px",
    background: theme.colorPlate.bunker,
  },
  sliderImageStyle: {
    height: "100%",
    width: "100%",
    maxHeight: "279px",
    objectFit: "cover",
    "@media (max-width: 480px)": {
      maxHeight: "200px",
    },
  },
  rating: {
    width: "60px",
    height: "60px",
    borderRadius: "12px",
    background: theme.colorPlate.white,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "10px",
    left: "10px",
  },
  ratingText: {
    margin: "0",
    padding: "0",
    lineHeight: "21.6px",
    fontSize: "18px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    color: theme.colorPlate.blueCharcoal,
  },
  contentDiv: {
    marginLeft: "30px",
    "@media (max-width: 767px)": {
      marginLeft: "0px",
    },
    "@media (max-width: 780px)": {
      padding: "10px",
    },
    "@media (max-width: 370px)": {
      padding: "10px 0 0",
    },
  },
  title: {
    margin: "auto 0 5px 0",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    fontSize: "24px",
    lineHeight: "28.8px",
    color: theme.colorPlate.blueCharcoal,
  },
  amenities: {
    margin: "0",
    marginBottom: "23px",
    width: "100%",
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 400,
    lineHeight: "19.6px",
    "@media (max-width: 480px)": {
      marginBottom: "20px",
      color: "rgba(28, 35, 43, 0.7)",
    },
  },
  hotelguests: {
    margin: "0",
    marginBottom: "5px",
    width: "100%",
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 400,
    lineHeight: "19.6px",
    textTransform: "lowercase",
  },
  roomText: {
    fontSize: "18px",
    lineHeight: "21.6px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    color: theme.colorPlate.blueCharcoal,
    margin: "0",
    marginBottom: "28px",
    "@media (max-width: 480px)": {
      marginBottom: "20px",
    },
  },
  priceBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // flexWrap: "wrap",
  },
  price: {
    margin: "0",
    color: theme.colorPlate.blueCharcoal,
    fontSize: "22px",
    lineHeight: "26.4px",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
  },
  priceSubText: {
    fontSize: "12px",
    lineHeight: "14.4px",
  },
  totalPrice: {
    margin: "0",
    fontSize: "14px",
    lineHeight: "19.6px",
    color: theme.colorPlate.blueCharcoal,
    opacity: "0.7",
  },
  button: {
    ...theme.button,
    width: "100%",
    maxWidth: "161px",
    height: "48px",
    border: "none",
    color: "#fff",
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 600,
    marginTop: "4px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px 20px 16px",
    top: "423px",
    backgroundColor: "#21D1CC",
    borderRadius: "6px",
    "&:hover": {
      background: theme.palette.primary.main,
    },

    "@media (max-width: 480px)": {
      minWidth: "161px",
    },

    "@media (max-width: 359px)": {
      minWidth: "auto",
    },
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
  icon: {
    // marginTop: "20px",
    cursor: "pointer",
    "@media (max-width: 780px)": {
      position: "absolute",
      top: "20px",
      right: "20px",
    },
  },
  favIconStyle: {
    color: "#FD7269",
    fontSize: "24px",
    "@media (max-width: 480px)": {
      // color: "#fff",
    },
  },
  flexCenter: {
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
  },
}));

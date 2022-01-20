import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  cardBox: {
    width: "100%",
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
    marginBottom: "10px",
    position: "relative",
  },
  // imageGridContainer: {
  //   "@media (max-width:767px)": {
  //     maxHeight: "297px",
  //   },
  //   "@media (max-width:560px)": {
  //     maxHeight: "260px",
  //   },
  //   "@media (max-width:480px)": {
  //     maxHeight: "200px",
  //   },
  // },
  imageDiv: {
    position: "relative",
  },
  imageSliderMaxWidth: {
    width: "100%",
  },
  favIconStyle: {
    color: "#37416A",
    fontSize: "24px",
    "@media (max-width: 560px)": {
      position: "absolute",
      top: "20px",
      right: "20px",
    },
  },
  image: {
    width: "100%",
    height: "277px",
    borderRadius: "12px",
    background: theme.colorPlate.bunker,
    "@media (max-width: 560px)": {
      height: "200px",
    },
  },
  sliderImageStyle: {
    height: "100%",
    width: "100%",
    maxHeight: "279px",
    "@media (max-width: 560px)": {
      maxHeight: "200px",
    },
    objectFit: "cover",
  },
  icon: {
    // marginTop: "20px",
    cursor: "pointer",
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
    fontSize: "18px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    color: theme.colorPlate.blueCharcoal,
  },
  // contentDiv: {
  //   marginLeft: "30px",
  //   "&  svg": {
  //     // color: '#37416A',
  //     // fill: '#37416A',
  //     // position: 'absolute',
  //     top: "30px",
  //     right: "30px",
  //   },
  // },
  contentDiv: {
    marginLeft: "30px",
    "@media (max-width: 767px)": {
      marginLeft: "0px",
    },
    "@media (max-width: 780px)": {
      padding: "10px",
    },
  },
  title: {
    margin: "0px 0 5px 0",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    fontSize: "24px",
    lineHeight: "28.8px",
    color: "#1c232b",
    paddingRight: "25px",
  },
  addressText: {
    margin: "0",
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 400,

    lineHeight: "19.6px",
    color: theme.colorPlate.blueCharcoal,
  },

  roomText: {
    fontSize: "18px",
    lineHeight: "21.6px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    color: "#1c232b",
    margin: "0",
    marginTop: "20px",
    marginBottom: "55px",
    "@media (max-width: 767px)": {
      marginBottom: "20px",
    },
  },
  priceBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {
    margin: "0",
    color: "#1C232B",
    fontSize: "24px",
    lineHeight: "28.8px",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
  },
  priceSubText: {
    fontSize: "14px",
    lineHeight: "16.8px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    color: "#1C232B",
  },
  totalPrice: {
    margin: "0",
    fontSize: "14px",
    lineHeight: "19.6px",
    color: "#1C232B",
    opacity: "0.7",
  },
  button: {
    color: "#F5F9FD",
    width: "100%",
    border: "none",
    height: "48px",
    padding: "0px",
    fontSize: "14px",
    maxWidth: "115px",
    background: "#21D1CC",
    fontFamily: "Inter",
    fontWeight: 600,
    borderRadius: "6px",
    cursor: "pointer",
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

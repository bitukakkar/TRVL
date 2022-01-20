import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "GTWalsheim",
    fontWeight: 400,
    marginTop: 150,
    overflowX: "hidden",
    "@media (max-width: 767px)": {
      marginTop: 0,
    },
  },

  box: {
    width: "100%",
    margin: "0 auto",
    boxSizing: "border-box",
    maxWidth: "1184px !important",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 20px",
    "@media (max-width: 767px)": {
      padding: "0",
    },
  },
  bestoffersHeadingContainer: {
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bestoffersHeadingBlock_padding: {
    "@media (max-width: 767px)": {
      padding: "0px 20px",
    },
  },
  bestoffersHeadingBlock: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  bestOfferIcon: {
    width: 46,
    height: 46,
    marginRight: 20,
    objectFit: "cover",
    borderRadius: "200px",
    "@media (max-width: 460px)": {
      margin: "0 15px 0 10px",
    },
  },
  bestoffers: {
    margin: 0,
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "120%",
    color: theme.colorPlate.blueCharcoal,
    width: "100%",
    "@media (max-width: 560px)": {
      fontSize: "14px",
      lineHeight: "120%",
    },
  },
  hotelsoff: {
    margin: 0,
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "40px",
    lineHeight: "120%",
    color: theme.colorPlate.blueCharcoal,
    width: "100%",
    "@media (max-width: 560px)": {
      fontSize: "24px",
      lineHeight: "28.8px",
    },
  },
  innercontainer: {
    marginTop: "100px",
    "@media (max-width: 480px)": {
      marginTop: 0,
    },
  },
  cardsDiv: {
    width: "100%",
    display: "flex",
    marginTop: "20px",
    "@media (max-width: 767px)": {
      overflowX: "scroll",
      paddingLeft: "20px",
      paddingRight: "20px",
    },
    "@media (max-width: 480px)": {
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  },
  sm_view_all_hotel_btn: {
    width: "100%",
    margin: "0 auto",
    padding: "0 20px",
    boxSizing: "border-box",
  },
}));

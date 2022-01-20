import { makeStyles } from "@material-ui/core/styles";
import { BORDER_RADIUS } from "../../Constants/General";

export const useStyles = makeStyles((theme) => ({
  tokenPageContainer: {
    fontFamily: theme.typography.fontFamily,
  },
  heroContainer: {
    display: "flex",
    justifyContent: "space-between",
    height: "calc(100vh - 3vw)",
    alignItems: "center",
    width: "70%",
    margin: "auto",
    // border: "1px solid red",
  },
  heroLeftContainer: {
    width: "45%",
    "& h1": {
      color: "#333333",
      fontSize: "50px",
    },
    "& p": {
      color: theme.secondaryText,
    },
  },

  heroRightContainer: {
    marginLeft: "20px",
    // border: "1px solid red",
    width: "45%",
  },
  tokenDetailContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  tokenDetail: {
    marginBottom: "20px",
    width: "40%",
    "& h2": {
      margin: 0,
      fontSize: "18px",
      color: "#333333",
    },
    "& p": {
      margin: 0,
      color: theme.secondaryText,
    },
  },
  contractAddressContainer: {
    marginTop: "20px",
    "& h2": {
      fontSize: "15px",
      color: "#333333",
    },
  },
  primaryBtn: {
    fontSize: 17,
    background: theme.palette.primary.light,
    color: "#fff",
    padding: "10px 30px",
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },

  secondaryBtn: {
    fontSize: 17,
    border: `1px solid ${theme.palette.primary.light}`,
    color: theme.palette.primary.light,

    padding: "10px 30px",
    "&:hover": {
      color: theme.palette.primary.text,
      background: theme.palette.primary.main,
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },
  heroBtnContainer: {
    marginTop: "40px",
  },

  // Token uses page
  tokenUsesContainer: {
    background: "#F6F6F8",
    width: "100%",
    margin: "auto",
    padding: "100px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  tokenUsesHeading: {
    width: "100%",
    textAlign: "center",
    marginBottom: "50px",
  },
  tokenUsesInnerContainer: {
    width: "70%",
    margin: "auto",
  },
  tokenUsesCardContainer: {
    display: "flex",
    justifyContent: "space-around",
  },
  tokenUsesCard: {
    margin: "20px",
    padding: "20px",
    background: "#fff",
    borderRadius: BORDER_RADIUS,
    boxShadow: "0 0 5px #9a9a9a30",
    maxWidth: "300px",
  },
  tokenUsesCardImg: {
    width: "50%",
    margin: "auto",
    "& img": {
      width: "100%",
    },
  },
  tokenUsesCardTitle: {
    "& h3": {
      color: "#333333",
    },
    "& p": {
      marginBottom: 0,
      color: theme.secondaryText,
    },
  },

  // Buy and store TRVL page
  buyTokenContainer: {
    width: "100%",
    margin: "100px 0",
  },
  buyTokenInnerContainer: {
    width: "70%",
    margin: "auto",
  },
  buyTokenHeading: {
    width: "100%",
    textAlign: "center",
    "& h1": {
      color: "#333333",
    },
  },
  buyTokenSubHeading: {
    width: "100%",
    textAlign: "center",
    marginBottom: "80px",
    "& p": {
      color: theme.secondaryText,
    },
  },
  partnerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  partnerContainerRow: {
    display: "flex",
  },
  exchangePartner: {
    boxSizing: "border-box",
    width: "250px",
    boxShadow: "0 0 5px #9a9a9a61",
    margin: "10px",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& img": {
      width: "100%",
    },
  },
}));

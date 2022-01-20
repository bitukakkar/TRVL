import { makeStyles } from "@material-ui/core/styles";

const colorPlate = {
  dark: "#1C232B",
  deepDark: "#0F1920",
  gray: "#F2F2F2",
  darkGray: "#E7E7E7",
  black: "#000",
  white: "#fff",
  white2: "#F5F9FD",
  orange: "#FD7269",
};
export const useStyles = makeStyles((theme) => ({
  boxWidth: {
    maxWidth: "1180px",
    margin: "0 auto",
    fontFamily: "Inter",
    fontWeight: 400,
    marginTop: "60px",
    boxSizing: "border-box",
    padding: "5px",
    "@media (max-width:767px)": {
      marginTop: "20px",
    },
    "@media (max-width:1190px)": {
      padding: "0 20px",
    },
  },

  onauctionblock: {
    maxWidth: "480px",
    width: "100%",
    maxHeight: "600px",
    background: "#fff",
    borderRadius: "20px",
    padding: "0px 60px 60px",
    position: "relative",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width:767px)": {
      width: "100%",
      maxWidth: "100%",
      padding: "0px 20px 20px",
    },
    "@media (max-width: 480px)": {
      height: "466px",
      maxHeight: "466px",
    },
  },

  righttop1: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    "@media (max-width:767px)": {
      marginTop: 30,
    },
  },
  righttop2: {
    width: "100%",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "56px",
    lineHeight: "120%",
    color: "#1C232B",
    marginTop: "13px",
    "@media (max-width: 992px)": {
      fontSize: "40px",
      lineHeight: "48px",
    },
  },
  footerblock: {
    position: "relative",
    background: "#0F1920",

    width: "100%",
    height: "200px",
    marginTop: "80px",
  },
  bidgraph: {
    width: "100%",
  },
  righttop3: {
    width: "100%",
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "14px",
    lineHeight: "140%",
    color: "#1C232B",
    marginTop: "10px",
    marginBottom: "0px",
    "@media (max-width:767px)": {
      marginTop: "21px",
    },
  },
  righttop4: {
    width: "100%",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "24px",
    lineHeight: "120%",
    color: "#1C232B",
  },
  borderdiv1: {
    width: "100%",
    border: "1px solid #0F1920",
    height: "0px",
    opacity: "0.15",
    marginTop: "28px",
    marginBottom: "30px",
  },
  righttop5left1: {
    color: "#1C232B",
    width: "100%",
    fontSize: "14px",
    fontStyle: "normal",
    fontFamily: "Inter",
    fontWeight: 400,

    lineHeight: "140%",
    marginBottom: "1px",
  },
  righttop5: {
    width: "100%",
    marginTop: "80px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width:767px)": {
      marginTop: "82px",
    },
  },

  righttop5left1_1: {
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "24px",
    lineHeight: "120%",
    color: "#1C232B",
  },
  righttop5left1_2: {
    color: theme.colorPlate.blueCharcoal,

    fontSize: "12px",
    fontStyle: "normal",
    fontFamily: "Inter",
    fontWeight: 400,

    lineHeight: "140%",
    marginLeft: "14px",
    marginTop: "8px",
  },
  righttop6: {
    width: "100%",
  },
  righttop6_1: {
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "14px",
    lineHeight: "140%",
    color: "#1C232B",

    marginBottom: "16px",
  },
  btnplacebid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "102px",
    height: "48px",
    background: "#21D1CC",
    borderRadius: "6px",
    fontFamily: "Inter",
    fontWeight: 600,
    fontStyle: "normal",
    fontSize: "14px",
    lineHeight: "120%",
    textAlign: "right",
    color: "#ffffff",
    border: "none",

    cursor: "pointer",
  },
  righttop1_1: {
    width: "17px",
    height: "20px",
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "14px",
    lineHeight: "140%",
    color: "#1C232B",

    marginRight: "4px",
  },
  righttop1_2: {
    width: "30px",
    height: "30px",

    marginRight: "5px",
    borderRadius: "100px",
    border: "solid 2px #fff",
    background: "#c4edec",
  },
  righttop1_3: {
    width: "63px",
    height: "20px",

    fontFamily: "Inter",
    fontWeight: 600,
    fontStyle: "normal",
    fontSize: "14px",
    color: "#21D1CC",
  },
  nftblockheading: {
    width: "100%",
    height: "29px",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "24px",
    lineHeight: "120%",
    color: "#1C232B",

    marginBottom: "10px",
  },
  nftcontentblock: {
    width: "100%",
    height: "269px",
    background: "#fff",
    borderRadius: "20px",
  },
  nftcontentblockright: {
    width: "61%",
    padding: "12px",
  },
  nftcontentblockright1: { width: "100%", marginTop: "10px" },
  nftcontentblockright1_1: {
    width: "207px",
    height: "29px",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "24px",
    lineHeight: "120%",
    color: theme.colorPlate.blueCharcoal,
  },
  nftcontentblockright2: { width: "100%", marginTop: "5px" },
  nftcontentblockright1_2: {},
  nftcontentblockright2_1: {
    width: "17px",
    height: "20px",
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "14px",
    lineHeight: "140%",
    color: theme.colorPlate.blueCharcoal,

    marginRight: "3px",
  },
  nftcontentblockright3: {
    width: "100%",
    height: "16px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,

    fontStyle: "normal",

    fontSize: "14px",
    lineHeight: "120%",
    color: "#1C232B",
    marginTop: "20px",
  },
  nftcontentblockright5: { width: "100%", marginTop: "38px" },
  nftcontentblockright5_left: { width: "207px" },
  nftcontentblockright5_left2: {
    width: "100%",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    fontStyle: "normal",
    fontSize: "18px",
    lineHeight: "120%",
    color: theme.colorPlate.blueCharcoal,

    marginTop: "1px",
  },
  viewnowbtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "15px 20px 16px",
    width: "auto",
    height: "48px",
    borderRadius: "6px",
    fontFamily: "Inter",
    fontWeight: 600,
    fontStyle: "normal",
    fontSize: "14px",
    lineHeight: "120%",
    textAlign: "right",
    color: "#ffffff",

    background: "#21D1CC",
    border: "none ",
    cursor: "pointer",
  },
  nftcontentblockright5_left3: {
    width: "100%",
    height: "17px",
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "12px",
    lineHeight: "140%",
    color: theme.colorPlate.blueCharcoal,

    marginTop: "5px",
  },
  nftcontentblockright5_right: {
    width: "auto",
    marginTop: "12px",
  },
  nftcontentblockright5_left1: {
    width: "100%",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    fontStyle: "normal",
    fontSize: "14px",
    lineHeight: "120%",
    color: theme.colorPlate.blueCharcoal,
  },
  nftcontentblockright4: {
    width: "100%",

    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    fontStyle: "normal",
    fontSize: "18px",
    lineHeight: "120%",
    color: "#1C232B",
    marginTop: "3px",
  },
  nftcontentblockright2_3: {
    width: "63px",
    height: "20px",
    fontFamily: "Inter",
    fontWeight: 600,
    fontStyle: "normal",

    fontSize: "14px",
    lineHeight: "120%",
    color: "#21D1CC",
  },
  nftcontentblockright2_2: {
    width: "30px",
    height: "30px",

    marginTop: "-3px",
    marginRight: "4px",
    borderRadius: "100px",
    border: "solid 2px #fff",
    background: "#c4edec",
  },
  nftcontentblockleft: {
    width: "auto",
    padding: "12px",
  },
  nftblockimg1: {
    width: "186.67px",
    height: "248.89px",
  },
  nftdetailsblock: {
    width: "100%",
    maxWidth: "480px",
    height: "auto",
    marginTop: "60px",
    "@media (max-width:767px)": {
      width: "100%",
      marginTop: "37px",
      maxWidth: "100%",
    },
  },
  Nftblock: {
    width: "100%",
    marginTop: "50px",
    paddingBottom: "120px",
  },
  rightbottomblock: {
    width: "100%",
    height: "auto",
    marginTop: "60px",
    "@media (max-width:767px)": {
      marginTop: "40px",
    },
  },
  rightbottomblock1: {
    width: "100%",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "24px",
    lineHeight: "120%",
    color: "#1C232B",
  },
  rightbottomblock2: {
    width: "100%",
    height: "auto",
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "16px",
    lineHeight: "140%",
    color: "#1C232B",

    marginTop: "9px",
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
    width: "100%",
    height: "29px",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "24px",
    lineHeight: "120%",
    color: "#1C232B",
    marginBottom: "10px",
    "@media (max-width:767px)": {
      display: "none",
    },
  },
  cards: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    "@media (max-width: 1210px)": {
      justifyContent: "center",
    },
  },

  nftheading: {
    width: "auto",
    height: "29px",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "24px",
    lineHeight: "120%",
    color: "#1C232B",
    marginBottom: "10px",
  },
  nftleft_ul: {
    width: "100%",
    listStyle: "none",
    padding: "0px",
    margin: "0px",
  },
  nftRight_ul: {
    width: "100%",
    listStyle: "none",
    padding: "0px",
    margin: "0px",
    textAlign: "end",
  },
  nftleft: {
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "16px",
    lineHeight: "200%",
    color: theme.colorPlate.blueCharcoal,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nftright: {
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "200%",
    textAlign: "right",
    color: theme.colorPlate.blueCharcoal,
  },
  auctionimg: {
    width: "100%",
    maxWidth: "360px",
    height: "100%",
    maxHeight: "480px",
    borderRadius: "12px",
    "@media (max-width:767px)": {
      maxHeight: "393.33px",
    },
  },
  righttopblock: {},
  auctionbtn1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "8px 12px",
    width: "auto",
    height: "33px",
    background: "#FD7269",
    borderRadius: "20px",
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "12px",
    lineHeight: "140%",
    color: "#FFFFFF",
    border: "none",
  },
  auctionbtnblock: {
    width: "100%",
    textAlign: "center",
    padding: "17px",
    marginBottom: "10px",
    "@media (max-width:767px)": {
      padding: "10px",
      marginBottom: 0,
    },
  },
  auctionbtn: { width: "100px", margin: "0 auto" },
  auctionicon: {
    top: "20px",
    right: "20px",
    height: "24px",
    position: "absolute",
  },
  autction_img: {
    width: "100%",
    textAlign: "center",
  },
  durationContainerPadding: {
    padding: "30px",
    paddingRight: "0",
  },

  box: {
    width: "380px",
    minHeight: "107px",
    borderRadius: "20px",
    marginTop: "10px",
  },
  boxOffer: {
    width: "380px",
    minHeight: "100px",
    borderRadius: "20px",
    marginTop: "9px",
    border: "1px solid rgba(0, 0, 0, 0.15)",
  },

  grayBg: {
    background: colorPlate.gray,
  },
  grayBorder: {
    border: "1px solid rgba(0, 0, 0, 0.15)",
  },
  boxPadding: {
    padding: "30px",
  },

  rightContainer: {},
}));

export const footerStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "GTWalsheim",
    fontWeight: 400,
  },
  paper: {
    padding: "0px",
    color: "#fff",
    borderRadius: "14px",
    boxShadow: "none !important",
    background: "transparent !important",
  },
  box: {
    backgroundColor: "#0F1920",
    color: "#fff",
    marginTop: "90px",
  },
  righttopblock: {
    width: "100%",
    height: "600px",
    paddingTop: "20px",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  innercontainer: {
    marginTop: "20px",
  },
  footer_logo: {
    width: "100%",
    fontSize: "31px",
    fontFamily: "GTWalsheim",
    fontWeight: 400,
  },
  footer_logo1: {
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "32px",
    lineHeight: "120%",
    color: "#FFFFFF",
  },
  footer_poweredby: {
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "italic",

    fontSize: "12px",
    lineHeight: "120%",
    color: "#FFFFFF",
    opacity: "0.7",
    marginLeft: "12px",
    marginTop: "3px",
  },
  footer_text: {
    width: "90%",
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "14px",
    lineHeight: "150%",
    color: "#FFFFFF",
    marginTop: "17px",
  },
  footer_link_heading: {
    width: "100%",
    textAlign: "left",
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "14px",
    lineHeight: "140%",
    color: "#FFFFFF",
  },
  footer_links: {
    width: "100%",
    marginTop: "22px",
    textAlign: "left",
  },
  footer_ul: {
    margin: "0px",
    padding: "0px",
  },
  footer_li: {
    listStyle: "none",
    marginTop: "7px",
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "14px",
    lineHeight: "170%",
    color: "#FFFFFF",
    letterSpacing: "0.6px",
  },
  footer_subscribe: {
    width: "100%",
    marginTop: "-22px",
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "14px",
    lineHeight: "140%",
    color: "#FFFFFF",
  },
  footer_subscribe_fields: {
    width: "100%",
    marginTop: "34px",
  },
  subscribe_input: {
    border: "1px solid #ccc",
    padding: "14px",
    borderRadius: "20px",
    background: "#0f1920",
    width: "70%",
    fontFamily: "Inter",
    fontWeight: 600,
    fontStyle: "normal",
    fontSize: "14px",
    lineHeight: "120%",
    color: "rgba(255, 255, 255, 0.5)",
    flex: "none",
    order: "0",
    flexGrow: "0",
    margin: "0px 10px",
  },
  copyright_text: {
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "14px",
    lineHeight: "140%",
    color: "#FFFFFF",
  },
  subscribe_btn: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "15px 20px 16px",
    background: "#FD7269",
    borderRadius: "40px",
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "14px",
    lineHeight: "120%",
    color: "#F5F9FD",
  },
  social_block: {
    textAlign: "right",
  },
  social_icons: {
    width: "30px",
    height: "30px",
    marginLeft: "7px",
  },
}));

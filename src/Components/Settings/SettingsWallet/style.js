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
  flexYCenter: {
    display: "flex",
    alignItems: "center",
  },
  /**
   * @ margins
   */
  marginLeft20: {
    marginLeft: "20px",
  },
  marginTop40: {
    marginTop: "40px",
  },
  marginBottom20: {
    marginBottom: "20px !important",
  },
  marginLeft7: {
    marginLeft: "7px",
  },
  title: {
    margin: "0",
    fontSize: "24px",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,

    lineHeight: "28.8px",
    color: theme.colorPlate.blueCharcoal,
    "@media (max-width:767px)": {
      marginTop: "20px",
    },
  },
  walletBox: {
    marginBottom: "120px",
    "@media (max-width:767px)": {
      marginBottom: "40px",
    },
  },
  wallet_card_container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width:1280px)": {
      flexDirection: "column",
      marginBottom: "30px",
    },
  },
  purchase_wallet_card: {
    width: "100%",
    marginLeft: "20px",
    "@media (max-width:767px)": {
      marginLeft: "0px",
    },
  },
  /**
   * @ card
   */
  card: {
    // width: "380px",
    width: "100%",
    height: "287px",
    background: theme.colorPlate.white,
    borderRadius: "20px",
    marginTop: "10px",
  },
  cardPadding: {
    padding: "32px 30px 30px 30px",
  },
  cardImage: {
    width: "80px",
    height: "80px",
    borderRadius: "200px",
    background: theme.colorPlate.blueCharcoal,
  },
  cardAmount: {
    margin: "0",
    marginTop: "2px",
    fontSize: "40px",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    lineHeight: "48px",
    color: theme.colorPlate.black,
  },
  cardAmountName: {
    margin: "0",
    fontSize: "16px",

    fontFamily: "Inter",
    fontWeight: 400,
    lineHeight: "22.4px",
    color: theme.colorPlate.black,
  },
  chart: {
    width: "100%",
    maxWidth: "320px",
    height: "54px",
    // border: "1px solid black",
    marginTop: "10px",
    "@media (max-width:1280px)": {
      width: "100%",
      maxWidth: "100%",
    },
  },
  cardButton: {
    margin: "0",
    marginTop: "30px",
    width: "100%",
    height: "48px",
    borderRadius: "40px",
    padding: "15px 20px 16px",
    background: theme.colorPlate.orange,
    border: "none",
    outline: "none",
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 600,
    lineHeight: "16.8px",
    color: theme.colorPlate.babyPowderColor,
    cursor: "pointer",
  },
  /**
   * @ table
   */
  tableDiv: {
    width: "100%",
    overflowX: "scroll",
  },
  table: {
    width: "100%",
    borderSpacing: "0px 4px",
    borderRadius: "40px",
    minWidth: "580px",
  },
  textLeft: {
    // textAlign: "left",
  },
  tableHeader: {
    fontFamily: "Inter",
    fontWeight: 600,
    textAlign: "left",
    "& > th": {
      color: "#37416A",
      opacity: "0.5",
    },
    "& :nth-child(1)": {
      paddingLeft: "31px",
    },
    "& :nth-child(2)": {
      paddingLeft: "30px",
    },
    "& :nth-child(3)": {
      paddingLeft: "30px",
    },
    "& :nth-child(4)": {
      paddingLeft: "30px",
      width: "182px",
    },
    "& :nth-child(5)": {},
  },
  tableRow: {
    height: "62px",

    borderRadius: "40px",
    "& td": {
      padding: "20px 0 20px 30px",
      fontSize: "16px",
      fontFamily: "Inter",
      fontWeight: 400,

      lineHeight: "22.4px",
      color: theme.colorPlate.black,
      textAlign: "left",
      background: "#fff",
    },
    "& :first-child": {
      width: "200px",
    },
    "& :nth-child(2)": {
      width: "117px",
    },
    "& :nth-child(4)": {
      paddingLeft: "30px",
    },

    "& :last-child": {
      paddingLeft: "0",
      width: "162px",
    },
  },
  th: {
    paddingBottom: "6px",
  },
  /**
   * modal
   */
  paper: {
    position: "absolute",
    top: "43.5%",
    left: "50%",
    transform: `translate(-50%, -50%)`,
    width: "100%",
    maxWidth: "600px",
    height: "310px",
    backgroundColor: theme.colorPlate.white,
    boxShadow: theme.shadows[5],
    borderRadius: "20px",
    transition: "all 2s ease",
  },
  paperPadding: {
    padding: "30px 60px",
    "@media (max-width:767px)": {
      padding: "20px",
    },
  },
  modalTitle: {
    margin: "0",
    fontSize: "32px",
    fontFamily: "Inter",
    fontWeight: 400,
    lineHeight: "38.4px",
    color: theme.colorPlate.black,
  },
  modalLabel: {
    display: "block",
    margin: "0",
    marginTop: "20px",
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 600,
    lineHeight: "16.8px",
    color: theme.colorPlate.black,
  },
  modalInput: {
    display: "block",
    margin: "0",
    marginTop: "6px",
    width: "100%",
    boxSizing: "border-box",
    height: "61px",
    borderRadius: "40px",
    background: theme.colorPlate.white,
    border: "1.5px solid rgba(55, 65, 106, 0.2);",
    outline: "0",
    padding: "15px 20px 16px 15px",
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 400,
    lineHeight: "19.6px",
    color: "rgba(0,0,0,0.5)",
  },
  modalInputImgCircle: {
    width: "30px",
    height: "30px",
    borderRadius: "200px",
    background: theme.colorPlate.bunker,
    border: "2px solid #E6E6E6",
  },
  modalInputCurrencyName: {
    margin: "0",
    marginLeft: "10px",
  },
  modalInputBorder: {
    width: "30px",
    height: "0",
    borderBottom: "1px solid #000000",
    opacity: "0.3",
    transform: "rotate(90deg)",
  },
  subInputModal: {
    margin: "0",
    marginLeft: "-5px",
    padding: "0",
    width: "100%",
    maxWidth: "261px",
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 400,
    background: "transparent",
    color: "rgba(0,0,0,0.5)",
    height: "30px",
    border: "none",
    outline: "none",
  },
  modalInputUsdPrice: {
    margin: "0",
  },
  borderTop: {
    marginTop: "30px",
    width: "100%",
    height: "0",
    borderTop: "1.5px solid rgba(55, 65, 106, 0.2);",
  },
  modalBtnDiv: {
    width: "100%",
    marginTop: "30px",
    textAlign: "end",
  },
  modalBtn: {
    width: "139px",
    height: "48px",
    borderRadius: "6px",
    background: theme.colorPlate.transparent,
    color: "#37416A",
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 600,
    cursor: "pointer",
    border: "1.5px solid rgba(55, 65, 106, 0.2)",
  },
  modalWidthDrawBtn: {
    width: "106px",
    marginLeft: "11px",
    background: theme.colorPlate.teal,
    color: theme.colorPlate.white,
  },
  closeBtnDiv: {
    width: "100%",
    position: "relative",
    // marginTop: "-10px",
  },
  closeBtn: {
    position: "absolute",
    top: "-10px",
    right: "-30px",
    cursor: "pointer",
    transition: "all .5s",
    "&:hover": {
      transform: "scale(1.1)",
    },
    "@media (max-width:767px)": {
      right: "0",
      top: "0",
    },
  },
  paperSellModal: {
    height: "380px",
    top: "47%",
  },
  sellModalBtnDiv: {
    marginTop: "23px",
    "& :nth-child(1)": {
      marginLeft: "-5px",
    },
    "& :nth-child(2)": {
      marginLeft: "10px",
      width: "85px",
    },
  },
  sellModalBtn: {
    width: "88px",
    height: "48px",
    background: theme.colorPlate.transparent,
    // padding: "15px 20px 16px",
    border: "1.5px solid rgba(55, 65, 106, 0.2)",
    borderRadius: "6px",
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 600,
    lineHeight: "16.8px",
    color: theme.colorPlate.chaletGreen,
    cursor: "pointer",
  },
  btnOrangeBg: {
    background: theme.colorPlate.chaletGreen,
    color: theme.colorPlate.babyPowderColor,
    border: "0",
  },
  sellModalSubmitBtn: {
    width: "173px",
    height: "48px",
    background: theme.colorPlate.teal,
    color: theme.colorPlate.babyPowderColor,
    // padding: "15px 20px 16px",
    border: "0",
    borderRadius: "6px",
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 600,
    lineHeight: "16.8px",
    cursor: "pointer",
  },
  sellModalSubmitBtnDiv: {
    width: "100%",
    marginTop: "30px",
    textAlign: "end",
  },
  nohtels: {
    float: "left",
    width: "100%",
    textAlign: "center",
    padding: "0px 0px 0px 28px",
  },
}));

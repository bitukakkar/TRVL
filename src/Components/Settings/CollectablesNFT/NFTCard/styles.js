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
  flexSpaceBetween: {
    display: "flex",
    justifyContent: "space-between",
  },
  /**
   * @ margins
   */
  marginLeft20: {
    marginLeft: "20px",
  },
  marginTop11: {
    marginTop: "11px",
  },
  marginTop12: {
    marginTop: "12px",
  },
  marginTop20: {
    marginTop: "20px",
  },
  title: {
    margin: "0",
    fontSize: "24px",
    fontFamily: "Inter",
    fontWeight: 400,

    lineHeight: "28.8px",
    color: theme.colorPlate.blueCharcoal,
  },
  walletHistoryBox: {
    marginBottom: "120px",
  },
  nftCard: {
    width: "100%",
    minHeight: "302px",
    borderRadius: "20px",
    background: theme.colorPlate.white,
    marginBottom: "20px",
  },
  nftCardPadding: {
    padding: "10px",
  },
  bgSmoke: {
    background: theme.colorPlate.white,
    height: "233px",
    borderRadius: "20px",
  },
  nftCardImg: {
    width: "160px",
    height: "213.33px",
    borderRadius: "12px",
    background: theme.colorPlate.bunker,
  },
  cardContent: {
    marginLeft: "20px",
  },
  stamp: {
    margin: "0",
    marginTop: "9px",
    minWidth: "53px",
    height: "30px",
    background: theme.colorPlate.lgtOrange,
    padding: "8px 12px",
    borderRadius: "40px",
    fontSize: "12px",
    fontFamily: "Inter",
    fontWeight: 600,
    lineHeight: "14.4px",
    color: theme.colorPlate.white,
    textAlign: "center",
    display: "inline-block",
  },
  nftName: {
    margin: "0",
    marginTop: "10px",
    fontSize: "18px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    lineHeight: "21.6px",
    color: theme.colorPlate.black,
  },
  byText: {
    margin: "0",
    fontSize: "14px",
    fontFamily: "Inter",
    fontWeight: 400,

    lineHeight: "19.6px",
    color: theme.colorPlate.black,
  },
  imageDiv: {
    position: "relative",
    width: "90px",
    height: "30px",
  },
  image: {
    margin: "0",
    width: "30px",
    height: "30px",
    background: theme.colorPlate.bunker,
    border: ` 2px solid ${theme.colorPlate.deepWhiteSmoke}`,
    borderRadius: "200px",
  },
  image1: {},
  image2: {
    marginLeft: "-10px",
  },
  image3: {
    marginLeft: "-10px",
  },
  image4: {
    marginLeft: "-10px",
  },
  rewardText: {
    margin: "0",
    fontSize: "13px",
    fontFamily: "Inter",
    fontWeight: 400,
    lineHeight: "15.6px",
    color: theme.colorPlate.blueCharcoal,
  },
  offerText: {
    margin: "0",
    marginTop: "7px",
    maxWidth: "170px",
    fontSize: "14px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    lineHeight: "16.8px",
    color: theme.colorPlate.blueCharcoal,
  },
  orangeText: {
    color: theme.colorPlate.orange,
  },
  cardBottomPadding: {
    padding: "12px 20px 20px 20px",
  },
  cardBottomText: {
    margin: "0",
    fontSize: "12px",
    fontFamily: "Inter",
    fontWeight: 800,
    lineHeight: "14.4px",
    color: theme.colorPlate.black,
  },
  nftBalance: {
    margin: "0",
    marginTop: "4px",
    fontSize: "18px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    lineHeight: "21.6px",
    color: theme.colorPlate.black,
  },
  nftBalanceUsd: {
    fontSize: "12px",
    fontFamily: "Inter",
    fontWeight: 400,

    lineHeight: "16.8px",
    color: theme.colorPlate.black,
    margin: "0",
    paddingTop: "5px",
    marginLeft: "9px",
  },
  cardBtn: {
    minWidth: "97px",
    height: "48px",
    background: "#21D1CC",
    padding: "15px 20px 16px 20px",
    fontFamily: "Inter",
    fontWeight: 600,
    color: theme.colorPlate.babyPowderColor,
    border: "none",
    outline: "none",
    cursor: "pointer",
    fontSize: "14px",
    borderRadius: "6px",
  },
  cardBtnDisabled: {
    minWidth: "97px",
    height: "48px",
    background: "#21D1CC",
    padding: "15px 20px 16px 20px",
    fontFamily: "Inter",
    fontWeight: 600,
    color: theme.colorPlate.babyPowderColor,
    border: "none",
    outline: "none",
    cursor: "pointer",
    opacity: "0.3",
    fontSize: "14px",
    borderRadius: "6px",
  },
}));

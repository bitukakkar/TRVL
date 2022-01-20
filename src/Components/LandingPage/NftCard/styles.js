import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  nft_card: {
    maxWidth: "260px",
    background: "#FFFFFF",
    borderRadius: "20px",
    margin: "0 10px",
    padding: "10px",
    textAlign: "center",
    "& > img": {
      width: "100%",
      height: "100%",
      borderRadius: "12px",
      maxHeight: "320px",
    },
    "& > h4": {
      fontSize: "18px",
      lineHeight: "21.6px",
      textAlign: "center",
      color: "#1C232B",
      margin: 0,
      marginTop: "20px",
      marginBottom: "10px",
      fontFamily: "IBMPlexSans",
      fontWeight: 600,
      minHeight: "42px",
    },
  },
}));

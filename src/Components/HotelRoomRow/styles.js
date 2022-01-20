import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
    fontFamily: theme.typography.fontFamily,
  },
  button: {
    ...theme.button,
    fontSize: 16,
    paddingHorizantal: "15px",
    marginTop: "20px",
  },
  disabledButton: {
    fontSize: 16,
    paddingHorizantal: "15px",
    marginTop: "20px",
  },
  tableHead: {
    backgroundColor: theme.palette.primary.main,
  },
  tableHeadText: {
    color: "#fff",
  },
  paymentOptionContainer: {
    padding: "15px 0",
    marginLeft: "5%",
  },
  paymentOptionHeading: {
    margin: 0,
    color: theme.palette.primary.light,
  },
  circularProgress: {
    marginRight: "10px",
  },
  collapseContainer: {
    paddingBottom: 0,
    paddingTop: 0,
  },
  cryptoBtn:{
    ...theme.button,
    fontSize: 16,
    paddingHorizantal: "15px",
    marginTop: "20px",
    marginLeft:'10px',
    backgroundColor:"transparent",
    "&:hover": {
      backgroundColor: "transparent",
    },
  }
}));

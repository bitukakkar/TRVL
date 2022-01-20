import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "GTWalsheim",
    fontWeight: 400,
  },
  paper: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    borderRadius: "14px",
  },
  box: {},
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "10px",
  },
  search_icon: {
    float: "right",
    width: "18px",
    height: "18px",
    marginLeft: "7px",
    marginTop: "3px",
  },
  innercontainer: {
    marginTop: "0px",
    justifyContent: "center",
  },
  formControl: {
    width: "100%",
  },
  selectEmpty: {},
  search_button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "170px",
    height: "60px",
    background: "#21D1CC",
    borderRadius: "6px",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
    fontStyle: "normal",

    fontSize: "16px",
    lineHeight: "120%",
    color: "#fff",
    textTransform: "capitalize",
    border: "none",
    cursor: "pointer",
  },
  search_block: {
    float: "left",
    width: "100%",
    padding: "10px",
  },
  search_block_top: {
    float: "left",
    width: "100%",
  },
  search_block_bottom: {
    float: "left",
    width: "100%",
    marginTop: "45px",
  },
  search_block_bottom_left: {
    float: "left",
    width: "82%",
  },
  search_block_bottom_right: {
    float: "right",
    width: "auto",
  },
  search_block_top_left: {
    float: "left",
    width: "50%",
  },
  search_block_top_right: {
    float: "right",
    width: "50%",
  },
  tab_details: {
    float: "left",
    padding: "10px",
    zIndex: "9",
    maxWidth: "1180px",
    minHeight: "222px",
    // background: "#E6E6E6",
    background: "#FFFFFF",
    boxShadow: "0px 30px 60px rgba(0, 0, 0, 0.05)",
    borderRadius: "20px",
  },
  searchplace: {
    float: "right",
    width: "45%",
  },
  agentname: {
    float: "left",
    width: "45%",
    marginRight: "20px",
  },
  checkinout_block: {
    float: "right",
    width: "90%",
  },
  dateselecter: {
    margin: "0px !important",
  },
  checkin: {
    float: "left",
    width: "40%",
  },
  checkout: {
    float: "left",
    width: "40%",
  },
  divider: {
    float: "left",
    width: "20%",
    marginTop: "22px",
    textAlign: "center",
  },
  arrow_icon: {
    width: "18px",
    height: "18px",
  },
  searchbottom: {
    padding: "12px",
  },
  filterblock: {
    float: "left",
    width: "50%",
  },
  option_block: {
    float: "left",
    width: "95%",
    padding: "10px",
  },
  options: {
    float: "left",
    width: "165px",
    marginRight: "30px",
  },
  search_btn: {
    float: "right",
  },
  tab_label: {
    float: "left",
    width: "80%",
    fontSize: "15px",
    textAlign: "left",
    fontFamily: "Inter",
    fontWeight: 400,
    fontStyle: "normal",
  },
  tab_icon: {
    float: "left",
    width: "20%",
  },
}));

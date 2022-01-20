import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  /**
   * @ flex options
   */
  flex: {
    display: "flex",
  },
  flexCenterSpaceBetween: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  /**
   * @ filters container
   */
  filtersContainer: {
    background: "#fff",
    // maxWidth: "380px",
    width: "100%",
    minHeight: "262px",
    padding: "30px",
    borderRadius: "20px",
    margin: "20px 0",
    boxSizing: "border-box",
  },
  filterText: {
    margin: "0",
    marginLeft: "10px",
    fontSize: "18px",
    color: theme.colorPlate.blueCharcoal,
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
  },
  filterContentMargin: {
    margin: "19px 0",
  },
  filterIcon: {
    width: "16px",
    height: "20px",
  },
  filterBoxIcon: {
    fontSize: "16px",
    background: "#fff",
    borderRadius: "20px",
  },
  numberOfGuestsText: {
    margin: "0",
    marginTop: "18px",
    color: theme.colorPlate.black,
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "19.2px",
  },
  filterButton: {
    marginTop: "11px",
    // maxWidth: "150px",
    width: "100%",
    height: "60px",
    border: "1.5px solid rgba(55, 65, 106, 0.15)",
    borderRadius: "6px",
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "16px",
    color: theme.colorPlate.blueCharcoal,
    background: "#fff",
    padding: "0 14px",
  },
  marginBottom19: {
    marginBottom: "19px",
  },
  filterCounterButton: {
    maxWidth: "20px",
    height: "20px",
    border: `2px solid ${theme.colorPlate.chaletGreen}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "200px",
    transition: ".5s",
    cursor: "pointer",
  },
  filterCounterButtonDisabled: {
    maxWidth: "20px",
    height: "20px",
    border: `2px solid rgba(55, 65, 106, .3)`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "200px",
    transition: ".5s",
    cursor: "not-allowed",
  },
  adultsCountSpan: {},
  kidsCountSpan: {},
  priceRangeText: {
    margin: "0",
    fontSize: "16px",
    color: theme.colorPlate.black,
    lineHeight: "19.2px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
  },
  priceRangeDiv: {
    width: "100%",
    height: "22px",
    display: "flex",
    alignItems: "center",
    marginTop: "18px",
    "@media (max-width:480px)": {
      marginTop: "10px",
    },
  },
  priceRangeSpanText: {
    color: theme.colorPlate.chaletGreen,
    fontSize: "16px",
    fontFamily: "Inter",
    fontWeight: 400,
    lineHeight: "22.4px",
  },
  priceRage: {
    width: "196px",
    margin: "auto",
  },
}));

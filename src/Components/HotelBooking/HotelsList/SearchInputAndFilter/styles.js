import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  searchInputDiv: {
    marginBottom: "30px",
    display: "flex",
    alignItems: "center",
  },
  searchInput: {
    margin: "0 !important",
    height: "60px",
    borderRadius: "40px",
    width: "100%",
    outline: "none",
    border: "0",
    // padding: "20px",
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    fontSize: "16px",
    marginRight: "19px !important",
  },

  filterCircleDiv: {
    minWidth: "60px",
    minHeight: "60px",
    borderRadius: "3000px",
    border: "1.5px solid rgba(55, 65, 106, .2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  // mobileFiltersCard
  mobileFiltersCard: {
    position: "absolute",
    top: 0,
    width: "100vw",
    maxWidth: "100%",
    padding: "20px",
    marginLeft: "-20px",
    minHeight: "calc(100vh - 67px)",
    background: "#ECF4F4",
    boxShadow: "0px 30px 60px rgba(0, 0, 0, 0.05)",
    borderRadius: "40px 40px 0px 0px",
    zIndex: 1000,
  },

  backInUp: {
    animation: `$backInUp 1000ms ${theme.transitions.easing.easeInOut}`,
  },

  backOutDown: {
    animation: `$backOutDown 1000ms ${theme.transitions.easing.easeInOut}`,
  },

  "@keyframes backInUp": {
    "0%": {
      transform: "translateY(1200px) scale(.7)",
      opacity: 0.7,
    },
    "80%": {
      transform: "translateY(0px) scale(1)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(1)",
      opacity: 1,
    },
  },

  "@keyframes backOutDown": {
    "0%": {
      transform: "scale(1)",
      opacity: 1,
    },
    "100%": {
      transform: "translateY(700px) scale(.7)",
      opacity: 0.7,
    },
  },
  mobileFiltersHeader: {
    margin: 0,
    padding: 0,
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "120%",
    textAlign: "center",
    color: "#1C232B",
    marginBottom: "20px",
  },
  closeIcon: {
    position: "absolute",
    top: 23,
    right: 20,
    width: "16px",
    height: "16px",
    cursor: "pointer",
  },
  filterText: {
    margin: 0,
    fontSize: "18px",
    color: theme.colorPlate.blueCharcoal,
    fontFamily: "IBMPlexSans",
    fontWeight: 600,
  },
  mobileFilterButtons: {
    position: "absolute",
    bottom: "5px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  clearFilterButton: {
    maxWidth: 119,
    height: 48,
    border: "1.5px solid rgba(55, 65, 106, 0.2)",
    borderRadius: "6px",
    boxSizing: "border-box",
    color: "rgba(55, 65, 106, 1)",
    fontFamily: "Inter",
    fontWeight: 600,
  },
  applyFilterButton: {
    maxWidth: "165px",
    width: "100%",
    height: "48px",
    background: "#21D1CC",
    borderRadius: "6px",
    marginRight: "40px",
    fontFamily: "Inter",
    fontWeight: 600,
    color: "#fff",
  },
}));

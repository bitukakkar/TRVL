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
    justifyContent: "center",
    alignItems: "center",
  },
  /**
   * @ filters container
   */
  filtersContainer: {
    background: "#fff",
    // maxWidth: "380px",
    width: "100%",
    height: "300px",
    padding: "30px",
    borderRadius: "20px",
    margin: "20px 0",
    overflowY: "scroll",
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
    margin: "0",
    marginTop: "7px",
    height: "37px",
  },
  filterIcon: {
    width: "16px",
    height: "20px",
  },
  tickBox: {
    transform: "scale(1.3)",
    "&:hover": {
      background: "transparent",
    },
  },
  labelText: {
    fontSize: "16px",
    lineHeight: "22.4px",
    color: theme.colorPlate.blueCharcoal,
    fontFamily: "Inter",
    fontWeight: 400,
  },
}));

export const newUseStyles = makeStyles((theme) => ({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    marginLeft: "2px",
    borderRadius: 6,
    width: 24,
    height: 24,
    boxShadow: "inset 0 0 0 2px rgba(55, 65, 106, 0.15), inset 0 -1px 0 rgba(55, 65, 106, 0.15)",
    backgroundColor: "#fff",
    "$root.Mui-focusVisible &": {
      outline: "1px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    marginLeft: "2px",
    backgroundColor: "#1C232B",
    backgroundImage: "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 24,
      height: 24,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
  },
}));

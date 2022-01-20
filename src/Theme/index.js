import { createMuiTheme } from "@material-ui/core/styles";
import { BORDER_RADIUS } from "../Constants/General";

const BREAKPOINTS = {
  xs: 0,
  sm: 375,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF263C",
      light: "#0E658B",
      dark: "#FF263C",
      text: "#fff",
    },
    secondary: {
      main: "#0E658B",
      light: "#ccc",
      dark: "#FF263C",
      text: "#fff",
    },
  },
  body: "transparent",
  navBarBackground: "#f2f2f2",
  primaryBackground: "#FF263C",
  secondaryText: "#9098AC",
  text: "white",
  typography: {
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 400,
  },
  card: {
    background: "#ffffff",
    borderRadius: BORDER_RADIUS,
  },
  button: {
    // boxShadow: "0px 3px 6px #00000029",
    backgroundColor: "#0E658B",
    transition: "all 0.5s",
    "&:hover": {
      backgroundColor: "#FF263C",
    },
    color: "#ffffff",
    activeColor: "#FF263C",
  },
  linkButton: {
    color: "#FF263C",
    border: "none",
    "&:hover": {
      backgroundColor: "#0E658B",
    },
  },
  grid: {
    color: "#FF263C",
    colorHover: "#7ae6e5",
    border: "1px solid #0E658B",
    borderHover: "1px solid #0E658B",
  },
  divider: {
    backgroundColor: "#111",
  },
  border: "1px solid #FF263C",

  blueScheme: {
    darkBlue: "#0E658B",
    lightBlue: "#4cabc9",
    green: "#10A291",
    orange: "#FFA12F",
    skin: "#FFD392",
    red: "#FF263C",
  },
  colorPlate: {
    whiteSmoke: "#F2F2F2",
    deepWhiteSmoke: "#E6E6E6",
    deepWhiteSmoke2: "#E7E7E7",
    babyPowderColor: "#F5F9FD",
    white: "#fff",
    blueCharcoal: "#1C232B",
    chaletGreen: "#37416A",
    black: "#000000",
    orange: "#F55035",
    bunker: "#0F1920",
    transparent: "transparent",
    gray: "gray",
    teal: "#21D1CC",
    lightGreen: "#ECF4F4",
    green: "#21D1CC",
    lgtOrange: "#FD7269",
  },
  breakpoints: {
    values: BREAKPOINTS,
  },
});

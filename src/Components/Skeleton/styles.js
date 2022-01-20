import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  line: {
    width: "100%",
    height: "100%",
    borderRadius: "5px",
    backgroundSize: "400px",
    backgroundImage:
      "linear-gradient(90deg, #f2f2f2 0px, #fff 40px, #f2f2f2 80px)",
    animation: "$shine 0.8s infinite linear",
  },
  "@keyframes shine": {
    "0%": {
      backgroundPosition: "-100px",
    },
    "100%": {
      backgroundPosition: "300px",
    },
  },
}));

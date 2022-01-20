import { makeStyles } from "@material-ui/core/styles";
const colorPlate = {
  dark: "#0f1920",
  white: "#fff",
  orange: "#F55035",
};
export const useStyles = makeStyles((theme) => ({
  gallery_div: {
    display: "block",
    width: "100%",
    "@media (max-width: 570px)": {
      display: "none",
    },
  },
  gallery_div_small: {
    marginTop: "20px",
    display: "flex",
    width: "100%",
    "& img": {
      width: "100%",
      height: "397.64px",
      borderRadius: "20px",
      objectFit: "cover",
      cursor: "pointer",
      "&:last-child": {
        marginLeft: "10px",
      },
    },
  },
  imageDiv: {
    maxWidth: "1180px",
    height: "648px",
    marginTop: "20px",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    "@media (max-width: 680px)": {
      height: "500px",
    },
  },
  imageDivItemOne: {
    width: "100%",
    height: "100%",
    borderRadius: "20px",
    objectFit: "cover",
    cursor: "pointer",
  },
  imageSubDivMargin: {
    marginLeft: "20px",
  },
  imageDivItemTwo: {
    width: "100%",
    minWidth: "680px",
    height: "383px",
    borderRadius: "20px",
    objectFit: "cover",
    cursor: "pointer",
    "@media (max-width: 1180px)": {
      minWidth: "100%",
    },
    "@media (max-width: 680px)": {
      height: "260px",
    },
  },
  marginTop20: {
    marginTop: "20px",
  },
  imageDivItemThree: {
    width: "100%",
    minWidth: "435px",
    height: "245px",
    borderRadius: "20px",
    marginRight: "20px",
    objectFit: "cover",
    cursor: "pointer",
    "@media (max-width: 1180px)": {
      minWidth: "100%",
    },
    "@media (max-width: 680px)": {
      height: "220px",
    },
  },
  imageDivItemFourDiv: {
    width: "100%",
    position: "relative",
  },
  imageDivItemFour: {
    // width: "225px",
    width: "100%",
    height: "245px",
    borderRadius: "20px",
    objectFit: "cover",
    cursor: "pointer",
    "@media (max-width: 1180px)": {
      minWidth: "100%",
    },
  },
  imageBlur: {
    filter: "blur(4px)",
  },
  imageCountText: {
    color: colorPlate.white,
    margin: "0",
    padding: "0",
    fontSize: "24px",
    lineHeight: "28.8px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontFamily: "IBMPlexSans",
    fontWeight: 400,
  },
  flex: {
    display: "flex",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

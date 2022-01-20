import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    button: {
        ...theme.button,
        fontSize: 16,
        paddingHorizantal: "15px",
        marginTop: "20px",
        marginLeft:'10px',
        backgroundColor:"#FC5D64",
        "&:hover": {
          backgroundColor: "#3f3d56",
        },
      },
      disabledButton: {
        fontSize: 16,
        paddingHorizantal: "15px",
        marginTop: "20px",
        marginLeft:'10px',
      },
      loadingButton:{
        backgroundColor:'#3f3d56',
        fontSize: 16,
        paddingHorizantal: "15px",
        marginTop: "20px",
        marginLeft:'10px',
      },
      circularProgress: {
        minWidth:'168.06px',
        marginTop:'10px',
      },
})
)
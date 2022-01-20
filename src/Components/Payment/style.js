import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        maxWidth:'660px',
        boxShadow: "0 0 5px .5px #e6e6e6",
        borderRadius: 5,
        margin:'0 auto'
    },
    margin: {
        margin: "10px 0",
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: "100%",
        '& p':{
            color:'red',
        },
    },
    flex: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        '& p':{
            color:'red',
        },
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    space:{
        margin: theme.spacing(1),
        marginLeft:theme.spacing(1)
    },
    cardHeader:{
        textAlign:'center',
        paddingBottom:'10px',
        fontSize:'30px !important'
    },
    submitBTN: {
        ...theme.button,
        width: "100%",
        padding: "13px",
        color: "#fff",
        border: "none",
        borderRadius: "10px",
        fontSize: "16px",
        cursor: "pointer",
    },
    disabledBTN: {
        fontSize: 16,
        paddingHorizantal: "15px",
        marginTop: "16px",
        marginBottom: "10px",
        width: "100%",
        padding: "13px",
        color: "#000",
        borderRadius: 10,
        cursor: "pointer",
    },
    circularProgress: {
        marginRight: "10px",
    },
    cardContentPadding: {
        "&:last-child": {
            paddingBottom: 5,
        },
    },
}));
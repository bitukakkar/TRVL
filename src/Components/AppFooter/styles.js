import { makeStyles } from '@material-ui/core/styles'

export const footerStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    fontFamily: 'Inter',
    fontWeight: 400,
    boxSizing: 'border-box'
  },
  logo: {
    height: 'auto'
  },
  footerblock: {
    float: 'left',
    width: '100%',
    background: theme.colorPlate.lightGreen,
    marginTop: 'auto',
    boxSizing: 'border-box'
  },
  paper: {
    padding: '0px',
    color: theme.colorPlate.white,
    borderRadius: '14px',
    boxShadow: 'none !important',
    background: `${theme.colorPlate.transparent} !important`
  },
  paper_first_block: {
    '@media (min-width: 768px)': {
      maxWidth: '280px'
    }
  },
  box: {
    backgroundColor: theme.colorPlate.blueCharcoal,
    color: theme.colorPlate.white,
    marginTop: '0px'
  },
  righttopblock: {
    width: '100%',
    height: '600px',
    paddingTop: '20px',
    float: 'left'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '92%',
    maxWidth: '1180px',
    padding: '10px',
    paddingTop: '80px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
    paddingLeft: '0px',
    paddingRight: '0px',
    paddingBottom: '40px',
    '@media (max-width: 767px)': {
      width: '100%',
      padding: '40px 20px 30px'
    }
  },
  container1: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '92%',
    maxWidth: '1180px',
    padding: '40px 0',
    '@media (max-width: 767px)': {
      padding: '30px 0'
    }
  },

  innercontainer: {
    marginTop: '20px'
  },
  footer_logo: {
    float: 'left',
    width: '100%',
    fontSize: '31px',
    fontFamily: 'Inter',
    fontWeight: 400
  },
  footer_logo1: {
    float: 'left',
    fontFamily: 'Inter',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '32px',
    lineHeight: '120%',
    color: theme.colorPlate.white
  },
  footer_poweredby: {
    float: 'left',
    fontFamily: 'Inter',
    fontWeight: 400,
    fontStyle: 'italic',

    fontSize: '12px',
    lineHeight: '120%',
    color: theme.colorPlate.white,
    opacity: '0.7',
    marginLeft: '12px',
    marginTop: '3px'
  },
  footer_text: {
    float: 'left',
    width: '100%',
    fontFamily: 'Inter',
    fontWeight: 400,
    fontStyle: 'normal',

    fontSize: '14px',
    lineHeight: '150%',
    color: theme.colorPlate.white,
    marginTop: '17px',
    opacity: '0.8',
    '@media (max-width: 767px)': {
      marginTop: '20px',
      marginBottom: '28px'
    }
  },
  footer_link_heading: {
    float: 'left',
    width: '100%',
    textAlign: 'left',
    fontFamily: 'Inter',
    fontWeight: 400,
    fontStyle: 'normal',

    fontSize: '14px',
    lineHeight: '140%',
    color: theme.colorPlate.white,
    opacity: '0.8'
  },
  footer_links: {
    float: 'left',
    width: '100%',
    marginTop: '20px',
    textAlign: 'left',
    '@media (max-width: 767px)': {
      marginTop: '10px'
    }
  },
  footer_ul: {
    float: 'left',
    margin: '0px',
    padding: '0px'
  },
  footer_li: {
    listStyle: 'none',
    marginBottom: '14px',
    fontFamily: 'IBMPlexSans',
    fontWeight: 600,
    fontStyle: 'normal',

    fontSize: '14px',
    lineHeight: '120%',
    color: theme.colorPlate.white,
    letterSpacing: '0.6px',
    '& > a': {
      transition: 'all ease 0.5s',
      letterSpacing: '1.1px',
      '&:hover': {
        color: theme.colorPlate.teal,
        transition: 'all ease 0.5s'
      }
    }
  },
  footer_subscribe: {
    width: '100%',
    fontFamily: 'Inter',
    fontWeight: 400,
    fontStyle: 'normal',

    fontSize: '14px',
    lineHeight: '140%',
    color: theme.colorPlate.white,
    opacity: '0.8',
    '@media (max-width: 767px)': {
      paddingTop: '20px'
    }
  },
  footer_subscribe_fields: {
    float: 'left',
    width: '100%',
    marginTop: '24px',
    display: 'flex'
  },
  subscribe_input: {
    border: '1px solid rgba(255, 255, 255, 0.15)',
    padding: '14px',
    borderRadius: '6px',
    color: theme.colorPlate.white,
    background: theme.colorPlate.blueCharcoal,
    width: '100%',
    fontFamily: 'Inter',
    fontWeight: 600,
    boxShadow: 'border-box',
    fontStyle: 'normal',
    fontSize: '14px',
    lineHeight: '120%',
    transition: 'all ease 0.4s',
    marginRight: '10px',
    '&:focus': {
      borderColor: theme.colorPlate.teal,
      transition: 'all ease 0.4s',
      outline: 'none'
    },
    '&:hover': {
      borderColor: theme.colorPlate.teal,
      transition: 'all ease 0.4s'
    },
    '&:active': {
      borderColor: theme.colorPlate.teal,
      transition: 'all ease 0.4s'
    },
    '&:placeholder': {
      color: 'rgba(255, 255, 255, 0.5)'
    },
    '@media (max-width: 767px)': {
      maxWidth: '100%',
      width: '100%'
    }
  },
  copyright_text: {
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '140%',
    color: theme.colorPlate.white,
    '& > span': {
      fontFamily: 'IBMPlexSans',
      fontWeight: 600
    }
  },
  subscribe_btn: {
    ...theme.button,
    fontFamily: 'Inter',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '120%',
    textAlign: 'center',
    color: theme.colorPlate.white,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '15px 20px 16px',
    backgroundColor: theme.colorPlate.teal,
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    float: 'right'
  },
  social_block: {
    textAlign: 'right',
    cursor: 'pointer',
    '@media (max-width: 767px)': {
      textAlign: 'start',
      marginTop: 20
    }
  },
  social_icons: {
    width: '30px',
    height: '30px',
    marginLeft: '7px',
    color: theme.colorPlate.teal,
    cursor: 'pointer',
    transition: 'all .3s',
    '&:hover': {
      color: theme.palette.primary.main
    },
    '@media (max-width: 375px)': {
      marginLeft: '0',
      marginRight: 20,
      '& > img': {
        width: '24px !important',
        height: '24px !important'
      }
    }
  }
}))

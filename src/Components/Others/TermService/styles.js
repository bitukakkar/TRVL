import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles(theme => ({
  termssection: {
    width: '100%',
    minHeight: '400px',
    marginTop: '60px',
    paddingBottom: '120px'
  },
  termscontainer: {
    maxWidth: '1180px',
    paddingLeft: '0',
    paddingRight: '0',
    margin: '0 auto',
    marginTop: '160px',
    '@media (max-width: 980px)': {
      marginTop: '50px'
    }
  },
  terms_leftblock: {
    width: '280px',
    float: 'left',
    '@media (max-width: 980px)': {
      width: '100%',
      marginBottom: '50px'
    }
  },
  terms_rightblock: {
    width: '764px',
    float: 'right',
    paddingBottom: '80px',
    '@media (max-width: 980px)': {
      width: '100%',
      float: 'left',
      padding: '0px 20px',
      marginBottom: '60px'
    },
    '@media (min-width: 981px) and (max-width: 1180px)': {
      width: '67%',
      float: 'right',
      paddingRight: '30px'
    }
  },
  terms_box_other: { marginTop: '30px !important' },
  terms_ul: { listStyle: 'none', marginTop: '15px', padding: '0px' },
  terms_content: {
    fontFamily: 'Inter',
    fontWeight: 400,
    fontStyle: 'normal',

    fontSize: '16px',
    lineHeight: '140%',
    color: '#1C232B',
    opacity: '0.7'
  },
  terms_box: {
    marginTop: '15px'
  },
  terms_li: {
    fontFamily: 'IBMPlexSans',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '24px',
    lineHeight: '120%',
    textAlign: 'right',
    color: '#1C232B',
    opacity: '0.5',
    height: '58px',
    marginTop: '25px',
    cursor: 'pointer',
    '@media (max-width: 980px)': {
      textAlign: 'center',
      height: '50px',
      marginTop: '10px',
      fontSize: '22px'
    }
  },
  li_active: {
    fontFamily: 'IBMPlexSans',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '24px',
    lineHeight: '120%',
    textAlign: 'right',
    color: '#1C232B',
    height: '58px',
    marginTop: '25px',
    '@media (max-width: 980px)': {
      textAlign: 'center',
      height: '50px',
      marginTop: '10px',
      fontSize: '22px'
    }
  },
  terms_label: {
    width: '764px',
    height: '29px',
    fontFamily: 'IBMPlexSans',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '24px',
    lineHeight: '120%',
    color: '#1C232B',
    '@media (max-width: 980px)': {
      width: '100%',
      height: 'auto'
    }
  },

  termsheading: {
    width: '429px',
    height: '67px',
    fontFamily: 'IBMPlexSans',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '56px',
    lineHeight: '120%',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    color: '#1C232B',
    marginBottom: '40px',
    '@media (max-width: 980px)': {
      width: '100%',
      height: 'auto',
      display: 'block',
      textAlign: 'center',
      fontSize: '38px'
    }
  }
}))

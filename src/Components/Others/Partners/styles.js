import { makeStyles } from '@material-ui/core/styles'
import partner from '../../../Assets/images/partner.png'
export const useStyles = makeStyles(theme => ({
  /**
   * @ margin
   */

  mt35: {
    marginTop: '35px'
  },

  /**
   * @ flex
   */
  flex: {
    display: 'flex',
    flexWrap: 'wrap'
  },

  boxWidth: {
    maxWidth: '1440px',
    margin: '0 auto',
    paddingBottom: '121px',
    padding: '0 40px',
    boxSizing: 'border-box',
    width: '100%',
    '@media (max-width: 1180px)': {
      padding: '0 10px'
    }
  },

  /**
   * @ partnerSection
   */
  partnerSection: {
    width: '100%',
    minHeight: '701px',
    marginTop: '10px',
    marginBottom: '40px',
    borderRadius: '40px',
    backgroundImage: `url(${partner})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    '@media (max-width: 560px)': {
      backgroundImage: 'none',
      background: '#1C232B',
      borderRadius: '20px',
      marginTop: '0'
    }
  },
  partnerSectionPadding: {
    padding: '66px 90px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 1180px)': {
      padding: '20px 30px'
    },
    '@media (max-width: 767px)': {
      flexDirection: 'column'
    }
  },
  leftContainer: {
    paddingRight: '15px',
    '@media (max-width: 560px)': {
      paddingRight: '0px'
    },
    '& > h1': {
      maxWidth: '580px',
      margin: '0',
      fontSize: '56px',
      fontFamily: 'IBMPlexSans',
      fontWeight: 400,
      lineHeight: '67.2px',
      color: '#1C232B',
      '@media (max-width: 560px)': {
        color: '#fff'
      },
      '@media(max-width:1400px)': {
        fontSize: '40px',
        lineHeight: 'normal'
      }
    },
    '& > p': {
      maxWidth: '580px',
      margin: '0',
      marginTop: '26px',
      fontSize: '20px',
      fontFamily: 'Inter',
      fontWeight: 400,
      lineHeight: '28px',
      color: '#1C232B',
      '@media (max-width: 560px)': {
        color: '#fff',
        fontSize: '16px',
        lineHeight: '22.4px',
        marginTop: '4px'
      }
    }
  },
  partnerCompany: {
    maxWidth: '580px',
    marginTop: '60px',
    '@media (max-width: 560px)': {
      marginTop: '46px'
    },
    '& > h4': {
      margin: '0',
      fontSize: '18px',
      fontFamily: 'IBMPlexSans',
      fontWeight: 600,
      lineHeight: '21.6px',
      color: '#1C232B',
      '@media (max-width: 560px)': {
        color: '#fff'
      }
    }
  },
  hotelLogoDiv: {
    maxWidth: '560px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  hotelLogo: {
    margin: '0',
    fontSize: '28px',
    fontFamily: 'Inter',
    fontWeight: 800,
    lineHeight: '33.6px',
    letterSpacing: '-0.075em',
    color: '#1C232B',
    marginTop: '30px',
    '@media (max-width: 560px)': {
      color: '#fff'
    },
    '@media (max-width: 520px)': {
      fontSize: '20px',
      marginTop: '20px',
      lineHeight: '24px'
    }
  },
  /**
   * @ rightContainer
   */

  partnerForm: {
    maxWidth: '480px',
    minHeight: '576px',
    borderRadius: '20px',
    background: theme.colorPlate.deepWhiteSmoke2,
    '@media(max-width:1400px)': {
      maxWidth: '400px',
      marginTop: '30px'
    },
    '@media(max-width:560px)': {
      marginTop: '40px',
      minHeight: '546px'
    }
  },
  partnerFormPadding: {
    padding: '40px',
    background: '#fff',
    borderRadius: '20px',
    '@media (max-width: 560px)': {
      padding: '20px'
    }
  },
  formTitle: {
    margin: '0',
    fontSize: '24px',
    fontFamily: 'IBMPlexSans',
    fontWeight: 400,
    lineHeight: '28.8px',
    color: theme.colorPlate.blueCharcoal
  },
  formText: {
    margin: '0',
    marginTop: '5px',
    fontSize: '14px',
    fontFamily: 'Inter',
    fontWeight: 400,

    lineHeight: '19.6px',
    color: theme.colorPlate.blueCharcoal
  },
  /**
   * formDiv
   */
  formDiv: {
    marginTop: '35px',
    '@media (max-width: 560px)': {
      marginTop: '22px'
    }
  },
  label: {
    margin: '0',
    display: 'block',
    fontSize: '14px',
    fontFamily: 'Inter',
    fontWeight: 600,
    lineHeight: '16.8px',
    color: theme.colorPlate.blueCharcoal,
    marginBottom: '6px'
  },
  input: {
    width: '100%',
    height: '48px',
    borderRadius: '6px',
    background: theme.colorPlate.white,
    border: '1.5px solid rgba(55, 65, 106, 0.2);',
    padding: '15px 20px 16px 15px',
    fontSize: '14px',
    fontFamily: 'Inter',
    fontWeight: 400,
    lineHeight: '19.6px',
    color: theme.colorPlate.blueCharcoal,
    outline: 'none',
    marginBottom: '20px',
    '@media (max-width: 560px)': {
      marginBottom: '21px'
    }
  },
  submitBtn: {
    width: '100%',
    height: '48px',
    border: 'none',
    fontSize: '14px',
    fontFamily: 'Inter',
    fontWeight: 600,
    lineHeight: '16.8px',
    color: '#fff',
    cursor: 'pointer',
    padding: '15px 20px 16px',
    background: '#21D1CC',
    borderRadius: '6px'
  }
}))

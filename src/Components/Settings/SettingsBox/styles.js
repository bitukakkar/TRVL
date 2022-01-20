import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  /**
   * @ flex options
   */
  flex: {
    display: 'flex'
  },
  flexCenter: {
    display: 'flex',
    alignItems: 'center'
  },

  settingsBox: {
    width: '100%',
    // width: "380px",
    // height: "360px",
    background: theme.colorPlate.white,
    borderRadius: '20px',
    display: 'block',
    '@media (max-width: 767px)': {
      display: 'none'
    }
  },
  boxPadding: {
    padding: '30px'
  },
  title: {
    fontSize: '18px',
    fontFamily: 'IBMPlexSans',
    fontWeight: 600,
    color: theme.colorPlate.blueCharcoal,
    lineHeight: '21.6px',
    margin: '0',
    marginBottom: '15px'
  },
  setting: {
    minHeight: '80px',
    borderRadius: '20px',
    background: '#F6F9F9',
    marginTop: '5px',
    cursor: 'pointer'
  },
  border: {
    // border: `2px solid ${theme.colorPlate.black}`,
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'transparent'
  },
  blackBorder: {
    borderColor: '#21D1CC'
  },
  settingPadding: {
    // padding: "20px",
    // paddingRight: "0",
    // paddingBottom: "0",
    paddingLeft: '20px'
  },
  imgCircle: {
    width: '30px',
    height: '30px',
    borderRadius: '200px'
  },
  settingName: {
    margin: '0',
    color: '#1C232B',
    fontSize: '16px',
    fontFamily: 'IBMPlexSans',
    fontWeight: 600,
    lineHeight: '120%',
    marginLeft: '15px',
    fontStyle: 'normal'
  },
  noselect: {
    webkitTouchCallout: 'none',
    webkitUserSelect: 'none',
    khtmlUserSelect: 'none',
    mozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
    '& ::after': {
      webkitUserSelect: 'none',
      webkitUserDrag: 'none',
      webkitAppRegion: 'no-drag',
      cursor: 'pointer'
    },
    '& ::before ': {
      webkitUserSelect: 'none',
      webkitUserDrag: 'none',
      webkitAppRegion: 'no-drag',
      cursor: 'pointer'
    },
    webkitUserDrag: 'none',
    webkitAppRegion: 'no-drag',
    cursor: 'pointer'
  },

  // small_screen_settings_box
  small_screen_settings_box: {
    display: 'none',
    '@media (max-width: 767px)': {
      display: 'block'
    }
  },
  small_screen_settings_box_container: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    maxWidth: '375px',
    margin: '0 auto'
  },
  icon_box: {
    width: 80,
    height: 80,
    background: '#F6F9F9',
    border: 0,
    boxSizing: 'border-box',
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '25px',
    '& img': {
      width: '100%',
      height: '100%'
    },
    '@media (max-width:374px)': {
      width: 60,
      height: 60,
      padding: '15px'
    },
    '@media (max-width:280px)': {
      width: 50,
      height: 50,
      padding: '10px'
    }
  },
  icon_active_border: {
    border: '2px solid #21D1CC'
  },
  pathAliasTitle: {
    fontFamily: 'IBMPlexSans',
    fontWeight: 400,
    fontSize: '40px',
    lineHeight: '48px',
    color: '#1C232B',
    margin: '20px 0 0'
  },
  logouticon: {
    fontSize: '30px !important',
    color: '#37416A'
  }
}))

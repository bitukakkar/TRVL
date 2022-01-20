import React, { useState, useEffect } from 'react'
import { useStyles } from './styles'
import { Box } from '@material-ui/core'
import clsx from 'clsx'
import { useHistory } from 'react-router-dom'
import accounticon_active from '../../../Assets/images/account_active.svg'
import accounticon_inactive from '../../../Assets/images/account_inactive.svg'
import wallet_active from '../../../Assets/images/wallet_active.svg'
import wallet_inactive from '../../../Assets/images/wallet_inactive.svg'
import hotel_active from '../../../Assets/images/hotel_active.svg'
import hotel_inactive from '../../../Assets/images/hotel_inactive.svg'
import nft_active from '../../../Assets/images/nft_active.svg'
import nft_inactive from '../../../Assets/images/nft_inactive.svg'
import { removeAuthToken } from '../../../Redux/Reducers/authToken'
import { useDispatch } from 'react-redux'
import LogoutIcon from '@mui/icons-material/Logout'
const locationPaths = {
  myAccount: 'account',
  wallet: 'wallet',
  hotelsHistory: 'hotels-history',
  collectablesNFT: 'collectables-nft'
}

const SettingsBox = ({ pathName }) => {
  const classes = useStyles()
  const history = useHistory()
  const [pathAlias, setPathAlias] = useState('')

  const goToDestination = path => {
    history.push(`/settings/${path}`)
  }
  const dispatch = useDispatch()

  const logOutEvent = () => {
    dispatch(removeAuthToken())
    setTimeout(() => {
      history.push('/login')
    }, 500)
  }

  const defaultBorderClass =
    pathName &&
    pathName !== locationPaths.myAccount &&
    pathName !== locationPaths.wallet &&
    pathName !== locationPaths.hotelsHistory &&
    pathName !== locationPaths.collectablesNFT &&
    classes.blackBorder

  useEffect(() => {
    switch (pathName) {
      case locationPaths.myAccount:
        setPathAlias(`My account`)
        break
      case locationPaths.wallet:
        setPathAlias(`My wallet`)
        break
      case locationPaths.hotelsHistory:
        setPathAlias(`Hotel history`)
        break
      case locationPaths.collectablesNFT:
        setPathAlias(`My collectables`)
        break
      default:
        setPathAlias(``)
        break
    }
  }, [pathName])

  return (
    <>
      <Box className={classes.small_screen_settings_box}>
        <div className={classes.small_screen_settings_box_container}>
          <div
            className={clsx(
              classes.icon_box,
              pathName === locationPaths.myAccount && classes.icon_active_border
            )}
            onClick={() => goToDestination(locationPaths.myAccount)}
          >
            <img
              src={
                pathName === locationPaths.myAccount
                  ? accounticon_active
                  : accounticon_inactive
              }
              alt='account'
              title='account'
            />
          </div>
          <div
            className={clsx(
              classes.icon_box,
              pathName === locationPaths.wallet && classes.icon_active_border
            )}
            onClick={() => goToDestination(locationPaths.wallet)}
          >
            <img
              src={
                pathName === locationPaths.wallet
                  ? wallet_active
                  : wallet_inactive
              }
              alt='wallet'
              title='wallet'
            />
          </div>
          <div
            className={clsx(
              classes.icon_box,
              pathName === locationPaths.hotelsHistory &&
                classes.icon_active_border
            )}
            onClick={() => goToDestination(locationPaths.hotelsHistory)}
          >
            <img
              src={
                pathName === locationPaths.hotelsHistory
                  ? hotel_active
                  : hotel_inactive
              }
              alt='hotels'
              title='hotels'
            />
          </div>
          <div
            className={clsx(
              classes.icon_box,
              pathName === locationPaths.collectablesNFT &&
                classes.icon_active_border
            )}
            onClick={() => goToDestination(locationPaths.collectablesNFT)}
          >
            <img
              src={
                pathName === locationPaths.collectablesNFT
                  ? nft_active
                  : nft_inactive
              }
              alt='collectables'
              title='collectables'
            />
          </div>
        </div>
        <h2 className={classes.pathAliasTitle}>{pathAlias}</h2>
      </Box>
      <Box className={classes.settingsBox}>
        <div className={classes.boxPadding}>
          <h4 className={classes.title}>My settings</h4>
          <div
            className={clsx(
              classes.setting,
              classes.border,
              classes.flexCenter,
              pathName === locationPaths.myAccount && classes.blackBorder,
              !pathName && classes.blackBorder,
              defaultBorderClass
            )}
            onClick={() => goToDestination(locationPaths.myAccount)}
          >
            <div className={classes.settingPadding}>
              <div className={classes.flexCenter}>
                <div className={classes.imgCircle}>
                  {' '}
                  <img
                    src={
                      pathName === locationPaths.myAccount
                        ? accounticon_active
                        : accounticon_inactive
                    }
                    alt='account'
                    title='account'
                  />
                </div>
                <h3 className={clsx(classes.settingName, classes.noselect)}>
                  My account
                </h3>
              </div>
            </div>
          </div>

          <div
            className={clsx(
              classes.setting,
              classes.border,
              classes.flexCenter,
              pathName === locationPaths.wallet && classes.blackBorder
            )}
            onClick={() => goToDestination(locationPaths.wallet)}
          >
            <div className={classes.settingPadding}>
              <div className={classes.flexCenter}>
                <div className={classes.imgCircle}>
                  <img
                    src={
                      pathName === locationPaths.wallet
                        ? wallet_active
                        : wallet_inactive
                    }
                    alt='wallet'
                    title='wallet'
                  />
                </div>
                <h3 className={clsx(classes.settingName, classes.noselect)}>
                  Wallet
                </h3>
              </div>
            </div>
          </div>

          <div
            className={clsx(
              classes.setting,
              classes.border,
              classes.flexCenter,
              pathName === locationPaths.hotelsHistory && classes.blackBorder
            )}
            onClick={() => goToDestination(locationPaths.hotelsHistory)}
          >
            <div className={classes.settingPadding}>
              <div className={classes.flexCenter}>
                <div className={classes.imgCircle}>
                  <img
                    src={
                      pathName === locationPaths.hotelsHistory
                        ? hotel_active
                        : hotel_inactive
                    }
                    alt='hotels'
                    title='hotels'
                  />
                </div>
                <h3 className={clsx(classes.settingName, classes.noselect)}>
                  Hotels history
                </h3>
              </div>
            </div>
          </div>
          <div
            className={clsx(
              classes.setting,
              classes.border,
              classes.flexCenter
            )}
            onClick={() => logOutEvent()}
          >
            <div className={classes.settingPadding}>
              <div className={classes.flexCenter}>
                <div className={classes.imgCircle}>
                  {' '}
                  <LogoutIcon className={classes.logouticon} />
                </div>
                <h3 className={clsx(classes.settingName, classes.noselect)}>
                  Log Out
                </h3>
              </div>
            </div>
          </div>
          {/* <div
            className={clsx(
              classes.setting,
              classes.border,
              classes.flexCenter,
              pathName === locationPaths.collectablesNFT && classes.blackBorder
            )}
            onClick={() => goToDestination(locationPaths.collectablesNFT)}
          >
            <div className={classes.settingPadding}>
              <div className={classes.flexCenter}>
                <div className={classes.imgCircle}>
                  <img
                    src={
                      pathName === locationPaths.collectablesNFT
                        ? nft_active
                        : nft_inactive
                    }
                    alt='collectables'
                    title='collectables'
                  />
                </div>
                <h3 className={clsx(classes.settingName, classes.noselect)}>
                  Collectables NFT
                </h3>
              </div>
            </div>
          </div> */}
        </div>
      </Box>
    </>
  )
}

export default SettingsBox

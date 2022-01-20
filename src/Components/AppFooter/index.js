import React from 'react'
import { footerStyles } from './styles'
import { Container, Box, Grid, useMediaQuery } from '@material-ui/core'
import { Paper } from '@material-ui/core'
// import facebookImg from "../../Assets/images/facebook.svg";
// import twitterImg from "../../Assets/images/twitter.svg";
// import instaImg from "../../Assets/images/insta.svg";
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline'
import clsx from 'clsx'
import Logo from '../../Assets/images/logoWhite2.svg'

const AppFooter = () => {
  const classes = footerStyles()
  const isTabletScreen = useMediaQuery('(max-width: 767px)')

  const { isFooterShow } = useSelector(state => state.searchInputAndFilter)

  return (
    <ScopedCssBaseline>
      <div
        className={classes.footerblock}
        style={{ display: isFooterShow ? 'block' : 'none' }}
      >
        <div className={classes.root}>
          <Box className={classes.box}>
            <Container className={classes.container}>
              <Grid container spacing={isTabletScreen ? 0 : 1}>
                <Grid item xs={12} md={4}>
                  <Paper
                    className={clsx(classes.paper, classes.paper_first_block)}
                  >
                    <div className={classes.footer_logo}>
                      <Link to={'/'} className={classes.footer_logo1}>
                        <img className={classes.logo} src={Logo} alt='logo' />
                      </Link>
                      {/* <span className={classes.footer_poweredby}>
                        Powered by <br></br>Fetch.ai
                      </span> */}
                    </div>
                    <div className={classes.footer_text}>
                      Decentralised.travel is a blockchain company, utilising
                      decentralised search to directly connect hoteliers and
                      travellers.
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={6} md={2}>
                  <Paper className={classes.paper}>
                    <div className={classes.footer_link_heading}>
                      OTHER LINKS
                    </div>
                    <div className={classes.footer_links}>
                      <ul className={classes.footer_ul}>
                        <li className={classes.footer_li}>
                          {' '}
                          <Link to={'/technology'} className={classes.menu_a}>
                            Technology{' '}
                          </Link>
                        </li>
                        <li className={classes.footer_li}>
                          <Link to='/partners'>Partner page</Link>
                        </li>
                        <li className={classes.footer_li}>
                          <Link to='/litepaper'>Litepaper</Link>
                        </li>
                      </ul>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={6} md={2}>
                  <Paper className={classes.paper}>
                    <div className={classes.footer_link_heading}>
                      CUSTOMER LINKS
                    </div>
                    <div className={classes.footer_links}>
                      <ul className={classes.footer_ul}>
                        <li className={classes.footer_li}>
                          {' '}
                          <Link to={'/faq'} className={classes.menu_a}>
                            FAQ{' '}
                          </Link>
                        </li>
                        <li className={classes.footer_li}>
                          {' '}
                          <a
                            href={
                              'mailto:' + process.env.REACT_APP_SUPPORT_MAIL_TO
                            }
                            className={classes.menu_a}
                          >
                            Support{' '}
                          </a>
                        </li>
                        <li className={classes.footer_li}>
                          <Link to='/privacy-policy'>Privacy Policy</Link>
                        </li>
                        <li className={classes.footer_li}>
                          <Link to='/term-service'>Terms Service</Link>
                        </li>
                      </ul>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <Paper className={classes.paper}>
                    <div className={classes.footer_subscribe}>
                      SUBSCRIBE TO OUR NEWSLETTER
                    </div>
                    <div className={classes.footer_subscribe_fields}>
                      <input
                        type='text'
                        placeholder='Enter your email'
                        className={classes.subscribe_input}
                      />
                      <button className={classes.subscribe_btn}>Send</button>
                    </div>
                  </Paper>
                </Grid>
              </Grid>
            </Container>
            <Container className={classes.container1}>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <Paper className={classes.paper}>
                    <div className={classes.copyright_text}>
                      © 2021 TRVL, Inc.{' '}
                      <span>&nbsp;Privacy · Terms of use</span>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper className={classes.paper}>
                    <div className={classes.social_block}>
                      {/* <a href='#' className={classes.social_icons}>
                        <img src={facebookImg} />
                      </a>
                      <a href='#' className={classes.social_icons}>
                        <img src={twitterImg} />
                      </a>
                      <a href='#' className={classes.social_icons}>
                        <img src={instaImg} />
                      </a> */}
                    </div>
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </div>
      </div>
    </ScopedCssBaseline>
  )
}

export default AppFooter

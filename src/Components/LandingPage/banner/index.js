import React from "react";
import { useStyles } from "./styles";
import { Container, Box, Grid, Paper } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import chatImg from "../../../Assets/images/chatImg.png";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import clsx from "clsx";
import SearchHotels from "../searchHotels";
function Banner() {
  const classes = useStyles();
  const history = useHistory();
  const isMobileScreen = useMediaQuery("(max-width: 767px)");
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Box className={classes.box}>
          <Container className={classes.container}>
            <div className={classes.bannerblock}>
              <Grid container spacing={isMobileScreen ? 0 : 5}>
                <Grid item xs={12} md={12} lg={6}>
                  <div className={classes.bannerblockleft}>
                    <Paper className={classes.paper}>
                      <Grid item xs={12}>
                        <h3 className={classes.bannerblockleft1}>
                          Decentralized travel
                        </h3>
                      </Grid>
                      <Grid item xs={12}>
                        <h1 className={classes.bannerblockleft2}>
                          Your digital agent <br></br>
                          for booking
                        </h1>
                      </Grid>
                      <Grid item xs={12}>
                        <p className={classes.bannerblockleft3}>
                          Creating personal digital agents to find and negotiate
                          directly with hotels on your behaif
                        </p>
                      </Grid>
                      {isMobileScreen ? (
                        <div className={classes.sm_search_input_input_div}>
                          <div className={classes.searchContainer}>
                            <input
                              type="text"
                              className={clsx(
                                classes.sm_location_search_input,
                                classes.searchInputWidth
                              )}
                              placeholder="Where are going?"
                            />
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}

                      <Grid item xs={12} className={classes.bannerblockleft4}>
                        <button
                          className={classes.createagent_btn}
                          onClick={() => history.push("/digital-agent")}>
                          Create digital agent
                        </button>
                      </Grid>
                    </Paper>
                  </div>
                </Grid>
                <>
                  <Grid item xs={6} className={classes.bannerblockRight}>
                    <img src={chatImg} alt="" />
                  </Grid>
                  <Grid item xs={12}>
                    <div
                      className={
                        classes.searchhotelsection + " searchhotelsection"
                      }>
                      <SearchHotels />
                    </div>
                  </Grid>
                </>
              </Grid>
            </div>
          </Container>
        </Box>
      </Grid>
    </div>
  );
}

export default Banner;

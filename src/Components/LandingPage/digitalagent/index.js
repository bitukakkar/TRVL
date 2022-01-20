import React from "react";
import { useStyles } from "./styles";
import { Container, Box, Grid, Paper, useMediaQuery } from "@material-ui/core";
import agentimg from "../../../Assets/images/landing/agent.png";
import anonymous from "../../../Assets/images/anonymous.svg";
import money from "../../../Assets/images/money.svg";
import global from "../../../Assets/images/global.svg";

function Digitalagent() {
  const classes = useStyles();
  const isTabletScreen = useMediaQuery("(max-width: 768px)");
  const isMobileScreen = useMediaQuery("(max-width: 375px)");

  const spacing = () => {
    if (isTabletScreen && isMobileScreen) return 0;
    if (isTabletScreen) return 2;
    return 5;
  };

  return (
    <div className={classes.root}>
      <Box className={classes.box}>
        <Container className={classes.container}>
          <Grid
            container
            spacing={spacing()}
            className={classes.innercontainer}>
            <Grid item xs={12} md={6} style={{ order: isTabletScreen ? 2 : 1 }}>
              <Paper className={classes.paper}>
                <Grid item xs={12}>
                  <h2 className={classes.agenttitle}>
                    What is a digital agent?
                  </h2>
                </Grid>
                <Grid item xs={12}>
                  <p className={classes.agentdesc}>
                    A digital agent is best thought of as your digital
                    representation, your digital service. With
                    Decentralized.travel, an agent is able to communicate
                    directly with hotels to agree pricing and details to give
                    you the best possible stay.
                  </p>
                </Grid>
                <Grid item xs={12}>
                  <div className={classes.agentcontent}>
                    <div className={classes.contentleft}>
                      <img src={anonymous} alt="icon" />
                    </div>
                    <div className={classes.contentright}>
                      <h3 className={classes.contentright1}>
                        Keep your name anonymous
                      </h3>
                      <p className={classes.contentright2}>
                        Until you absolutely are sure to book, nobody knows who
                        you are.
                      </p>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className={classes.agentcontent}>
                    <div className={classes.contentleft}>
                      <img src={money} alt="icon" />
                    </div>
                    <div className={classes.contentright}>
                      <h3 className={classes.contentright1}>
                        Optimal negotiation dialogues
                      </h3>
                      <p className={classes.contentright2}>
                        Exceptionally clever AI allows for agents all over the
                        globe to communicate, negotiate and close a deal.
                      </p>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className={classes.agentcontent}>
                    <div className={classes.contentleft}>
                      <img src={global} alt="icon" />
                    </div>
                    <div className={classes.contentright}>
                      <h3 className={classes.contentright1}>
                        Better search results
                      </h3>
                      <p className={classes.contentright2}>
                        Targetted search, across a unique decentralised search
                        layer gives your agent the results they're looking for.
                      </p>
                    </div>
                  </div>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} style={{ order: isTabletScreen ? 1 : 2 }}>
              <Paper className={classes.paper}>
                <img
                  src={agentimg}
                  title="Agent"
                  alt="Agent"
                  className={classes.agentImage}
                />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default Digitalagent;

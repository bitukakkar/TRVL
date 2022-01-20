import React from "react";
import { useStyles } from "./styles";
import { Box } from "@material-ui/core";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import tech2 from "./../../../Assets/images/tech2.png";
import tech3 from "./../../../Assets/images/tech3.png";
import tech4 from "./../../../Assets/images/tech4.png";
import tech5 from "./../../../Assets/images/tech5.png";
import "./style.css";
import clsx from "clsx";

const Technology = () => {
  const classes = useStyles();
  return (
    <ScopedCssBaseline>
      <Box className={classes.boxWidth}>
        <section className={clsx(classes.banner, classes.flex)}>
          <div className={classes.bannerLeftContent}>
            <h2>Fast, direct search</h2>
            <p>
              You can find rooms based on your preferences against millions of
              hotels registered. With prices that cannot be beaten by other booking platforms.
            </p>
          </div>
          <div className={classes.bannerRightContent}>{/* <img src={placeHolderImg} alt='placeHolder' />   */}</div>
        </section>

        <div className="digitalagentbg">
          <section className={classes.digitalAgent}>
            <div className={classes.digitalAgentLeft}>
              <h2>Digital agents</h2>
              <p>
                Tiny intelligent computer programs take your search terms,
                preferences and budget to find the very best deal they can on
                your behalf. Negotiating directly with hotels to secure your
                booking.
                <br />
                <br />
                These agents can live on your device, run forever in the cloud,
                or just be part of a webpage as we control our search. This is very useful to a consumer
                an Agent can be on, and off as you define.
              </p>
            </div>
            <div className={classes.digitalAgentRight}>
              <div className={classes.imgDiv}>
                <img src={tech2} alt="placeHolder" className={classes.img} />
              </div>
            </div>
          </section>
        </div>
        <div className="middleManbg">
          <section className={clsx(classes.middleMan)}>
            <div className={classes.middleManLeft}>
              <div className={classes.imgDiv}>
                <img src={tech3} alt="placeHolder" className={classes.img} />
              </div>
            </div>
            <div className={classes.middleManRight}>
              <h2>No middle man</h2>
              <p>
                There is single middle provider hosting hotel information, no
                one player who can control price. Speaking directly to hotels
                changes the modern model and gives way to flexibility and
                competitiveness.
                <br />
              </p>
            </div>
          </section>
        </div>
        <section className={classes.digitalAgent}>
          <div className={classes.digitalAgentLeft}>
            <h2>Decentralised search</h2>
            <p>
              Around the world nodes (computers)  act as search services
              allowing agents to connect and search for hotels. These nodes all
              connect to one another maintaining data synchronisation. The
              holders of these nodes are rewarded in TRIP tokens, and FET.
            </p>
            <br/>
            <br/>
            <p>
              <a href="/tokens-page">Learn more about TRIP</a>
            </p>
          </div>
          <div className={classes.digitalAgentRight}>
            <div className={classes.imgDiv}>
              <img src={tech4} alt="placeHolder" className={classes.img} />
            </div>
          </div>
        </section>

        <section className={clsx(classes.middleMan, classes.box)}>
          <div className={classes.middleManLeft}>
            <div className={classes.imgDiv}>
              <img src={tech5} alt="placeHolder" className={classes.img} />
            </div>
          </div>
          <div className={classes.middleManRight}>
            <h2>Cryptocurrency</h2>
            <p>
              NFTs and payments. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
            </p>
          </div>
        </section>
      </Box>
    </ScopedCssBaseline>
  );
};

export default Technology;

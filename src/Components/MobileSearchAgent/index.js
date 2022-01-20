import React from "react";
import { useStyles } from "./styles";
import back_arrow from "./../../Assets/images/back_arrow.svg";
import forward_arrow from "./../../Assets/images/forward_arrow.svg";
import clsx from "clsx";

const MobileSearchAgent = ({ controls }) => {
  const classes = useStyles();
  const [showDrawerBoolean, setShowDrawerBoolean] = controls;
  return showDrawerBoolean ? (
    <div className={classes.drawer}>
      <h2 className={classes.title}>Select your digital agent</h2>
      <div className={classes.agentContainer}>
        <div className={classes.top_container}>
          <img src={back_arrow} alt="back_arrow" onClick={() => setShowDrawerBoolean(false)} />
          <p>Rio de Janeiro, Brazil</p>
        </div>
        <div className={classes.agentInfoContainer}>
          <div className={classes.img}></div>
          <div className={classes.agent_info_block}>
            <h4>Robert Patt</h4>
            <p className={classes.lower_price}>Lower price</p>
          </div>
          <img src={forward_arrow} alt="forward_arrow" className={classes.forward_arrow} />
        </div>
        <div className={classes.btn_div}>
          <button className={classes.btn}>Customize Agent</button>
          <button className={clsx(classes.btn, classes.btn_skip)}>Skip it for now</button>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default MobileSearchAgent;

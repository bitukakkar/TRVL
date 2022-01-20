import React from "react";
import { useStyles } from "./styles";

const AgentContent = ({ image, title, description }) => {
  const classes = useStyles();
  return (
    <div className={classes.agentcontent}>
      <div className={classes.contentleft}>
        <img src={image} alt="icon" />
      </div>
      <div className={classes.contentright}>
        <div className={classes.contentright1}>{title}</div>
        <div className={classes.contentright2}>{description}</div>
      </div>
    </div>
  );
};

export default AgentContent;

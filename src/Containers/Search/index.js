import React from "react";
import { TextField } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import { Dropdown, SearchContainer } from "../../Components";
import { updateAgentName, updateCurrency } from "./searchRedux";
import { useStyles } from "./styles";
import { CURRENCY_CHOICE } from "../../Constants/General";
import { TEXT } from "../../Constants/Strings";

export const Search = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { agentName, currency } = useSelector((state) => state.search);

  return (
    <div className={classes.container}>
      <div className={classes.agentNameContainer}>
        <TextField
          variant="outlined"
          className={classes.agentNameBox}
          label={TEXT.AGENT_NAME}
          value={agentName}
          onChange={(e) => dispatch(updateAgentName(e.target.value))}
        />
        <div className={classes.dropdownContainer}>
          <Dropdown
            value={currency}
            setValue={(value) => dispatch(updateCurrency(value))}
            menuItems={CURRENCY_CHOICE}
            label={TEXT.CURRENCY_CHOICE}
          />
        </div>
      </div>
      <SearchContainer />
    </div>
  );
};

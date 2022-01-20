import React from "react";
import { TextField, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import { useStyles } from "./styles";
import { TEXT } from "../../Constants/Strings";

const AddButton = ({ totalroom, classes, setNoOfRoom }) => {
  return (
    <Button
      className={`${classes.linkButton} ${classes.addButton}`}
      onClick={() => setNoOfRoom(totalroom + 1)}
    >
      <AddIcon />
    </Button>
  );
};

const RemoveButton = ({ totalroom, classes, setNoOfRoom }) => {
  return (
    <Button
      className={`${classes.linkButton} ${classes.removeButton}`}
      onClick={() => totalroom > 1 && setNoOfRoom(totalroom - 1)}
    >
      <RemoveIcon />
    </Button>
  );
};

export const RoomCountTextField = ({ totalroom, setNoOfRoom }) => {

  const classes = useStyles();

  if (totalroom == null){
      totalroom = 1;
  }

  return (
    <TextField
      disabled
      label={TEXT.ROOM}
      value={totalroom ? totalroom : ""}
      className={classes.guestCountBox}
      variant="outlined"
      inputProps={{ className: classes.input }}
      InputProps={{
        endAdornment: (
          <div className={classes.stepper}>
            <RemoveButton
              totalroom={totalroom}
              classes={classes}
              setNoOfRoom={(value) => setNoOfRoom(value)}
            />
            <AddButton
              totalroom={totalroom}
              classes={classes}
              setNoOfRoom={(value) => setNoOfRoom(value)}
            />
          </div>
        ),
      }}
    />
  );
};

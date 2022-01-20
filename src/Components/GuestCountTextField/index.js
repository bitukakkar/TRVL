import React from "react";
import { TextField, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import { useStyles } from "./styles";
import { TEXT } from "../../Constants/Strings";

const AddButton = ({ noOfGuest, classes, setNoOfGuest }) => {
  return (
    <Button
      className={`${classes.linkButton} ${classes.addButton}`}
      onClick={() => noOfGuest < 6 && setNoOfGuest(noOfGuest + 1)}
    >
      <AddIcon />
    </Button>
  );
};

const RemoveButton = ({ noOfGuest, classes, setNoOfGuest }) => {
  return (
    <Button
      className={`${classes.linkButton} ${classes.removeButton}`}
      onClick={() => noOfGuest > 1 && setNoOfGuest(noOfGuest - 1)}
    >
      <RemoveIcon />
    </Button>
  );
};

export const GuestCountTextField = ({ noOfGuest, setNoOfGuest }) => {
  const classes = useStyles();

  return (
    <TextField
      disabled
      label={TEXT.PEOPLE}
      value={noOfGuest ? noOfGuest : ""}
      className={classes.guestCountBox}
      variant="outlined"
      inputProps={{ className: classes.input }}
      InputProps={{
        endAdornment: (
          <div className={classes.stepper}>
            <RemoveButton
              noOfGuest={noOfGuest}
              classes={classes}
              setNoOfGuest={(value) => setNoOfGuest(value)}
            />
            <AddButton
              noOfGuest={noOfGuest}
              classes={classes}
              setNoOfGuest={(value) => setNoOfGuest(value)}
            />
          </div>
        ),
      }}
    />
  );
};

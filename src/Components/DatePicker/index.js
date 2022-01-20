import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { useStyles } from "./styles";
dayjs.extend(utc);

export const DatePicker = ({
  setDate,
  date,
  label,
  disableDate,
  styleClass,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const disableDates = (allDate) => {
    // Don't allow user to select checkout date before checkin
    if (disableDate) {
      const [day, month, year] = disableDate?.split("-");
      let disableDateTimestamp = new Date(`${year}-${month}-${day}`);
      if (allDate.getTime() <= disableDateTimestamp) {
        return true;
      }
    }
  };

  useEffect(() => {
    //If user selects checkin then clear checkout date
    if (!date) return;
    const [day, month, year] = date?.split("-");
    const currentDate = new Date();
    const selectedDate = new Date(year, month - 1, day);
    const curentDayStart = dayjs(currentDate).startOf("day").utc().unix();
    const selectedDateStart = dayjs(selectedDate).startOf("day").utc().unix();

    if (curentDayStart > selectedDateStart) {
      setDate("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  return (
    <KeyboardDatePicker
      disablePast
      autoOk
      variant="dialog"
      format="dd-MM-yyyy"
      open={open}
      shouldDisableDate={disableDates}
      onClose={() => setOpen(false)}
      onChange={(newValue) => {
        var dateObj = new Date(newValue);
        setDate(
          `${dateObj.getDate()}-${
            dateObj.getMonth() + 1
          }-${dateObj.getFullYear()}`
        );
        setOpen(false);
      }}
      TextFieldComponent={() => {
        return (
          <TextField
            className={classes.card}
            onClick={() => setOpen(true)}
            onFocus={() => setOpen(true)}
            label={label}
            variant="standard"
            value={date}
            InputProps={{
              disableUnderline: true,
              className: styleClass,
            }}
          />
        );
      }}
    />
  );
};

import React, { useState, useEffect, forwardRef } from "react";
import { TextField } from "@material-ui/core";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import DatePicker from "react-datepicker";
import { useStyles } from "./styles";
import { useSelector } from "react-redux";
import { formattedDatePickerDate } from "../../Utils/dateToDateName";
dayjs.extend(utc);

export const DatePickerNew = ({
  setDate,
  date,
  label,
  disableDate,
  styleClass,
  checkout,
}) => {
  const classes = useStyles();
  const [day, month, year] = disableDate?.split("-");

  const { checkIn, checkOut: checkOutDate } = useSelector(
    (state) => state.search
  );
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedCheckOutValue, setSelectedCheckOutValue] = useState(null);

  const preventSelectSameDate = (date) => {
    if (checkIn === date) {
      setDate("");
      return;
    }
    setDate(date);
  };

  useEffect(() => {
    if (checkOutDate === "") {
      setSelectedCheckOutValue(selectedValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkOutDate]);

  const CustomTextField = forwardRef(({ onClick }, ref) => (
    <TextField
      ref={ref}
      className={classes.card}
      onClick={onClick}
      onFocus={onClick}
      label={label}
      variant="standard"
      value={formattedDatePickerDate(date)}
      InputProps={{
        disableUnderline: true,
        className: styleClass,
      }}
    />
  ));

  return (
    <DatePicker
      selected={checkout ? selectedCheckOutValue : selectedValue}
      minDate={disableDate ? new Date(`${year}-${month}-${day}`) : new Date()}
      onChange={(newValue) => {
        const dateObj = new Date(newValue);

        const date = `${dateObj.getDate()}-${
          dateObj.getMonth() + 1
        }-${dateObj.getFullYear()}`;

        if (checkout) {
          preventSelectSameDate(date);
          setSelectedCheckOutValue(newValue);
        } else {
          setSelectedValue(newValue);
          setDate(date);
        }
      }}
      customInput={<CustomTextField />}
    />
  );
};

import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

import { useStyles } from "./styles";

export const Dropdown = ({ value, setValue, menuItems, label }) => {
  const classes = useStyles();
  return (
    <FormControl fullWidth variant="outlined" className={classes.formControl}>
      <InputLabel id="select-outlined-label">{label}</InputLabel>
      <Select
        labelId="select-outlined-label"
        id="select-outlined"
        data-testid="dropdown-select"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        label={label}
      >
        {menuItems.map((menu, index) => (
          <MenuItem key={index} value={menu.value} data-testid="menu-item">
            {menu.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

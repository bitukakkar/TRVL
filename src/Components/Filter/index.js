import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import CancelIcon from "@material-ui/icons/Cancel";
import MenuItem from "@material-ui/core/MenuItem";
import { useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";

import { FEATURES } from "../../Constants/General";
import { useStyles } from "./styles";
import { updateHotelFilter } from "../../Containers/Hotels/hotelsRedux";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const getStyles = (name, filterName, theme) => {
  return {
    fontWeight: filterName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
  };
};

export const Filter = () => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const [filterName, setFilterName] = useState([]);
  const filtersFromStore = useSelector((state) => state.hotel.filters);

  const handleChange = (event) => {
    setFilterName(event.target.value);
  };

  const handleDelete = (e, val) => {
    // remove filter from filter list
    const updatedFilter = filterName?.filter((item) => item.id !== val.id);
    setFilterName(updatedFilter);
  };

  useEffect(() => {
    const filters = FEATURES?.filter((filter) => filtersFromStore?.length && filtersFromStore?.includes(filter.id));
    if (filters?.length > 0) setFilterName(filters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const filters = filterName?.length > 0 && filterName?.map((item) => item.id);
    // store filter on redux store
    dispatch(updateHotelFilter(filters));
  }, [filterName, dispatch]);

  return (
    <FormControl className={classes.formControl}>
      {/* <InputLabel id="mutiple-chip-label" className={classes.filterlabel}>
        {TEXT.FILTERS}
      </InputLabel> */}
      <Select
        labelId="mutiple-chip-label"
        id="mutiple-chip"
        data-testid="multiple-chip"
        multiple
        value={filterName}
        onChange={handleChange}
        input={<Input id="select-multiple-chip" />}
        renderValue={(selected) => (
          <div className={classes.chips}>
            {selected.map((value) => (
              <Chip
                key={value.id}
                label={value.text}
                className={classes.chip}
                deleteIcon={<CancelIcon onMouseDown={(event) => event.stopPropagation()} />}
                onDelete={(e) => handleDelete(e, value)}
              />
            ))}
          </div>
        )}
        MenuProps={MenuProps}>
        {FEATURES.map((name) => (
          <MenuItem key={name.id} value={name} style={getStyles(name, filterName, theme)}>
            {name.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

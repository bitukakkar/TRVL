import React from "react";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import { useStyles } from "./styles";
import { Filter } from "../Filter";

export const FilterBox = ({ hotels, setFilteredHotel, setIsFilterClicked }) => {
  const classes = useStyles();
  const filters = useSelector((state) => state.hotel.filters);

  const handleFilters = async () => {
    // Sort hotels with filters
    if (filters?.length > 0) {
      const filteredHotels = hotels?.filter((hotel) => {
        let isPresent = false;
        filters?.forEach((filter) => {
          if (hotel?.amenities?.includes(filter)) {
            isPresent = true;
          }
        });
        return isPresent;
      });
      setFilteredHotel(filteredHotels);
    } else {
      setFilteredHotel(hotels);
    }
    setIsFilterClicked(true);
  };
  return (
    <div className={classes.filterOptionContainer}>
      <Filter />
      <Button variant="contained" onClick={handleFilters} className={classes.containedButton} data-testid="filter-button">
        <ArrowRightAltIcon />
      </Button>
    </div>
  );
};

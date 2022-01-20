import React, { useState, useEffect } from "react";
import { useStyles, newUseStyles } from "./styles";
import { Checkbox, FormControlLabel, Typography } from "@material-ui/core";
import filterImg from "./../../../../Assets/images/Union.svg";
import clsx from "clsx";
import { FEATURES } from "../../../../Constants/General";
import { useDispatch, useSelector } from "react-redux";
import { updateHotelFilter } from "../../../../Containers/Hotels/hotelsRedux";

function StyledCheckbox(props) {
  const newClasses = newUseStyles();
  return (
    <Checkbox
      className={newClasses.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(newClasses.icon, newClasses.checkedIcon)} />}
      icon={<span className={newClasses.icon} />}
      inputProps={{ "aria-label": "decorative checkbox" }}
      {...props}
    />
  );
}

const AdditionalFilters = ({ getfilters, className, isMobileSearchFilterShow }) => {
  const filtersFromStore = useSelector((state) => state.hotel.filters);

  const classes = useStyles();
  const [filterName, setFilterName] = useState(!filtersFromStore ? [] : filtersFromStore);

  const dispatch = useDispatch();

  const filterHotelamenties = (amenties) => {
    // only return 4 amenties
    let allamenties = "NA";
    if (amenties.length > 0) {
      if (amenties.length > 4) {
        allamenties = amenties.slice(0, 4);
      } else {
        allamenties = amenties;
      }
    }
    return amenties;
  };

  let newArray = [];

  const handleChange = (event) => {
    if (filterName.indexOf(event.target.id) === -1) {
      setFilterName([...filterName, event.target.id]);
      newArray = [...filterName, event.target.id];
    } else {
      const index = filterName.indexOf(event.target.id);
      var array = [...filterName]; // make a separate copy of the array
      if (index !== -1) {
        array.splice(index, 1);
        setFilterName([...array]);
        newArray = [...array];
      }
    }
    getfilters(newArray);
    dispatch(updateHotelFilter(newArray));
  };

  useEffect(() => {
    dispatch(updateHotelFilter(filterName));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setFilterName(!filtersFromStore ? [] : filtersFromStore);
  }, [filtersFromStore]);

  return (
    <>
      <div className={`${classes.filtersContainer} ${className}`}>
        <div className={`${classes.flex} filterIconDiv`}>
          <img src={filterImg} alt="filter" className={classes.filterIcon} />
          <h2 className={classes.filterText}>Filters</h2>
        </div>
        {FEATURES.length > 0 &&
          filterHotelamenties(FEATURES).map((name) => (
            <div className={classes.filterContentMargin} key={name.id}>
              <FormControlLabel
                control={
                  <StyledCheckbox
                    checked={filterName.indexOf(name.id) === -1 ? false : true}
                    onChange={handleChange}
                    name={name.text}
                    id={name.id}
                  />
                }
                label={<Typography className={classes.labelText}>{name.text}</Typography>}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default AdditionalFilters;

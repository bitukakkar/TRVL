import React, { useState } from "react";
import { useStyles } from "./styles";
import filterImg from "./../../../../Assets/images/Union.svg";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import "../style.css";
import clsx from "clsx";
import { updateGuestCount, updatePricerange, updateKidsCount } from "../../../../Containers/Search/searchRedux";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

//  className used for styled component
//  isMobileSearchFilterShow used for make some style based on it.
const FiltersBox = ({ noOfGuest, totalkids, className, isMobileSearchFilterShow }) => {
  const classes = useStyles();
  const { priceRange: priceRangeFromStore } = useSelector((state) => state.search);
  const [adultsCount, setAdultsCount] = useState(noOfGuest);
  const [kidsCount, setKidsCount] = useState(totalkids);
  const [priceRange, setPriceRange] = useState({
    value: { min: +priceRangeFromStore.split("-")[0], max: +priceRangeFromStore.split("-")[1] },
  });
  const dispatch = useDispatch();

  const adultsCountDecreaseHandler = () => {
    if (adultsCount <= 0) return;
    setAdultsCount(adultsCount - 1);
    dispatch(updateGuestCount(adultsCount - 1));
  };
  const adultsCountIncreasesHandler = () => {
    setAdultsCount(adultsCount + 1);
    dispatch(updateGuestCount(adultsCount + 1));
  };
  const kidsCountDecreaseHandler = () => {
    if (kidsCount <= 0) return;
    setKidsCount(kidsCount - 1);
    dispatch(updateKidsCount(kidsCount - 1));
  };
  const kidsCountIncreasesHandler = () => {
    setKidsCount(kidsCount + 1);
    dispatch(updateKidsCount(kidsCount + 1));
  };
  const Updateprice = (value) => {
    setPriceRange(value);
    dispatch(updatePricerange(value.value.min + "-" + value.value.max));
  };

  return (
    <section className={className}>
      <div className={`${classes.filtersContainer} filtersContainer`}>
        <div className={`${classes.flex} filterTitle`}>
          <img src={filterImg} alt="filter" className={classes.filterIcon} />
          <h4 className={classes.filterText}>Filters</h4>
        </div>
        <h4 className={classes.numberOfGuestsText}>Number of guests</h4>
        <Grid container spacing={2}>
          <Grid
            item
            xs={isMobileSearchFilterShow ? 6 : 12}
            sm={isMobileSearchFilterShow ? 6 : 12}
            md={isMobileSearchFilterShow ? 6 : 12}
            xl={6}>
            <div className={clsx(classes.filterButton, classes.flexCenter)}>
              <button
                className={(adultsCount && classes.filterCounterButton) || classes.filterCounterButtonDisabled}
                disabled={!adultsCount}>
                <RemoveIcon className={classes.filterBoxIcon} onClick={adultsCountDecreaseHandler} />
              </button>
              <span className={classes.adultsCountSpan}>{adultsCount} adults</span>
              <button className={classes.filterCounterButton}>
                <AddIcon className={classes.filterBoxIcon} onClick={adultsCountIncreasesHandler} />
              </button>
            </div>
          </Grid>
          <Grid
            item
            xs={isMobileSearchFilterShow ? 6 : 12}
            sm={isMobileSearchFilterShow ? 6 : 12}
            md={isMobileSearchFilterShow ? 6 : 12}
            xl={6}>
            <div className={clsx(classes.filterButton, classes.flexCenter, classes.marginBottom19)}>
              <button className={(kidsCount && classes.filterCounterButton) || classes.filterCounterButtonDisabled} disabled={!kidsCount}>
                <RemoveIcon className={classes.filterBoxIcon} onClick={kidsCountDecreaseHandler} />
              </button>
              <span className={classes.kidsCountSpan}>{kidsCount} kids</span>
              <button className={classes.filterCounterButton}>
                <AddIcon className={classes.filterBoxIcon} onClick={kidsCountIncreasesHandler} />
              </button>
            </div>
          </Grid>
        </Grid>
        <h4 className={classes.priceRangeText}>Price range</h4>
        <div className={classes.priceRangeDiv}>
          <span className={classes.priceRangeSpanText}>$150</span>
          <div className={`${classes.priceRage} priceRage`}>
            <InputRange
              maxValue={500}
              minValue={0}
              formatLabel={(value) => `$${value}`}
              value={priceRange.value}
              onChange={(value) => Updateprice({ value })}
            />
          </div>
          <span className={classes.priceRangeSpanText}>$500</span>
        </div>
      </div>
    </section>
  );
};

export default FiltersBox;

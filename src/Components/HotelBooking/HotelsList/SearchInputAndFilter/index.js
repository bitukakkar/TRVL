import React from "react";
import { useStyles } from "./styles";
import styled from "styled-components";
import { HotelPlaceSearch } from "./../../../HotelPlaceSearch";
import { useDispatch, useSelector } from "react-redux";
import SearchBox from "../SearchBox";
import FiltersBox from "../FiltersBox";
import AdditionalFilters from "../AdditionalFilters";
import { Button, CircularProgress } from "@material-ui/core";
import { updateHotelFilter, updateHotels } from "../../../../Containers/Hotels/hotelsRedux";
import { resetAddressDetails, updateLocation } from "../../../../Containers/Search/searchRedux";
import closeIcon from "./../../../../Assets/images/close3.svg";
import filterIcon from "./../../../../Assets/images/filterIcon.svg";
import clsx from "clsx";
import { setIsFooterShow } from "./SearchInputAndFilterRedux";

const SearchInputAndFilter = ({
  setSortedHotels,
  isFilterButtonLoading,
  filters,
  getfilters,
  searchHandler,
  mobileSearchFilterShow,
  animated,
  setIsHotelsCardShow,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const { isMobileSearchFilterShow } = useSelector((state) => state.searchInputAndFilter);
  const { noOfGuest, totalkids, searchTxt } = useSelector((state) => state.search);
  const [isAnimated, setIsAnimated] = animated;
  const [isMobileSearchFilterShow, setIsMobileSearchFilterShow] = mobileSearchFilterShow;
  return (
    <div>
      <div className={classes.searchInputDiv}>
        <StyledSearchInput
          className={classes.searchInput}
          searchTxt={searchTxt}
          setSearchTxt={(value) => {
            dispatch(resetAddressDetails());
            dispatch(updateHotels([]));
            setSortedHotels([]);
            dispatch(updateLocation(value));
          }}
          inputPropsShow={true}
        />
        <div
          className={classes.filterCircleDiv}
          onClick={() => {
            setIsAnimated(true);
            setIsMobileSearchFilterShow(true);
            dispatch(setIsFooterShow(false));
          }}>
          <img src={filterIcon} alt="" />
        </div>
      </div>
      {isMobileSearchFilterShow ? (
        <div className={clsx(classes.mobileFiltersCard, isAnimated ? classes.backInUp : classes.backOutDown)}>
          <h2 className={classes.mobileFiltersHeader}>Filters</h2>
          <img
            src={closeIcon}
            alt=""
            className={classes.closeIcon}
            onClick={() => {
              setIsAnimated(false);
              setIsHotelsCardShow(true);
              setTimeout(() => {
                setIsMobileSearchFilterShow(false);
                dispatch(setIsFooterShow(true));
              }, 900);
            }}
          />
          <StyledSearchBox filters={filters} />
          <StyledFiltersBox noOfGuest={noOfGuest} totalkids={totalkids} isMobileSearchFilterShow={isMobileSearchFilterShow} />
          <h2 className={classes.filterText}>Filters</h2>
          <StyledAdditionalFilters getfilters={getfilters} isMobileSearchFilterShow={isMobileSearchFilterShow} />
          <div className={classes.mobileFilterButtons}>
            <Button className={classes.clearFilterButton} onClick={() => dispatch(updateHotelFilter([]))}>
              Clear Filter
            </Button>
            <Button className={classes.applyFilterButton} onClick={searchHandler}>
              {isFilterButtonLoading ? <CircularProgress size={20} /> : "Apply Filter"}
            </Button>
          </div>
        </div>
      ) : (
        <></>
      )}

      {/* )} */}
    </div>
  );
};

export default SearchInputAndFilter;

const StyledSearchInput = styled(HotelPlaceSearch)`
  .inputSearch {
    margin: 0 !important;
    border: 0;
    background-color: #fff !important;
    border-radius: 200px;
  }
  .MuiInputBase-root {
    height: 100% !important;
    border-radius: 40px;
  }
`;

const StyledSearchBox = styled(SearchBox)`
  height: auto !important;
  .checkInAndCheckOutBlock {
    background: #ecf4f4 !important;
  }
  .searchSubContainer {
    display: none;
  }
  .yourDestinyBlock {
    display: none;
  }
  .searchButton {
    display: none;
  }
  .searchBox {
    padding: 0;
  }
`;

const StyledFiltersBox = styled(FiltersBox)`
  .filtersContainer {
    padding: 0;
    min-height: auto;
    background: #ecf4f4 !important;
  }
  .filterTitle {
    display: none;
  }
  .priceRage {
    width: 100% !important;
    margin: auto 20px;
  }
`;

const StyledAdditionalFilters = styled(AdditionalFilters)`
  margin-top: 0;
  padding: 0;
  border-radius: 0;
  background: #ecf4f4 !important;
  height: calc(100vh - 500px);
  .filterIconDiv {
    display: none;
  }
`;

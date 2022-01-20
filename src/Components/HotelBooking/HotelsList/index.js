/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Box, Grid, useMediaQuery } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { reactSelectStyles, useStyles } from "./styles";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import HotelCard from "./HotelCard/index";
// import "./style.css";
import SearchBox from "./SearchBox";
import FiltersBox from "./FiltersBox";
import AdditionalFilters from "./AdditionalFilters";
import Select from "react-select";
import useNavBg from "./../../../Hooks/useNavBg";
import useToggle from "./../../../Hooks/useToggle";
import { showNotification } from "../..";
import { getDateInFormat } from "../../../Utils/dateTime";
import { getHotels } from "../../../APIs/AmadeusService";
import { trimHotelData, getFilteredHotels } from "../../../Utils";
import { formatString } from "../../../Utils/hotel";
import { updateHotels } from "../../../Containers/Hotels/hotelsRedux";
import { ERROR_MESSAGES } from "../../../Constants/Strings";
import _ from "lodash";
import { sortHotelWithPrice } from "../../../Utils";
import SearchInputAndFilter from "./SearchInputAndFilter";
import { setIsFooterShow } from "./SearchInputAndFilter/SearchInputAndFilterRedux";
import { getFavoriteHotelsIdList } from "../../../APIs/FavoriteHotel/FavoriteHotelService";

const HotelsList = () => {
  const classes = useStyles();
  const [filters, setFilters] = useState([]);
  const { checkIn, checkOut, noOfGuest, addressDetails, totalkids, searchTxt, priceRange } = useSelector((state) => state.search);
  const [selectedSortOptions, setSelectedSortOptions] = useState([{ value: "popular", label: "Order by popular" }]);
  const hotels = useSelector((state) => state?.hotel?.hotels);
  const [isMobileSearchFilterShow, setIsMobileSearchFilterShow] = useState(false);
  const [isFilterButtonLoading, setIsFilterButtonLoading] = useToggle();
  const [isAnimated, setIsAnimated] = useState(false);
  const [isHotelsCardShow, setIsHotelsCardShow] = useState(true);

  const dispatch = useDispatch();

  const getfilters = (filters) => {
    setFilters(filters);
  };

  const [sortedHotels, setSortedHotels] = useState(hotels);

  const sortHotels = (filter) => {
    switch (filter) {
      case "popular":
        setSortedHotels(hotels);
        break;
      case "price":
        const orderByPrice = sortHotelWithPrice(hotels);
        setSortedHotels(orderByPrice);
        break;
      case "rating":
        const orderByRating = hotels.filter((hotel) => hotel.rating).sort((a, b) => b.rating - a.rating);
        setSortedHotels(orderByRating);
        break;
      default:
        setSortedHotels(hotels);
        break;
    }
  };

  // sort select options
  const sortOptions = [
    { value: "popular", label: "Order by popular" },
    { value: "price", label: "Order by price" },
    { value: "rating", label: "Order by rating" },
  ];

  const [setIsNavBgShow] = useNavBg();
  const isSmallScreen = useMediaQuery("(max-width: 375px)");

  // show nav backgroundColor
  useEffect(() => {
    if (!isSmallScreen) {
      setIsNavBgShow();
      return;
    }

    setIsNavBgShow([true, 220]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSmallScreen]);

  const filtersFromStore = useSelector((state) => state.hotel.filters);

  const updateHotelInStore = (trimedDataHotels) => {
    if (trimedDataHotels && trimedDataHotels?.length !== 0) {
      const filteredHotels = getFilteredHotels(filtersFromStore, trimedDataHotels);

      if (filteredHotels && filteredHotels.length > 0) {
        dispatch(updateHotels(filteredHotels));
      } else {
        showNotification(ERROR_MESSAGES.HOTEL_NOT_FOUND);
        dispatch(updateHotels([]));
      }
    } else {
      showNotification(ERROR_MESSAGES.HOTEL_NOT_FOUND);
      dispatch(updateHotels([]));
    }
  };

  // replace "_" and "-" with " " in hotel name
  const formattedHotelName = (hotels) => {
    if (!hotels) {
      showNotification("Something went wrong. Please try again.");
      return;
    }
    if (!hotels?.length) {
      return [];
    }
    return hotels?.map((hotelObj) => ({ ...hotelObj?.hotel, offers: hotelObj.offers, name: formatString(hotelObj?.hotel?.name) }));
  };

  // hotel search params
  const hotelSearchParams = {
    cityCode: addressDetails?.cityCode,
    checkInDate: getDateInFormat(checkIn),
    checkOutDate: getDateInFormat(checkOut),
    // ratings: 5,
    priceRange: priceRange,
    currency: "EUR",
    adults: noOfGuest,
    amenities: filters?.length > 0 ? filters : "",
  };

  // remove falsy values
  const filteredParams = _.pickBy(hotelSearchParams, function (value, key) {
    return !(value === undefined || value === "" || value === "undefined-NaN-NaN");
  });

  // auto search handler
  const autoSearchHandler = async () => {
    // return if cityCode is not available
    if (!filteredParams?.cityCode) return;

    // get hotels from Amadeus API
    const hotelsList = await getHotels(filteredParams);

    // trim hotel data
    const trimedDataHotels = trimHotelData(formattedHotelName(hotelsList));

    updateHotelInStore(trimedDataHotels);
  };

  const searchHandler = async () => {
    // If All fields are not filled then show error notification
    if (!checkIn || !checkOut || !searchTxt || !noOfGuest || !addressDetails.country) {
      showNotification(ERROR_MESSAGES.ENTER_ALL_FIELDS);
    } else {
      setIsFilterButtonLoading();

      // get hotels from Amadeus API
      const hotelsList = await getHotels(filteredParams);

      // trim hotel data
      const trimedDataHotels = trimHotelData(formattedHotelName(hotelsList));

      updateHotelInStore(trimedDataHotels);
      setIsFilterButtonLoading();
      setIsAnimated(false);
      setIsHotelsCardShow(true);
      setTimeout(() => {
        setIsMobileSearchFilterShow(false);
        dispatch(setIsFooterShow(true));
      }, 900);
    }
  };

  const isMobileScreen = useMediaQuery("(max-width: 767px)");

  // auto search hotels for small screen
  useEffect(() => {
    if (isMobileScreen && addressDetails?.cityCode !== null && searchTxt !== null) {
      autoSearchHandler();
    }
  }, [searchTxt, addressDetails?.cityCode]);

  useEffect(() => {
    sortHotels(selectedSortOptions.value);
  }, [selectedSortOptions]);

  //  when hotels update in store call sortHotels again
  useEffect(() => {
    sortHotels(selectedSortOptions.value);
  }, [hotels]);

  // hide hotel card after 5ms when isMobileSearchFilterShow true
  useEffect(() => {
    if (isMobileSearchFilterShow) {
      setTimeout(() => {
        setIsHotelsCardShow(false);
      }, 500);
    }
  }, [isMobileSearchFilterShow]);

  const [favHotelsIds, setFavHotelsIds] = useState(null);
  const userToken = useSelector((state) => state.authToken.authToken?.access_token);

  useEffect(() => {
    if (!sortedHotels.length) return;
    getFavoriteHotelsIdList(setFavHotelsIds, userToken);
  }, [sortedHotels]);

  return (
    <ScopedCssBaseline>
      <Box className={classes.boxWidth}>
        {isMobileScreen ? (
          <SearchInputAndFilter
            setSortedHotels={setSortedHotels}
            isFilterButtonLoading={isFilterButtonLoading}
            filters={filters}
            getfilters={getfilters}
            searchHandler={searchHandler}
            mobileSearchFilterShow={[isMobileSearchFilterShow, setIsMobileSearchFilterShow]}
            animated={[isAnimated, setIsAnimated]}
            setIsHotelsCardShow={setIsHotelsCardShow}
          />
        ) : (
          <></>
        )}
        <Grid container spacing={isMobileScreen ? 0 : 1}>
          <Grid item xs={12} sm={12} md={4}>
            <Box className={classes.leftBox}>
              <SearchBox filters={filters} />
              <FiltersBox noOfGuest={noOfGuest} totalkids={totalkids} />
              <AdditionalFilters getfilters={getfilters} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <Box className={classes.rightBox} style={{ display: isHotelsCardShow ? "block" : "none" }}>
              <section className={classes.rightBox_top_sect}>
                <div className={classes.rightBox_top_title_div}>
                  <h3>
                    Hotels{" "}
                    {!isMobileScreen ? <span className={classes.hotel_result_text}>({sortedHotels.length} results found)</span> : <></>}
                  </h3>
                </div>
                <div className={classes.formControl}>
                  {isMobileScreen ? <span className={classes.hotel_result_text}>({sortedHotels.length} results found)</span> : <></>}
                  <Select
                    options={sortOptions}
                    value={selectedSortOptions}
                    onChange={(e) => {
                      setSelectedSortOptions(e);
                    }}
                    styles={reactSelectStyles}
                    placeholder="Filter hotels"
                    className={classes.selectStyle}
                    style={{ caretColor: "red" }}
                  />
                </div>
              </section>
              {favHotelsIds && sortedHotels.length > 0 ? (
                sortedHotels.map((data, index) => {
                  const isFav = favHotelsIds.includes(data.hotelId);
                  return <HotelCard hoteldata={data} noOfGuest={noOfGuest + totalkids} isFavorite={isFav} key={index} />;
                })
              ) : (
                <div className={classes.nohotelsfound}>
                  <h4>No hotels found...</h4>
                </div>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ScopedCssBaseline>
  );
};

export default HotelsList;

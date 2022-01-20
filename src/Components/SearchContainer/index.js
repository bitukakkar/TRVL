import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, CircularProgress } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";

import {
  updateCheckin,
  updateCheckout,
  updateLocation,
  updateGuestCount,
} from "../../Containers/Search/searchRedux";
import { updateHotels } from "../../Containers/Hotels/hotelsRedux";
import { DatePicker, PlaceSearch } from "../";
import { getHotels } from "../../APIs/AmadeusService";
import { useStyles } from "./styles";
import { showNotification } from "../";
import { getFilteredHotels, trimHotelData } from "../../Utils";
import { ERROR_MESSAGES, TEXT } from "../../Constants/Strings";
import { Filter } from "../Filter";
import { GuestCountTextField } from "../GuestCountTextField";
import { getDateInFormat } from "../../Utils/dateTime";
import { formatString } from "../../Utils/hotel";

export const SearchContainer = () => {
  const classes = useStyles();
  const {
    checkIn,
    checkOut,
    searchTxt,
    noOfGuest,
    addressDetails,
    agentName,
    currency,
  } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const filtersFromStore = useSelector((state) => state.hotel.filters);
  const setCheckOutDate = (date) => {
    dispatch(updateCheckout(""));
    dispatch(updateCheckin(date));
  };

  const searchHandler = async () => {
    // If All fields are not filled then show error notification
    if (
      !checkIn ||
      !checkOut ||
      !searchTxt ||
      !noOfGuest ||
      !addressDetails.country ||
      !agentName ||
      !currency
    ) {
      showNotification(ERROR_MESSAGES.ENTER_ALL_FIELDS);
    } else {
      setLoading(true);
      const hotelSearch = {
        cityCode: addressDetails?.cityCode,
        checkInDate: getDateInFormat(checkIn),
        // checkOutDate: getDateInFormat(checkOut),
        // ratings: 5,
        priceRange: "200-300",
        currency,
        amenities: filtersFromStore?.length > 0 ? filtersFromStore : "",
      };

      // get hotels from Amadeus API
      const hotels = await getHotels(hotelSearch);
      // replace "_" and "-" with " " in hotel name
      const hotelsWithFixedNames =
        hotels &&
        hotels.length &&
        hotels?.map((hotelObj) => {
          const { hotel, offers } = hotelObj;
          return {
            ...hotel,
            offers,
            name: formatString(hotel?.name),
          };
        });
      // trim hotel data
      const trimedDataHotels = trimHotelData(hotelsWithFixedNames);

      if (trimedDataHotels && trimedDataHotels?.length !== 0) {
        const filteredHotels = getFilteredHotels(
          filtersFromStore,
          trimedDataHotels
        );

        if (filteredHotels && filteredHotels.length > 0) {
          dispatch(updateHotels(filteredHotels));
          history.push({
            pathname: "/hotels",
            state: { hotels: filteredHotels },
          });
        } else {
          showNotification(ERROR_MESSAGES.HOTEL_NOT_FOUND);
        }
      } else {
        showNotification(ERROR_MESSAGES.HOTEL_NOT_FOUND);
      }
      setLoading(false);
    }
  };

  return (
    <div className={classes.floatingBox}>
      <div className={classes.placeSearchContainer}>
        <PlaceSearch
          searchTxt={searchTxt}
          setSearchTxt={(value) => dispatch(updateLocation(value))}
        />
      </div>
      <div className={classes.searchContainer}>
        <DatePicker
          setDate={setCheckOutDate}
          date={checkIn}
          disableDate=""
          label={TEXT.CHECKIN}
        />
        <DatePicker
          setDate={(value) => dispatch(updateCheckout(value))}
          date={checkOut}
          disableDate={checkIn}
          label={TEXT.CHECKOUT}
        />
        <GuestCountTextField
          noOfGuest={noOfGuest}
          setNoOfGuest={(value) => dispatch(updateGuestCount(value))}
        />
      </div>
      <div className={classes.filterButtonContainer}>
        <div className={classes.filterContainer}>
          <Filter />
        </div>
        <div>
          <Button
            onClick={searchHandler}
            className={classes.searchButton}
            disabled={loading}
            variant="contained"
            data-testid="search-button">
            {loading ? (
              <CircularProgress
                data-testid="circular-progress"
                className={classes.circularProgress}
                size={20}
              />
            ) : (
              <SearchIcon />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

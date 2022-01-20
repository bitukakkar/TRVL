import React, { useEffect } from "react";
import { useState } from "react";
import { useStyles } from "./styles";
import { Button, CircularProgress } from "@material-ui/core";
import calendarIcon from "../../../../Assets/images/calendarIcon.svg";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { DatePickerNew, showNotification } from "../../..";
import { ERROR_MESSAGES } from "../../../../Constants/Strings";
import { getFilteredHotels, trimHotelData } from "../../../../Utils";
import { getDateInFormat } from "../../../../Utils/dateTime";
import { formatString } from "../../../../Utils/hotel";
import { getHotels } from "../../../../APIs/AmadeusService";
import { updateHotels } from "../../../../Containers/Hotels/hotelsRedux";
import { HotelPlaceSearch, HotelDatePicker } from "../../..";
import {
  updateLocation,
  updateCheckout,
  updateCheckin,
} from "../../../../Containers/Search/searchRedux";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  setAgentName,
  setCheckIn,
  setCheckOut,
  setGuestCount,
  setAgentFilters,
  setAgentAddress,
  setIsFormFinishAgentSetup,
} from "../../../Others/DigitalAgent/agentRedux";
import agentImg from "./../../../../Assets/images/agent.svg";
import { fetchAgentImage } from "../../../../APIs/DigitalAgentServices/CreateAgent";

const SearchBox = ({ filters, className }) => {
  const {
    agentName,
    checkIn,
    checkOut,
    noOfGuest,
    addressDetails,
    searchTxt,
    priceRange,
  } = useSelector((state) => state.search);
  const hotels = useSelector((state) => state?.hotel?.hotels);
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const setCheckOutDate = (date) => {
    dispatch(updateCheckout(""));
    dispatch(updateCheckin(date));
  };
  const CalendarTodayIcon = () => (
    <img src={calendarIcon} alt="calendar" className={classes.calendarIcon} />
  );
  const filtersFromStore = useSelector((state) => state.hotel.filters);
  const searchHandler = async () => {
    // If All fields are not filled then show error notification
    if (
      !checkIn ||
      !checkOut ||
      !searchTxt ||
      !noOfGuest ||
      !addressDetails.country
    ) {
      showNotification(ERROR_MESSAGES.ENTER_ALL_FIELDS);
    } else {
      setLoading(true);
      const hotelSearch = {
        cityCode: addressDetails?.cityCode,
        checkInDate: getDateInFormat(checkIn),
        checkOutDate: getDateInFormat(checkOut),
        // ratings: 5,
        priceRange: priceRange,
        currency: "EUR",
        adults: noOfGuest,
        amenities: filters?.length > 0 ? filters : "",
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
        } else {
          showNotification(ERROR_MESSAGES.HOTEL_NOT_FOUND);
          dispatch(updateHotels([]));
        }
      } else {
        showNotification(ERROR_MESSAGES.HOTEL_NOT_FOUND);
        dispatch(updateHotels([]));
      }
      setLoading(false);
    }
  };

  const history = useHistory();

  const dateFormatter = (date) => {
    if (!date && date?.split("-").length !== 3) {
      return;
    }
    let d = date.split("-");
    // eslint-disable-next-line no-self-assign
    [d[0], d[1], d[2]] = [d[2], d[1], d[0]];
    return new Date(d.join("/"));
  };

  const formattedFilters =
    (Array.isArray(filters) &&
      filters.length &&
      filters.map((data) => {
        const value = data.split("_").join(" ");
        return { value, label: value };
      })) ||
    [];

  const agentSetupDetails = () => {
    dispatch(setAgentName(agentName));
    dispatch(setCheckIn(dateFormatter()));
    dispatch(setCheckOut(dateFormatter(checkOut)));
    dispatch(setGuestCount(noOfGuest));
    dispatch(
      setAgentAddress({ label: searchTxt?.description, value: searchTxt })
    );
    dispatch(setAgentFilters(formattedFilters));
    dispatch(setIsFormFinishAgentSetup(true));
  };

  const handleFinishAgentSetup = async () => {
    await agentSetupDetails();
    history.push("/digital-agent");
  };

  const agentImage = useSelector((state) => state.agentRegisterDetails.image);
  const userToken = useSelector((state) => state.authToken.authToken);

  useEffect(() => {
    if (!agentImage?.src === "") {
      fetchAgentImage(dispatch, userToken);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className={`${classes.searchContainer} ${className} hotellisting`}>
        <div className={`${classes.searchSubContainer} searchSubContainer`}>
          <div className={classes.blackCircle}>
            <img
              src={agentImage?.src || agentImg}
              alt={agentImage?.alt || "agent"}
            />
          </div>
          <h4 className={classes.name}>{agentName} found you</h4>
          <div className={classes.flexCenterSpaceBetween}>
            <h3 className={classes.availableHotelsText}>
              {" "}
              {hotels.length} hotels
            </h3>
            <button
              className={classes.agentButton}
              onClick={handleFinishAgentSetup}>
              Finish Agent Setup
            </button>
          </div>
        </div>
        <div className={`${classes.searchBox} searchBox`}>
          <form>
            <div className="yourDestinyBlock">
              <p className={classes.label + " yourDestinyLabel"}>
                Your Destiny
              </p>
              {/* <div className={classes.searchInputBox}> */}
              <HotelPlaceSearch
                className={classes.inputSearch + " inputSearch"}
                searchTxt={searchTxt}
                setSearchTxt={(value) => dispatch(updateLocation(value))}
                inputPropsShow={true}
              />
              {/* </div> */}
            </div>
            <div className="checkInAndCheckOutBlock">
              <p className={classes.label}>Check-in and checkout</p>
              <div className={classes.input}>
                <CalendarTodayIcon className={classes.calendarIcon} />
                <HotelDatePicker
                  setDate={setCheckOutDate}
                  date={checkIn}
                  disableDate=""
                  placeholderText="Checkin"
                  className={classes.dateInput}
                  id="checkIn"
                />
                <ArrowForwardIcon className={classes.arrowIcon} />
                <HotelDatePicker
                  setDate={(value) => dispatch(updateCheckout(value))}
                  date={checkOut}
                  disableDate={checkIn}
                  placeholderText="Checkout"
                  checkout={true}
                  className={classes.dateInputTwo}
                />
              </div>
              <Button
                onClick={searchHandler}
                className={`${classes.searchButton} searchButton`}
                disabled={loading}
                variant="contained"
                size="medium"
                color="primary"
                data-testid="search-button">
                {loading ? (
                  <CircularProgress
                    data-testid="circular-progress"
                    className={classes.circularProgress}
                    size={20}
                  />
                ) : (
                  "Search Hotels"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchBox;

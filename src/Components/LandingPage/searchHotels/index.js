import React, { useState } from "react";
import {
  Box,
  CircularProgress,
  FormControl,
  Grid,
  NativeSelect,
  TextField,
} from "@material-ui/core";
import { useStyles } from "./styles";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import userIcon from "./../../../Assets/images/userIcon.svg";
import bedIcon from "./../../../Assets/images/bedIcon.svg";
import settingsIcon from "./../../../Assets/images/settingsIcon.svg";
import agentImg from "./../../../Assets/images/agent.svg";
import clsx from "clsx";
import SearchIcon from "@material-ui/icons/Search";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { DatePickerNew, PlaceSearch, showNotification } from "../..";
import { ERROR_MESSAGES, TEXT } from "../../../Constants/Strings";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  updateAgentName,
  updateCheckin,
  updateCheckout,
  updateLocation,
  updateGuestCount,
  updateRoomCount,
} from "../../../Containers/Search/searchRedux";
import { getDateInFormat } from "../../../Utils/dateTime";
import { getHotels } from "../../../APIs/AmadeusService";
import { formatString } from "../../../Utils/hotel";
import { getFilteredHotels, trimHotelData } from "../../../Utils";
import { updateHotels } from "../../../Containers/Hotels/hotelsRedux";
import { resetTokenReward } from "../../ChatModule/tokenrewardRedux";
import { Filter } from "../../Filter";

const optionsGuests = [
  { value: "1", label: "1 guests" },
  { value: "2", label: "2 guests" },
  { value: "3", label: "3 guests" },
];

const optionsRooms = [
  { value: "1", label: "1 room" },
  { value: "2", label: "2 rooms" },
  { value: "3", label: "3 rooms" },
];

const SearchHotels = () => {
  const classes = useStyles();
  const history = useHistory();

  const {
    checkIn,
    checkOut,
    searchTxt,
    noOfGuest,
    addressDetails,
    priceRange,
    agentName,
    totalroom,
  } = useSelector((state) => state.search);
  const filtersFromStore = useSelector((state) => state.hotel.filters);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

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
      !agentName ||
      !totalroom
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
        roomQuantity: totalroom,
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
          dispatch(resetTokenReward());
          history.push({
            pathname: "/hotel-list",
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

  const agentImage = useSelector((state) => state.agentRegisterDetails.image);

  return (
    <ScopedCssBaseline>
      <Box className={clsx(classes.box, classes.root)}>
        <Box className={classes.box_1}>
          <section className={classes.agent_block}>
            <img
              src={agentImage?.src || agentImg}
              alt={agentImage?.alt || "agent"}
            />
            <div className={classes.agent_name_input_block}>
              <TextField
                label="Agent Name"
                type="text"
                variant="standard"
                value={agentName}
                onChange={(e) => dispatch(updateAgentName(e.target.value))}
                InputProps={{
                  disableUnderline: true,
                  className: classes.block_input,
                }}
              />
            </div>
          </section>
          <section className={classes.search_block}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <SearchIcon />
              </Grid>
              <Grid item xs>
                <PlaceSearch
                  searchTxt={searchTxt}
                  setSearchTxt={(value) => dispatch(updateLocation(value))}
                  styleClass={classes.block_input}
                />
              </Grid>
            </Grid>
          </section>
          <section className={classes.date_picker_block}>
            <div className={classes.check_in_block}>
              <DatePickerNew
                setDate={setCheckOutDate}
                date={checkIn}
                disableDate=""
                label={TEXT.CHECKIN}
                styleClass={classes.block_input}
              />
            </div>
            <div className={classes.divider}>
              <ArrowForwardIcon className={classes.arrow_icon} />
            </div>
            <div className={classes.check_out_block}>
              <DatePickerNew
                setDate={(value) => dispatch(updateCheckout(value))}
                date={checkOut}
                disableDate={checkIn}
                label={TEXT.CHECKOUT}
                checkout={true}
                styleClass={classes.block_input}
              />
            </div>
          </section>
        </Box>
        <Box className={classes.box_2}>
          <section className={classes.box_2_block_container}>
            <div className={classes.box_2_block}>
              <img
                src={userIcon}
                alt="user"
                className={classes.box_2_block_img}
              />
              <FormControl className={classes.formControl_native_select}>
                <NativeSelect
                  value={noOfGuest}
                  onChange={(e) => dispatch(updateGuestCount(e.target.value))}
                  className={classes.selectEmpty}>
                  <option value="" disabled>
                    Select guest
                  </option>
                  {optionsGuests.map(({ value, label }, key) => (
                    <option value={value} key={key}>
                      {label}
                    </option>
                  ))}
                </NativeSelect>
              </FormControl>
            </div>

            <div className={classes.box_2_block}>
              <img
                src={bedIcon}
                alt="user"
                className={classes.box_2_block_img}
              />
              <FormControl className={classes.formControl_native_select}>
                <NativeSelect
                  value={totalroom}
                  onChange={(e) => dispatch(updateRoomCount(e.target.value))}
                  className={classes.selectEmpty}>
                  <option value="" disabled>
                    Select rooms
                  </option>
                  {optionsRooms.map(({ value, label }, key) => (
                    <option value={value} key={key}>
                      {label}
                    </option>
                  ))}
                </NativeSelect>
              </FormControl>
            </div>

            <div className={classes.box_2_block}>
              <img
                src={settingsIcon}
                alt="user"
                className={classes.box_2_block_img}
              />
              <Filter />
            </div>
          </section>
          <button
            onClick={searchHandler}
            type="button"
            className={classes.search_hotels_btn}
            disabled={loading}
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
          </button>
        </Box>
      </Box>
    </ScopedCssBaseline>
  );
};

export default SearchHotels;

import React, { useState } from "react";
import { useStyles } from "./styles";
import "./styles.css";
import {
  Container,
  Box,
  Grid,
  CircularProgress,
  TextField,
} from "@material-ui/core";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import {
  PlaceSearch,
  DatePicker,
  GuestCountTextField,
  RoomCountTextField,
} from "../..";
import { showNotification } from "../..";
import { ERROR_MESSAGES, TEXT } from "../../../Constants/Strings";
import { getHotels } from "../../../APIs/AmadeusService";
import { updateHotels } from "../../../Containers/Hotels/hotelsRedux";
import { useHistory } from "react-router-dom";
import {
  updateLocation,
  updateCheckout,
  updateCheckin,
  updateGuestCount,
  updateAgentName,
  updateRoomCount,
} from "../../../Containers/Search/searchRedux";
import { getFilteredHotels, trimHotelData } from "../../../Utils";
import { getDateInFormat } from "../../../Utils/dateTime";
import { formatString } from "../../../Utils/hotel";
import { useDispatch, useSelector } from "react-redux";
import { Filter } from "../../../Components/Filter";
import { resetTokenReward } from "../../ChatModule/tokenrewardRedux";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

// function a11yProps(index) {
//   return {
//     id: `full-width-tab-${index}`,
//     "aria-controls": `full-width-tabpanel-${index}`,
//   };
// }

function Searchhotel() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

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

  return (
    <div className={classes.root}>
      <Grid spacing={1}>
        <Box className={classes.box}>
          <Container className={classes.container}>
            <Grid container spacing={1} className={classes.innercontainer}>
              <AppBar position="static" color="default">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"></Tabs>
              </AppBar>
              <div className={classes.tab_details}>
                <SwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={value}
                  onChangeIndex={handleChangeIndex}>
                  <TabPanel value={value} index={0} dir={theme.direction}>
                    <div className={classes.search_block}>
                      <div className={classes.search_block_top}>
                        <div className={classes.search_block_top_left}>
                          <div className={classes.agentname}>
                            <TextField
                              fullWidth
                              value={agentName}
                              onChange={(e) =>
                                dispatch(updateAgentName(e.target.value))
                              }
                              variant="outlined"
                              label={TEXT.AGENT_NAME}
                            />
                          </div>

                          <div className={classes.searchplace}>
                            <PlaceSearch
                              searchTxt={searchTxt}
                              setSearchTxt={(value) =>
                                dispatch(updateLocation(value))
                              }
                            />
                          </div>
                        </div>
                        <div className={classes.search_block_top_right}>
                          <div className={classes.checkinout_block}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                              <div className={classes.checkin}>
                                <DatePicker
                                  setDate={setCheckOutDate}
                                  date={checkIn}
                                  disableDate=""
                                  label={TEXT.CHECKIN}
                                />
                              </div>
                              <div className={classes.divider}>
                                <ArrowForwardIcon
                                  className={classes.arrow_icon}
                                />
                              </div>
                              <div className={classes.checkout}>
                                <DatePicker
                                  setDate={(value) =>
                                    dispatch(updateCheckout(value))
                                  }
                                  date={checkOut}
                                  disableDate={checkIn}
                                  label={TEXT.CHECKOUT}
                                />
                              </div>
                            </MuiPickersUtilsProvider>
                          </div>
                        </div>
                      </div>
                      <div className={classes.search_block_bottom}>
                        <div className={classes.search_block_bottom_left}>
                          <div className={classes.options}>
                            <GuestCountTextField
                              noOfGuest={noOfGuest}
                              setNoOfGuest={(value) =>
                                dispatch(updateGuestCount(value))
                              }
                            />
                          </div>
                          <div className={classes.options}>
                            <RoomCountTextField
                              totalroom={totalroom}
                              setNoOfRoom={(value) =>
                                dispatch(updateRoomCount(value))
                              }
                            />
                          </div>
                          <div className={classes.filterblock}>
                            <Filter />
                          </div>
                        </div>
                        <div className={classes.search_block_bottom_right}>
                          <div className={classes.search_btn}>
                            <button
                              onClick={searchHandler}
                              className={classes.search_button}
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </SwipeableViews>
              </div>
            </Grid>
          </Container>
        </Box>
      </Grid>
    </div>
  );
}

export default Searchhotel;

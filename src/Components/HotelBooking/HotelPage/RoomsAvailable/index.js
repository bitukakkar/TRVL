import React, { useState } from "react";
import { useStyles } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { updateCheckin, updateCheckout, updateGuestCount, updateKidsCount } from "../../../../Containers/Search/searchRedux";
import { Box, Button, CircularProgress, Grid } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { HotelDatePicker } from "../../..";
import calendarIcon from "../../../../Assets/images/calendarIcon.svg";
import clsx from "clsx";
import Room from "../RoomCard";

const RoomsAvailable = ({ rooms, loading, selectedhotel, searchrooms, agentaddress }) => {
  const classes = useStyles();

  const { checkIn, checkOut, noOfGuest, totalkids } = useSelector((state) => state.search);
  const [adultsCount, setAdultsCount] = useState(noOfGuest);
  const [kidsCount, setKidsCount] = useState(totalkids);
  const [loading1, setLoading1] = useState(false);

  const dispatch = useDispatch();
  const adultsCountDecreaseHandler = () => {
    if (adultsCount <= 1) return;
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
  const CalendarTodayIcon = () => <img src={calendarIcon} alt="calendar" className={classes.calendarIcon} />;
  const setCheckOutDate = (date) => {
    dispatch(updateCheckout(""));
    dispatch(updateCheckin(date));
  };
  const updateRoomavailability = () => {
    setLoading1(true);
    searchrooms();
  };

  const [sliceRoomQty, setSliceRoomQty] = useState(8);
  const [seeMoreBtnLoading, setSeeMoreBtnLoading] = useState(false);

  const slicedRooms = () => {
    return rooms.slice(0, sliceRoomQty);
  };

  return (
    <Box className={classes.roomsContainer}>
      <h3 className={classes.roomsContainerTitle}>Rooms available</h3>
      <Box className={classes.roomsContentContainer}>
        <div className={classes.bookingBox}>
          <div className={classes.bookingBoxMargin}>
            <h3 className={classes.bookingBoxTitle}>Booking options</h3>
            <p className={classes.label}>Check-in and checkout</p>
            <div
              className={classes.input + " dateblock"}
              style={{
                backgroundColor: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <CalendarTodayIcon style={{ fontSize: 21, color: "#1C232B", marginLeft: "13px" }} />

              <HotelDatePicker
                setDate={setCheckOutDate}
                date={checkIn}
                disableDate=""
                placeholderText="Checkin"
                className={classes.dateInput}
                id="checkIn"
              />
              <ArrowForwardIcon style={{ fontSize: 19, color: "#1C232B", marginRight: "0px" }} />

              <HotelDatePicker
                setDate={(value) => dispatch(updateCheckout(value))}
                date={checkOut}
                disableDate={checkIn}
                placeholderText="Checkout"
                className={classes.dateInputTwo}
              />
            </div>
            <p className={classes.label}>Number of guests</p>
            <div className={classes.flexCenterSpaceBetween}>
              <div className={clsx(classes.filterButton, classes.flexCenter)}>
                <button
                  className={(adultsCount && classes.filterCounterButton) || classes.filterCounterButtonDisabled}
                  disabled={!adultsCount}>
                  <RemoveIcon style={{ fontSize: "16px" }} onClick={adultsCountDecreaseHandler} />
                </button>
                <span>{adultsCount} adults</span>
                <button className={classes.filterCounterButton}>
                  <AddIcon style={{ fontSize: "16px" }} onClick={adultsCountIncreasesHandler} />
                </button>
              </div>
              <div className={clsx(classes.filterButton, classes.flexCenter)} style={{ marginLeft: "10px" }}>
                <button className={(kidsCount && classes.filterCounterButton) || classes.filterCounterButtonDisabled} disabled={!kidsCount}>
                  <RemoveIcon style={{ fontSize: "16px" }} onClick={kidsCountDecreaseHandler} />
                </button>
                <span>{kidsCount} kids</span>
                <button className={classes.filterCounterButton}>
                  <AddIcon style={{ fontSize: "16px" }} onClick={kidsCountIncreasesHandler} />
                </button>
              </div>
            </div>

            <Button
              onClick={() => {
                updateRoomavailability();
                setSliceRoomQty(8);
              }}
              className={classes.searchButton}
              disabled={loading}
              variant="contained"
              size="medium"
              color="primary"
              data-testid="search-button">
              {loading ? (
                <CircularProgress data-testid="circular-progress" className={classes.circularProgress} size={20} />
              ) : (
                "Search Hotels"
              )}
            </Button>
          </div>
        </div>
        <div className={classes.roomsBox}>
          {!loading && slicedRooms().length > 0 ? (
            <>
              {slicedRooms().map((data, index) => (
                <Room key={index} roomdata={data} agentaddress={agentaddress} />
              ))}
              {sliceRoomQty < rooms.length && (
                <button
                  className={classes.roomSeeMoreButton}
                  disabled={seeMoreBtnLoading}
                  onClick={() => {
                    setSeeMoreBtnLoading(true);
                    setTimeout(() => {
                      setSeeMoreBtnLoading(false);
                      setSliceRoomQty(sliceRoomQty + 8);
                    }, [1000]);
                  }}>
                  {seeMoreBtnLoading ? (
                    <CircularProgress data-testid="circular-progress" className={classes.circularProgress} size={20} />
                  ) : (
                    "Show more"
                  )}
                </button>
              )}
            </>
          ) : (
            <Grid item xs={12} md={12}>
              <>
                {loading ? (
                  <div className={classes.loading_text}>
                    Searching for rooms ... <CircularProgress />
                  </div>
                ) : (
                  "No room found.."
                )}
              </>
            </Grid>
          )}
        </div>
      </Box>
    </Box>
  );
};
export default RoomsAvailable;

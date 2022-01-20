import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

import { FilterBox, HotelCard, MatchedHotels } from "../../Components";
import { useStyles } from "./styles";
import { updateHotel } from "./hotelsRedux";
import { TEXT } from "../../Constants/Strings";
import { updateRoomTotalPrice } from "../../Components/Payment/PaymentRedux";

export const Hotels = ({ location }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotel] = useState([]);
  const [showHotel, setShowHotel] = useState({});
  const [matchedHotels, setMatchedHotels] = useState([]);
  const [showCircularProgress, setCircularProgress] = useState(false);
  const [isFilterClicked, setIsFilterClicked] = useState(false);
  const { agentName, currency, checkIn, checkOut, noOfGuest, addressDetails } =
    useSelector((state) => state.search);

  useEffect(() => {
    setHotels(location?.state?.hotels);
    setFilteredHotel(location?.state?.hotels);
  }, [location]);

  useEffect(() => {
    const hotel = filteredHotels?.find((item) => !item.isShown);
    setShowHotel(hotel);

    const matchedHotelList = filteredHotels?.filter(
      (item) => item?.hotelId !== hotel?.hotelId
    );

    setMatchedHotels(matchedHotelList);
  }, [filteredHotels]);

  const handleNo = (hotel_id) => {
    // remove hotel on click of NO
    setCircularProgress(true);
    setTimeout(() => {
      const _filteredHotels = filteredHotels?.filter(
        (hotel) => hotel.hotelId !== hotel_id
      );
      setFilteredHotel(_filteredHotels);
      setCircularProgress(false);
    }, 1000);
  };

  const handleYes = (hotel) => {
    // Go to details page on click of YES
    dispatch(updateHotel(hotel));
    dispatch(updateRoomTotalPrice(hotel?.offers[0]?.price?.total))
    history.push("/details");
  };

  return (
    <div>
      <div className={classes.agentDetailOutterContainer}>
        <div className={classes.agentDetailInnerContainer}>
          <div className={classes.agentDetailContainer}>
            <div className={classes.agentDetailLeftContainer}>
              <div className={classes.agentDetailLabel}>{TEXT.AGENT_NAME}:</div>
              <div className={classes.agentDetailValue}>{agentName}</div>
            </div>
            <div className={classes.agentDetailRightContainer}>
              <div className={classes.agentDetailLabel}>{TEXT.CURRENCY}:</div>
              <div className={classes.agentDetailValue}>{currency}</div>
            </div>
          </div>
          <div className={classes.agentDetailContainer}>
            <div className={classes.agentDetailLeftContainer}>
              <div className={classes.agentDetailLabel}>{TEXT.CHECKIN}:</div>
              <div className={classes.agentDetailValue}>{checkIn}</div>
            </div>
            <div className={classes.agentDetailRightContainer}>
              <div className={classes.agentDetailLabel}>{TEXT.CHECKOUT}:</div>
              <div className={classes.agentDetailValue}>{checkOut}</div>
            </div>
          </div>
          <div className={classes.agentDetailContainer}>
            <div className={classes.agentDetailLeftContainer}>
              <div className={classes.agentDetailLabel}>{TEXT.LOCATION}:</div>
              <div className={classes.agentDetailValue}>
                {addressDetails?.city && `${addressDetails?.city}, `}
                {addressDetails?.county && `${addressDetails?.county}, `}
                {addressDetails?.country && `${addressDetails?.country} `}
              </div>
            </div>
            <div className={classes.agentDetailRightContainer}>
              <div className={classes.agentDetailLabel}>
                {TEXT.GUEST_COUNT}:
              </div>
              <div className={classes.agentDetailValue}> {noOfGuest}</div>
            </div>
          </div>
        </div>
      </div>
      {/* Show filter options */}
      {hotels?.length > 0 && (
        <div className={classes.filterOutterContainer}>
          <div className={classes.filterContainer}>
            <div className={classes.foundMessage}>
              <p>
                We've found {filteredHotels?.length} hotels, what's important to
                you?
              </p>
            </div>
            <div className={classes.filterButtonContainer}></div>
            <FilterBox
              hotels={hotels}
              setFilteredHotel={setFilteredHotel}
              setIsFilterClicked={setIsFilterClicked}
            />
          </div>
        </div>
      )}
      {filteredHotels?.length > 0
        ? showHotel &&
          Object.keys(showHotel)?.length > 0 && (
            <div className={classes.showHotelMainContainer}>
              <p className={classes.showHotelTitle}>{TEXT.FEATURED_HOTELS}</p>
              <div className={classes.showHotelMessageLeft}>
                <div className={classes.agentMessageContainer}>
                  <div className={classes.agentMessage}>
                    {TEXT.WHAT_ABOUT_THIS_HOTEL}
                  </div>

                  <HotelCard showHotel={showHotel} />

                  <div className={classes.agentMessageTip}></div>
                </div>
              </div>
              <div className={classes.showHotelMessageRight}>
                <div className={classes.showHotelButtonContainer}>
                  <Button
                    onClick={() => handleYes(showHotel)}
                    className={classes.showHotelButton}
                    variant="contained"
                  >
                    {TEXT.YES}
                  </Button>
                  <Button
                    onClick={() => handleNo(showHotel.hotelId)}
                    className={classes.showHotelButton}
                    variant="contained"
                  >
                    {TEXT.NO}
                  </Button>
                </div>
              </div>
              {showCircularProgress && (
                <div className={classes.circularProgressContainer}>
                  <CircularProgress
                    className={classes.circularProgress}
                    size={50}
                  />
                </div>
              )}
            </div>
          )
        : isFilterClicked && (
            <div className={classes.noHotelFoundMessage}>
              {TEXT.NO_HOTEL_MACHING_FILTER}
            </div>
          )}
      {matchedHotels?.length > 0 && (
        <MatchedHotels matchedHotels={matchedHotels} />
      )}
    </div>
  );
};

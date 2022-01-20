import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { TextField, Button, CircularProgress } from "@material-ui/core";
import uuid from "uuid/dist/v4";

import { ERROR_MESSAGES, TEXT } from "../../Constants/Strings";
import { CURRENCY_CHOICE, STRATEGIES } from "../../Constants/General";
import { useStyles } from "./styles";
import { Filter } from "../../Components/Filter";
import {
  DatePicker,
  Dropdown,
  GuestCountTextField,
  PlaceSearch,
  showNotification,
} from "../../Components";
import {
  updateAgentName,
  updateCheckin,
  updateCheckout,
  updateCurrency,
  updateGuestCount,
  updateLocation,
} from "../Search/searchRedux";
import { updateAgentAddress } from "./agentDeployRedux";
import { updateHotels } from "../Hotels/hotelsRedux";
import { getFilteredHotels, trimHotelData } from "../../Utils";

import { getHotels } from "../../APIs/AmadeusService";

import { getDateInFormat } from "../../Utils/dateTime";
import { formatString } from "../../Utils/hotel";

export const AgentDeploy = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [strategy, setStretagy] = useState("");
  const [budget, setBudget] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    checkIn,
    checkOut,
    searchTxt,
    noOfGuest,
    agentName,
    currency,
    addressDetails,
  } = useSelector((state) => state.search);
  const { agentAddress } = useSelector((state) => state.agentDeploy);
  const filtersFromStore = useSelector((state) => state.hotel.filters);
  const setCheckOutDate = (date) => {
    dispatch(updateCheckout(""));
    dispatch(updateCheckin(date));
  };

  const getuuid = () => {
    dispatch(updateAgentAddress(uuid()));
  };

  const handleDeploy = async () => {
    // Check if all the fields are filled
    if (
      !checkIn ||
      !checkOut ||
      !searchTxt ||
      !noOfGuest ||
      !addressDetails.country ||
      !agentName ||
      !currency ||
      !agentAddress ||
      !strategy ||
      !budget
    ) {
      showNotification(ERROR_MESSAGES.ENTER_ALL_FIELDS);
    } else {
      setLoading(true);
      const hotelSearch = {
        // country: addressDetails.country,
       cityName: addressDetails.county,
       // city: addressDetails.city,
       checkInDate: getDateInFormat(checkIn),
       checkOutDate: getDateInFormat(checkOut),
       amenities: filtersFromStore?.length > 0 ? filtersFromStore : "",
      };
      // get hotels from /search
      const hotels = await getHotels(hotelSearch);
      //NOTE: Replace "_" with " " in hotel names
      const hotelsWithFixedNames =
        hotels &&
        hotels.length &&
        hotels?.map((hotel) => ({
          ...hotel,
          name: formatString(hotel?.name),
        }));
      const trimedDataHotels = trimHotelData(hotelsWithFixedNames);
      if (trimedDataHotels && trimedDataHotels?.length !== 0) {
        const filteredHotels = getFilteredHotels(filtersFromStore, trimedDataHotels);
        dispatch(updateHotels(filteredHotels));
        history.push({
          pathname: "/hotels",
          state: { hotels: filteredHotels },
        });
      } else {
        showNotification(ERROR_MESSAGES.HOTEL_NOT_FOUND);
      }
      setLoading(false);
    }
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.agentDeployContainer}>
        <div className={classes.agentDeployRow}>
          <div className={classes.agentDeployColHalf}>
            <TextField
              fullWidth
              value={agentName}
              onChange={(e) => dispatch(updateAgentName(e.target.value))}
              variant="outlined"
              label={TEXT.AGENT_NAME}
            />
          </div>
          <div className={classes.agentDeployColHalf}>
            <TextField
              fullWidth
              variant="outlined"
              value={agentAddress}
              label={TEXT.AGENT_ADDRESS}
              InputProps={{
                endAdornment: (
                  <div className={classes.stepper}>
                    <Button onClick={getuuid} className={classes.stepperButton}>
                      {TEXT.CREATE}
                    </Button>
                  </div>
                ),
              }}
            />
          </div>
        </div>
        <div className={classes.agentDeployRow}>
          <div className={classes.agentDeployColFull}>
            <Dropdown
              value={currency}
              setValue={(value) => dispatch(updateCurrency(value))}
              menuItems={CURRENCY_CHOICE}
              label={TEXT.CURRENCY_CHOICE}
            />
          </div>
        </div>
        <div className={classes.agentDeployRow}>
          <div className={classes.agentDeployColFull}>
            <Dropdown
              value={strategy}
              setValue={setStretagy}
              menuItems={STRATEGIES}
              label={TEXT.STRATEGY}
            />
          </div>
        </div>
        <div className={classes.agentDeployRow}>
          <div className={classes.agentDeployColFull}>
            <Filter />
          </div>
        </div>
        <div className={classes.agentDeployRow}>
          <div className={classes.agentDeployColHalf}>
            <PlaceSearch
              searchTxt={searchTxt}
              setSearchTxt={(value) => dispatch(updateLocation(value))}
            />
          </div>
          <div className={classes.agentDeployColHalf}>
            <TextField
              onChange={(e) => setBudget(e.target.value)}
              value={budget}
              fullWidth
              variant="outlined"
              label={TEXT.BUDGET}
            />
          </div>
        </div>
        <div className={classes.agentDeployRow}>
          <div className={classes.agentDeployColThree}>
            <DatePicker
              setDate={setCheckOutDate}
              date={checkIn}
              disableDate=""
              label={TEXT.CHECKIN}
            />
          </div>
          <div className={classes.agentDeployColThree}>
            <DatePicker
              setDate={(value) => dispatch(updateCheckout(value))}
              date={checkOut}
              disableDate={checkIn}
              label={TEXT.CHECKOUT}
            />
          </div>
          <div className={classes.agentDeployColThree}>
            <GuestCountTextField
              noOfGuest={noOfGuest}
              setNoOfGuest={(value) => dispatch(updateGuestCount(value))}
            />
          </div>
        </div>
        <div className={classes.agentDeployRow} style={{ justifyContent: "flex-end" }}>
          <div className={classes.agentDeployBtnContainer}>
            <Button
              disabled={loading}
              variant="contained"
              onClick={() => handleDeploy()}
              className={classes.button}
            >
              {loading && <CircularProgress className={classes.circularProgress} size={20} />}
              {TEXT.DEPLOY}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

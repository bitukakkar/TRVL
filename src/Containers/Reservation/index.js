import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import HomeIcon from "@material-ui/icons/Home";
import RoomIcon from "@material-ui/icons/Room";
import EuroIcon from "@material-ui/icons/Euro";
import TodayIcon from "@material-ui/icons/Today";
import { showNotification, BookingDetailBox, OfferBox } from "../../Components";
import { confirmBooking } from "../../APIs/ClientService";
import { useStyles } from "./styles";
import {
  PERFORMATIVE,
  REFERRAL,
  UI_NOTIFICATIONS_TYPE,
} from "../../Types/Enums";
import { ERROR_MESSAGES, TEXT } from "../../Constants/Strings";
import { bookMillennium } from "../../APIs/AmadeusService";
import { getFormattedBookingData, xmlToJson } from "../../Utils";
import { formatString, getAddressString } from "../../Utils/hotel";

export const Reservation = ({ location }) => {
  const classes = useStyles();
  const [action, setAction] = useState(null);
  const [bookingData, setBookingData] = useState({});
  const [confirmationResult, setConfirmationResult] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { booking_id } = useParams();
  const hotelData = useSelector((state) => state.hotel.hotel);
  const agentData = useSelector((state) => state.hotelDetails.agent);
  const { checkIn, checkOut } = useSelector((state) => state.search);

  const hotelInfoData = [
    {
      icon: <HomeIcon className={classes.detailIcon} />,
      text: formatString(hotelData?.name),
    },
    {
      icon: <RoomIcon className={classes.detailIcon} />,
      text: getAddressString(hotelData?.address),
    },
    {
      icon: <TodayIcon className={classes.detailIcon} />,
      text: `${checkIn} to ${checkOut}`,
    },
    {
      icon: <EuroIcon className={classes.detailIcon} />,
      text: `${location?.state?.row?.offers[0]?.price?.total}`,
    },
  ];
  const pad = (digit) => {
    // If number if single digit, then convert it to double by adding 0 infront of it
    const digitNum = parseInt(digit);
    return digitNum < 10 ? `0${digitNum}` : `${digitNum}`;
  };

  const getDateForRequest = (date) => {
    const [DD, MM, YYYY] = date.split("-");
    return `${YYYY}-${pad(MM)}-${pad(DD)}`;
  };

  const handleDialougeTerminationAction = async () => {
    if (!action) {
      return;
    }
    if (action === PERFORMATIVE.DECLINE) {
      if (location?.state?.referral === REFERRAL.GOOGLE) {
        // Go to /landing page
        history.go(-1);
      }
      // Go to /hotels page
      history.go(-2);
      return;
    }
    setLoading(true);
    const { host, port } = agentData;
    if (host && port) {
      const confirmationData = await confirmBooking(host, port, {
        uuid: hotelData.id,
        booking_id,
      });
      // TODO: Save checkIn and checkOut timestamps in redux
      // Patch get the dates in format YYYY-MM-DD from DD-MM-YYYY
      const xmlString = await bookMillennium(
        getDateForRequest(checkIn),
        getDateForRequest(checkOut)
      );
      //Convert XML data to JSON
      const unescapeXMLStr = unescape(xmlString);
      const XmlNode = new DOMParser().parseFromString(
        unescapeXMLStr,
        "text/xml"
      );
      const hotelDetailJSON = xmlToJson(XmlNode);
      const bookingDataJSON = getFormattedBookingData(hotelDetailJSON);
      setBookingData(bookingDataJSON);
      setLoading(false);
      // Show success notification on booking successfull
      if (confirmationData) {
        showNotification(
          ERROR_MESSAGES.BOOKING_CONFIRMED,
          UI_NOTIFICATIONS_TYPE.success
        );
        setConfirmationResult(confirmationData);
      }
    }
  };

  return (
    <>
      <div className={classes.ReservationContainer}>
        <div className={classes.ReservationInnerContainer}>
          <div className={classes.reservationDetailsContainer}>
            <h2>{TEXT.RESERVATION_DETAILS}</h2>
            <div className={`${classes.hotelInfo} ${classes.hotelImg}`}>
              <img
                className={classes.hotelImage}
                src={hotelData?.media[0]?.uri}
                alt="hotel"
              />
            </div>
            <div className={classes.reservationDetail}>
              {hotelInfoData?.map((item, index) => (
                <div key={index} className={classes.hotelInfo}>
                  {item.icon}
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            <hr className={classes.horizontalLine} />
            <OfferBox price={""} />
          </div>
          <div className={classes.DialogueContainer}>
            {/* <Dialogues bookingId={booking_id} setAction={setAction} /> */}
            {confirmationResult ? (
              <div className={classes.confirmationBox}>
                {/* Hide transaction hash. Need in future */}
                {/* <p>{`Booking ID: ${confirmationResult?.booking_id}`}</p> */}
                {/* <p>
                {`Transaction Link: `}
                <a
                  className={classes.link}
                  href={confirmationResult.transaction_hash}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  {`${confirmationResult.transaction_hash}`}
                </a>
              </p> */}
              </div>
            ) : (
              <div className={classes.confirmBtnContainer}>
                {action && (
                  <Button
                    variant="contained"
                    onClick={handleDialougeTerminationAction}
                    className={!loading && classes.button}>
                    {loading && (
                      <CircularProgress
                        className={classes.circularProgress}
                        size={20}
                      />
                    )}
                    {action === PERFORMATIVE.CONFORMATION
                      ? TEXT.CONFIRM
                      : TEXT.GO_BACK_TO_SEARCH}
                  </Button>
                )}
              </div>
            )}
            <div className={classes.confirmResultContainer}>
              {confirmationResult && (
                <BookingDetailBox
                  bookingInfo={bookingData}
                  bookingId={booking_id}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

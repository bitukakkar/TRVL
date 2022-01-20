import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useStyles } from "./styles";
import { TEXT } from "../../Constants/Strings";

const BookingDetail = ({ data, text }) => {
  const classes = useStyles();
  return (
    <div className={classes.bookingDetails}>
      <div className={classes.bookingDetailsLabel}>{text}</div>
      {data}
    </div>
  );
};

export const BookingDetailBox = ({ bookingInfo, bookingId }) => {
  const classes = useStyles();
  const [bookingData, setBookingData] = useState({});
  const price = useSelector((state) => state.reservation.payPrice);
  const bookingDetails = [
    {
      data: bookingId,
      text: `${TEXT.BOOKING_ID}:`,
    },
    {
      data: `${bookingData?.addressLine}, ${bookingData?.city}, ${bookingData?.country}`,
      text: `${TEXT.ADDRESS}:`,
    },
    {
      data: bookingData?.email,
      text: `${TEXT.EMAIL}:`,
    },
    {
      data: bookingData?.phone,
      text: `${TEXT.PHONE}:`,
    },
    {
      data: bookingData?.roomType,
      text: `${TEXT.ROOM_TYPE}:`,
    },
    {
      data: bookingData?.guestCount,
      text: `${TEXT.GUEST_COUNT}:`,
    },
    {
      data: bookingData?.checkin,
      text: `${TEXT.CHECKIN}:`,
    },
    {
      data: bookingData?.checkout,
      text: `${TEXT.CHECKOUT}:`,
    },
    {
      data: price,
      text: `${TEXT.PRICE}:`,
    },
  ];

  useEffect(() => {
    setBookingData(bookingInfo);
  }, [bookingInfo]);

  return (
    <div className={classes.bookingDetailsContainer}>
      <h1 className={classes.confirmationTitle}>{TEXT.YOUR_BOOKING_IS_CONFIRMED}</h1>
      {bookingDetails?.length > 0 &&
        bookingDetails?.map((bookingDetail) => (
          <BookingDetail data={bookingDetail?.data} text={bookingDetail.text} />
        ))}
    </div>
  );
};

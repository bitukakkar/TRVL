import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BookingDetials from "../BookingDetails";
import { useStyles } from "./../styles";
import clsx from "clsx";
import dayjs from "dayjs";

const BookingDetailsBox = () => {
  const classes = useStyles();
  const [breakfastexits, setBreakfastexits] = useState(false);
  const selectedhotel = useSelector((state) => state.hotel.selectedhotel);
  const selectedroom = useSelector((state) => state.hotel.selectedroom);

  const checkAmenitiesexits = (selectedhotel) => {
    if ("amenities" in selectedhotel) {
      return true;
    } else {
      return false;
    }
  };

  const splitDeadline = (deadline) => {
    if (!deadline) return null;
    return dayjs(deadline).format("dddd, MMM M HH:mm A");
  };

  useEffect(() => {
    if (checkAmenitiesexits) {
      if (selectedhotel.amenities.indexOf("BREAKFAST_FULL") >= 0) {
        setBreakfastexits(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <h3 className={classes.title}>Booking details</h3>
      <BookingDetials />
      {breakfastexits && (
        <div className={clsx(classes.boxOffer)}>
          <div className={clsx(classes.boxOfferPadding, classes.greenCheckedIcon)}>
            {" "}
            <div className={clsx(classes.boxImgCircle, classes.bookicon1)}></div>
            <h3 className={classes.boxOfferTitle}>Breakfast included</h3>
            <div className={classes.bookactiveImg}></div>
          </div>
        </div>
      )}
      <div className={clsx(classes.boxOffer)}>
        <div className={clsx(classes.boxOfferPadding, classes.greenCheckedIcon)}>
          <div className={clsx(classes.boxImgCircle, classes.bookicon2)}></div>
          <h3 className={classes.boxOfferTitle}>
            {"Cancelation fees $" +
              `${selectedroom?.policies?.cancellation?.amount || 0}` +
              " before " +
              splitDeadline(selectedroom?.policies?.cancellation?.deadline)}
          </h3>
        </div>
      </div>
    </>
  );
};

export default BookingDetailsBox;

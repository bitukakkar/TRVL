import clsx from "clsx";
import React from "react";
import { useSelector } from "react-redux";
import { useStyles } from "./../styles";

export const BookingDetials = () => {
  const classes = useStyles();
  const selectedHotelRoom = useSelector((state) => state.hotel.selectedroom);
  const searchDate = useSelector((state) => state.search);
  const { price, guests } = selectedHotelRoom;
  const { checkIn, checkOut } = searchDate;
  // format date to get weekday name, month name and date.
  const dateFormatter = (date) => {
    if (!date && date?.split("-").length !== 3) return;
    let formatDate = date?.split("-");
    // eslint-disable-next-line no-self-assign
    [formatDate[0], formatDate[1], formatDate[2]] = [formatDate[2], formatDate[1], formatDate[0]];
    formatDate = formatDate.join(", ");
    const fullDate = new Date(formatDate);
    const month = fullDate.toLocaleString("default", { month: "short" });
    const day = fullDate.toLocaleString("default", { weekday: "long" });
    const dateNumber = String(fullDate.getDate()).padStart(2, "0");
    return `${day}, ${month} ${dateNumber}`;
  };

  // duration calculate between dates
  const calculateDuration = (checkin, checkout) => {
    if (!checkin && checkin?.split("-").length !== 3 && !checkout && checkout?.split("-").length !== 3) {
      return;
    }

    const format = (date) => {
      let formatDate = date?.split("-");
      // eslint-disable-next-line no-self-assign
      [formatDate[0], formatDate[1], formatDate[2]] = [formatDate[2], formatDate[1], formatDate[0]];
      formatDate = formatDate.join(", ");
      return formatDate;
    };
    const dateOne = new Date(format(checkin));
    const dateTwo = new Date(format(checkout));
    // To calculate the time difference of two dates
    const differenceInTime = dateTwo.getTime() - dateOne.getTime();
    // To calculate the no. of days between two dates
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return differenceInDays.toFixed();
  };

  const durationCount = calculateDuration(checkIn, checkOut);

  // remove fraction .00
  const formatPrice = (price) => {
    if (!price) return 0;
    const splitPrice = price.split(".");

    if (!splitPrice.length) return 0;

    if (splitPrice[1] === "00") {
      return splitPrice[0];
    }

    return price;
  };

  return (
    <>
      <div className={classes.durationContainer}>
        <div className={classes.durationDateBlock}>
          <div className={classes.checkIn}>
            <h4 className={classes.subTitle}>Check-in</h4>
            <p className={classes.dateText}>{dateFormatter(checkIn)}</p>
            {/* <p className={classes.dateNumericText}>14:00 – 24:00</p> */}
          </div>
          <div className={classes.checkOut}>
            <h4 className={classes.subTitle}>Check-out</h4>
            <p className={classes.dateText}>{dateFormatter(checkOut)}</p>
            {/* <p className={classes.dateNumericText}>7:00 – 12:00</p> */}
          </div>
        </div>
        <h4 className={classes.durationText}>Duration</h4>
        <p className={classes.durationDayText}>
          {durationCount} days <span className={classes.durationDayTextSpan}>(starts tomorrow)</span>
        </p>
      </div>
      <div className={clsx(classes.box, classes.grayBg)}>
        <div className={classes.boxPadding}>
          <h3 className={classes.subTitle}>Guests</h3>
          <div className={classes.boxContainer}>
            <p className={classes.boxText}>Up to 3 guests</p>
            <h3 className={classes.boxTextPrice}>{guests?.adults}</h3>
          </div>
        </div>
      </div>
      <div className={clsx(classes.box, classes.grayBg)}>
        <div className={classes.boxPadding}>
          <h3 className={classes.subTitle}>Price</h3>
          <div className={classes.boxContainer}>
            <p className={classes.boxText}>
              For {guests?.adults} guests and {durationCount} days.
            </p>
            <h3 className={classes.boxTextPrice}>${formatPrice(price?.total)}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingDetials;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import HomeIcon from "@material-ui/icons/Home";
import RoomIcon from "@material-ui/icons/Room";
import GroupIcon from "@material-ui/icons/Group";
import TodayIcon from "@material-ui/icons/Today";

import { useStyles } from "./styles";
import { HotelRoom } from "../../Components";
import { TEXT } from "../../Constants/Strings";
import { getRandomImages } from "../../Utils";
import { getAddressString } from "../../Utils/hotel";
import { chargeCreate } from "../../Utils/payment";

export const HotelDetails = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [images, setImages] = useState(null);
  const hotelData = useSelector((state) => state.hotel.hotel);
  const { checkIn, checkOut, noOfGuest } = useSelector((state) => state.search);
  const hotelName = useSelector((state) => state.hotel.hotel.name);
  const selectedCurrency = useSelector((state) => state.search.currency);
  const hotelPrice = useSelector((state) => state.roomTotalPrice.payPrice);

  const capitalizeString = (str) => str?.replace(/^\w/, (c) => c.toUpperCase());

  const hotelInfoData = [
    {
      icon: <HomeIcon className={classes.detailIcon} />,
      text: capitalizeString(hotelData.name),
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
      icon: <GroupIcon className={classes.detailIcon} />,
      text: `${noOfGuest}`,
    },
  ];

  const getRoomImage = () => {
    // get random image as per ImageGallery format
    const imageArray = [];
    for (let i = 0; i < 5; i++) {
      const image = getRandomImages();
      imageArray.push({
        original: image,
        thumbnail: image,
      });
    }
    return imageArray;
  };

  useEffect(() => {
    const hotelImage =
      hotelData?.media?.map((data) => {
        return {
          original: data?.uri,
          thumbnail: data?.uri,
        };
      }) || [];
    setImages([...hotelImage, ...getRoomImage()]);
    // create coinbase commerce charge
    chargeCreate(hotelName, hotelPrice, selectedCurrency, dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hotelData]);

  return (
    <>
      <div className={classes.hotelMainContainer}>
        <div className={classes.hotelDetailsContainer}>
          <h2>{TEXT.HOTEL_DETAILS}</h2>
          <div className={classes.hotelInfoContainer}>
            {hotelInfoData?.map((item, index) => (
              <div key={index} className={classes.hotelInfo}>
                {item.icon}
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.hotelImageContainer}>
          {images ? (
            <ImageGallery items={images} showPlayButton={false} />
          ) : null}
        </div>
      </div>
      <div className={classes.roomDetailContainer}>
        <HotelRoom />
      </div>
    </>
  );
};

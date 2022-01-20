import React, { useState } from "react";
import { Box, Grid } from "@material-ui/core";
import { useStyles } from "./styles";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import clsx from "clsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { useHistory } from "react-router-dom";
import { updateSelectedHotel } from "../../../../Containers/Hotels/hotelsRedux";
import { useDispatch, useSelector } from "react-redux";
import { favoriteHotelHandler, favouriteAction } from "../../../../APIs/FavoriteHotel/FavoriteHotelService";

const HotelCard = ({ hoteldata, noOfGuest, isFavorite: isFav }) => {
  const history = useHistory();
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const dispatch = useDispatch();

  const checkMediaexits = (hoteldata) => {
    if ("media" in hoteldata) {
      return true;
    } else {
      return false;
    }
  };
  const checkParamexits = (param) => {
    if (param in hoteldata) {
      return true;
    } else {
      return false;
    }
  };
  const filterHotelamenties = (amenties) => {
    // only return 6 amenties
    let allamenties = "NA";
    if (checkParamexits("amenities") && amenties?.length > 0) {
      if (amenties?.length > 6) {
        let newarray = amenties.slice(0, 6);
        allamenties = newarray.join(" - ");
      } else {
        allamenties = amenties.join(" - ");
      }
    }
    // remove underscore & capitalize first letter
    const formattedAllamenties = allamenties
      .split("_")
      .join(" ")
      .split(" - ")
      .map((data) => data.charAt(0).toUpperCase() + data.slice(1).toLowerCase())
      .join(" - ");
    return formattedAllamenties;
  };

  const checkAvailablity = (hoteldata) => {
    dispatch(updateSelectedHotel(hoteldata));
    history.push("/hotel-page");
  };
  const parseDate = (str) => {
    var mdy = str.split("-");
    return new Date(mdy[0], mdy[1] - 1, mdy[2]);
  };
  const getNumberofnights = (checkin, checkout) => {
    return Math.round((checkout - checkin) / (1000 * 60 * 60 * 24));
  };

  const getPriceprenight = (checkin, checkout, totalprice) => {
    let totalnights = getNumberofnights(parseDate(checkin), parseDate(checkout));
    let pernightPrice = totalprice / totalnights;
    return pernightPrice.toFixed(2);
  };

  const [isFavorite, setIsFavorite] = useState(isFav);

  const userToken = useSelector((state) => state.authToken.authToken?.access_token);

  const handleAddFavoriteHotel = () => {
    favoriteHotelHandler(hoteldata?.hotelId, favouriteAction?.add, userToken).then((data) => {
      data?.message && setIsFavorite(true);
    });
  };

  const handleRemoveFavoriteHotel = () => {
    favoriteHotelHandler(hoteldata?.hotelId, favouriteAction?.remove, userToken).then((data) => {
      data?.message && setIsFavorite(false);
    });
  };

  const capitalizeHotelName = (hotelName) => {
    if (!hotelName) return;
    return `${hotelName.toString().charAt(0).toUpperCase()}${hotelName.toString().slice(1).toLowerCase()}`;
  };

  const fakeImages = [
    {
      uri: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    },
    {
      uri: "https://images.unsplash.com/photo-1520483601560-389dff434fdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      uri: "https://images.unsplash.com/photo-1535913989690-f90e1c2d4cfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    },
    {
      uri: "https://images.unsplash.com/photo-1504730655501-24c39ac53f0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      uri: "https://images.unsplash.com/photo-1504730655501-24c39ac53f0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      uri: "https://images.unsplash.com/photo-1504730655501-24c39ac53f0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ];

  const totalPrice = getPriceprenight(hoteldata.offers[0].checkInDate, hoteldata.offers[0].checkOutDate, hoteldata.offers[0].price.total);

  const formatPrice = (price) => {
    if (!price) return "";
    const splitPrice = price.split(".");
    if (splitPrice[1] === "00") return splitPrice[0];
    return price;
  };

  return (
    <>
      <Box className={classes.cardBox}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <div className={classes.imageDiv}>
              <div className={classes.imageSliderMaxWidth}>
                <Slider {...settings}>
                  {checkMediaexits(hoteldata) && hoteldata.media.length > 0
                    ? hoteldata.media.map((data, index) => (
                        <div key={index} className={classes.sliderImageStyle}>
                          <img className={classes.sliderImageStyle} src={data.uri} alt="n" />
                        </div>
                      ))
                    : fakeImages.map((data, index) => (
                        <div key={index} className={classes.sliderImageStyle}>
                          <img className={classes.sliderImageStyle} src={data.uri} alt="n" />
                        </div>
                      ))}
                </Slider>
              </div>
              <div className={classes.rating}>
                <p className={classes.ratingText}>{hoteldata?.rating || 0}</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} className={classes.flexCenter}>
            <div className={classes.contentDiv}>
              <div className={classes.flex}>
                <h2 className={classes.title}>{capitalizeHotelName(hoteldata.name)}</h2>
                <div className={clsx(classes.icon)}>
                  {isFavorite ? (
                    <FavoriteIcon onClick={handleRemoveFavoriteHotel} className={classes.favIconStyle} />
                  ) : (
                    <FavoriteBorderIcon onClick={handleAddFavoriteHotel} className={classes.favIconStyle} />
                  )}
                </div>
              </div>
              <p className={classes.hotelguests}>
                {hoteldata?.offers[0]?.guests?.adults ? hoteldata.offers[0].guests.adults + " Guests" : "0 Guests"}
                {hoteldata?.offers[0]?.room?.typeEstimated?.category
                  ? " - " + hoteldata.offers[0].room.typeEstimated.category.split("_").join(" ")
                  : "NA"}
              </p>
              <p className={classes.amenities}>{filterHotelamenties(hoteldata.amenities)}</p>
              <h4 className={classes.roomText}>
                {hoteldata.offers.length} <span>{hoteldata.offers.length > 1 ? "rooms" : "room"}</span> available
              </h4>
              <div className={classes.priceBox}>
                <div style={{ marginRight: "20px" }}>
                  <h3 className={classes.price}>
                    ${hoteldata.offers.length > 0 ? totalPrice : "NA"}
                    <span className={classes.priceSubText}>/night</span>
                  </h3>
                  <p className={classes.totalPrice}>
                    ${hoteldata.offers.length > 0 ? formatPrice(hoteldata.offers[0].price.total) : "NA"} total
                  </p>
                </div>
                <button className={classes.button} onClick={() => checkAvailablity(hoteldata)}>
                  Check Availability
                </button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HotelCard;

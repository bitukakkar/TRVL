import React, { useState } from "react";
import { Box, Grid, CircularProgress } from "@material-ui/core";
import { useStyles } from "./styles";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import clsx from "clsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import hotel_history from "./../../../../Assets/images/hotel_history.png";
import { favoriteHotelHandler } from "../../../../APIs/FavoriteHotel/FavoriteHotelService";
import { useSelector, useDispatch } from "react-redux";
import { getRooms } from "../../../../APIs/AmadeusService";
import moment from "moment";
import {
  updateCheckout,
  updateCheckin,
} from "../../../../Containers/Search/searchRedux";
import { getDateInFormat } from "../../../../Utils/dateTime";
import { showNotification } from "../../..";
import { useHistory } from "react-router-dom";
import { updateSelectedHotel } from "../../../../Containers/Hotels/hotelsRedux";

const HotelsHistoryCard = ({ keyId, hoteldata }) => {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const [loader, setLoader] = useState(false);
  const history = useHistory();
  const { noOfGuest, totalroom, checkIn, checkOut } = useSelector(
    (state) => state.search
  );
  let current_date = moment().format("D-M-YYYY");
  let new_date = moment(current_date, "D-M-YYYY");
  let next_date = new_date.add(1, "days").format("D-M-YYYY");
  const dispatch = useDispatch();
  const bookAgain = async (data) => {
    const roomsearch = {
      hotelId: data[2].id,
      checkInDate: getDateInFormat(checkIn ? checkIn : current_date),
      checkOutDate: getDateInFormat(checkOut ? checkOut : next_date),
      adults: noOfGuest ? noOfGuest : 1,
      roomQuantity: totalroom ? totalroom : 1,
    };
    if (!checkIn || !checkOut) {
      dispatch(updateCheckin(current_date));
      dispatch(updateCheckout(next_date));
    }
    setLoader(true);
    await getRooms(roomsearch)
      .then((res) => {
        if (res.data !== undefined) {
          dispatch(updateSelectedHotel(res.data.hotel));
          history.push("/hotel-page");
          setLoader(false);
        } else {
          showNotification(res.errors[0].title);
          setLoader(false);
        }
      })
      .catch((error) => {
        setLoader(false);
      });
  };
  const dateFormatter = (date) => {
    if (!date && date?.split("-").length !== 3) return;
    const formatDate = date?.split("-").join(", ");

    const fullDate = new Date(formatDate);
    const month = fullDate.toLocaleString("default", { month: "short" });
    // const day = fullDate.toLocaleString("default", { weekday: "long" });
    const dateNumber = String(fullDate.getDate()).padStart(2, "0");
    return `${month} ${dateNumber}`;
  };
  const parseDate = (str) => {
    var mdy = str.split("-");
    return new Date(mdy[0], mdy[1] - 1, mdy[2]);
  };
  const getNumberofnights = (checkin, checkout) => {
    return Math.round((checkout - checkin) / (1000 * 60 * 60 * 24));
  };

  const getPriceprenight = (checkin, checkout, totalprice) => {
    let totalnights = getNumberofnights(
      parseDate(checkin),
      parseDate(checkout)
    );
    let pernightPrice = totalprice / totalnights;
    return pernightPrice.toFixed(2);
  };

  const [isFavorite, setIsFavorite] = useState(false);
  const favouriteAction = {
    add: "add",
    remove: "remove",
  };

  const userToken = useSelector(
    (state) => state.authToken.authToken?.access_token
  );

  const handleAddFavoriteHotel = () => {
    favoriteHotelHandler(hoteldata[2].id, favouriteAction?.add, userToken).then(
      (data) => {
        data?.message && setIsFavorite(true);
      }
    );
  };

  const handleRemoveFavoriteHotel = () => {
    favoriteHotelHandler(
      hoteldata[2].id,
      favouriteAction?.remove,
      userToken
    ).then((data) => {
      data?.message && setIsFavorite(false);
    });
  };
  return (
    <>
      <Box className={classes.cardBox} key={keyId}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <div className={classes.imageDiv}>
              <div className={classes.imageSliderMaxWidth}>
                <Slider {...settings}>
                  <div className={classes.image}>
                    {" "}
                    <img
                      src={
                        hoteldata[2].images.length > 0
                          ? hoteldata[2].images[0]
                          : hotel_history
                      }
                      alt="n"
                      className={classes.sliderImageStyle}
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1520483601560-389dff434fdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      alt="n"
                      className={classes.sliderImageStyle}
                    />
                  </div>
                  <div className={classes.image}>
                    <img
                      src={hotel_history}
                      alt="n"
                      className={classes.sliderImageStyle}
                    />
                  </div>
                </Slider>
              </div>
              <div className={classes.rating}>
                <p className={classes.ratingText}>
                  {hoteldata[0].rating == null ? 0 : hoteldata[0].rating}
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} className={classes.flexCenter}>
            <div className={classes.contentDiv}>
              <div className={classes.flex}>
                <h2 className={classes.title}>{hoteldata[2].name}</h2>
                <div className={clsx(classes.icon)}>
                  {isFavorite ? (
                    <FavoriteIcon
                      onClick={handleRemoveFavoriteHotel}
                      className={classes.favIconStyle}
                    />
                  ) : (
                    <FavoriteBorderIcon
                      onClick={handleAddFavoriteHotel}
                      className={classes.favIconStyle}
                    />
                  )}
                </div>
              </div>
              <p className={classes.addressText}>
                {hoteldata[3].lines[0] +
                  " , " +
                  hoteldata[3].cityName +
                  " , " +
                  hoteldata[3].postal_code}
              </p>
              <h4 className={classes.roomText}>
                {dateFormatter(hoteldata[1].startDate)} -{" "}
                {dateFormatter(hoteldata[1].endDate)}
              </h4>
              <div className={classes.priceBox}>
                <div>
                  <h3 className={classes.price}>
                    $
                    {getPriceprenight(
                      hoteldata[1].startDate,
                      hoteldata[1].endDate,
                      hoteldata[1].total
                    )}
                    <span className={classes.priceSubText}>/night</span>
                  </h3>
                  <p className={classes.totalPrice}>
                    ${hoteldata[1].total} total
                  </p>
                </div>
                <button
                  className={classes.button}
                  onClick={() => bookAgain(hoteldata)}
                  disabled={loader}>
                  {loader ? (
                    <CircularProgress
                      data-testid="circular-progress"
                      className={classes.circularProgress}
                      size={20}
                    />
                  ) : (
                    "Book again"
                  )}
                </button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HotelsHistoryCard;

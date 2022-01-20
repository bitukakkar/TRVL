import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import clsx from "clsx";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Box } from "@material-ui/core";
import { getFavouriteHotels, getRooms } from "../../../APIs/AmadeusService";
import { CircularProgress } from "@material-ui/core";
import hotelimg1 from "../../../Assets/images/favhotel.png";
import agent from "../../../Assets/images/agent.png";
import { useSelector, useDispatch } from "react-redux";
import { getDateInFormat } from "../../../Utils/dateTime";
import { showNotification } from "../..";
import { useHistory } from "react-router-dom";
import { updateSelectedHotel } from "../../../Containers/Hotels/hotelsRedux";
import favicon from "../../../Assets/images/favicon.png";
import { favoriteHotelHandler } from "../../../APIs/FavoriteHotel/FavoriteHotelService";
import moment from "moment";
import useNavBg from "../../../Hooks/useNavBg";
import {
  updateCheckout,
  updateCheckin,
} from "../../../Containers/Search/searchRedux";
const SimilarHotelCard = ({ key, hoteldata, removeFavhotel }) => {
  const classes = useStyles();
  const [loader, setLoader] = useState(false);
  const [favloader, setFavloader] = useState(false);
  const history = useHistory();
  const { noOfGuest, totalroom, checkIn, checkOut } = useSelector(
    (state) => state.search
  );
  let current_date = moment().format("D-M-YYYY");
  let new_date = moment(current_date, "D-M-YYYY");
  let next_date = new_date.add(1, "days").format("D-M-YYYY");
  const dispatch = useDispatch();

  const viewHotel = async (data) => {
    const roomsearch = {
      hotelId: data?.id,
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
        console.log("error", error);
        setLoader(false);
      });
  };

  const removeFav = (hoteldata) => {
    setFavloader(true);
    removeFavhotel(hoteldata);
  };

  const [setIsNavBgShow] = useNavBg();

  // show nav backgroundColor
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setIsNavBgShow(), []);

  return (
    <div className={classes.hotelCard} key={key}>
      <div className={classes.hotelCardPadding}>
        <div className={classes.shsHotelCardImage}>
          {favloader ? (
            <CircularProgress
              data-testid="circular-progress"
              className={classes.favicon}
              size={20}
            />
          ) : (
            <img
              src={favicon}
              alt="Fav"
              title="Fav"
              className={classes.favicon}
              onClick={() => removeFav(hoteldata)}
            />
          )}

          <img
            src={hoteldata.images.length > 0 ? hoteldata.images[0] : hotelimg1}
            className={classes.favhotelimg}
            alt="hotel"
            title="hotel"
          />
        </div>
        <div className={classes.shsHotelCardBody}>
          <h3 className={classes.shsHotelCardName}>{hoteldata.name}</h3>
          <div>
            <p className={classes.shsHotelCardAmenities}>{hoteldata.phone}</p>
            <p
              className={clsx(
                classes.shsHotelCardAmenities,
                classes.borderLeft
              )}>
              {hoteldata.address.cityName}
            </p>

            <div className={classes.flexCenterSpaceBetween}>
              <h4 className={classes.shsHotelCardPrice}>{null}</h4>
              <button className={classes.shsHotelCardButton}>
                {loader ? (
                  <CircularProgress
                    data-testid="circular-progress"
                    className={classes.circularProgress}
                    size={20}
                  />
                ) : (
                  <ArrowForwardIcon
                    style={{ fontSize: "18px" }}
                    onClick={() => viewHotel(hoteldata)}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Favourites = () => {
  const classes = useStyles();
  const FAV_LIMIT = 8;
  const [loading, setLoading] = useState(false);
  const [favhotels, setFavhotels] = useState([]);
  const [activelimit, setActivelimit] = useState(FAV_LIMIT);
  const userToken = useSelector(
    (state) => state.authToken.authToken?.access_token
  );
  const [setIsNavBgShow] = useNavBg();

  // show nav backgroundColor
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setIsNavBgShow(), []);

  const getFavourites = async () => {
    setLoading(true);
    let payload = {
      userToken: userToken,
    };
    await getFavouriteHotels(payload)
      .then((res) => {
        if (res !== null || res !== undefined) {
          setFavhotels(res);
          setLoading(false);
        } else {
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log("serror", error);
        setLoading(false);
      });
  };
  useEffect(() => {
    getFavourites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showMore = () => {
    setActivelimit(activelimit + parseInt(FAV_LIMIT));
  };

  const removeFavhotel = (hoteldata) => {
    favoriteHotelHandler(hoteldata?.id, "remove", userToken).then((data) => {
      setTimeout(() => {
        data?.message && getFavourites();
      }, 500);
    });
  };
  return (
    <Box className={classes.boxWidth}>
      <div className={classes.boxPadding}>
        <section className={clsx(classes.flex)}>
          <div className={classes.imgCircle}>
            {" "}
            <img src={agent} title="Offer" alt="Offer" />
          </div>
          <div className={classes.marginLeft21}>
            <p className={classes.subTitle}>Your favourites!</p>
            <h3 className={classes.title}>Let's book one!</h3>
          </div>
        </section>
        <section className={classes.cards}>
          {!loading && favhotels.length > 0 ? (
            favhotels
              .slice(0, activelimit)
              .map((data, index) => (
                <SimilarHotelCard
                  key={index}
                  hoteldata={data}
                  removeFavhotel={removeFavhotel}
                />
              ))
          ) : (
            <div className={classes.nohtels}>
              {loading ? (
                <div>
                  {" "}
                  loading...please wait ... <CircularProgress />{" "}
                </div>
              ) : (
                "No fav hotels found.."
              )}
            </div>
          )}
        </section>
        <section className={classes.cards}>
          {!loading && favhotels.length > 0 && activelimit < favhotels.length && (
            <div onClick={() => showMore()} className={classes.showmore}>
              Show more
            </div>
          )}
        </section>
      </div>
    </Box>
  );
};

export default Favourites;

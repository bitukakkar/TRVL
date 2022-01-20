/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { useStyles } from "./styles";
import { Box, Grid } from "@material-ui/core";
import clsx from "clsx";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import "./style.css";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { showNotification } from "../..";
import { useHistory, useLocation } from "react-router-dom";
import { bookHotel, setHotelroom, confirmHotel, checkPriceBeforeBooking } from "../../../APIs/AmadeusService";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TEXT } from "../../../Constants/Strings";
import cardvalid from "card-validator";
import YourDetails from "./YourDetails";
import useNavBg from "./../../../Hooks/useNavBg";
import { setTokenReward, setFullTReward } from "../../../Components/ChatModule/tokenrewardRedux";
import GuestList from "./GuestList";
import ReedemNFTReward from "./ReedemNFTReward";
import GuestWishes from "./GuestWishes";
import PaymentDetails from "./PaymentDetails";
import _ from "lodash";
import BookingDetailsBox from "./BookingDetailsBox/index";
import axios from "axios";
import { setUserInfo } from "../../AppHeader/userinfoRedux";
import APIConfig from "../../../APIs/config";
import ChangePriceModel from "./ChangePriceModel";

const BookingPage = () => {
  const classes = useStyles();
  const methods = useForm();
  const { setError, handleSubmit } = methods;
  const { guests } = useSelector((state) => state.hotel.selectedroom);
  // eslint-disable-next-line no-unused-vars
  const [breakfastexits, setBreakfastexits] = useState(false);
  const [showfullreward, setFullReward] = useState(false);
  const dispatch = useDispatch();

  const [setIsNavBgShow] = useNavBg();

  // show nav backgroundColor
  useEffect(() => setIsNavBgShow(), []);

  const selectedhotel = useSelector((state) => state.hotel.selectedhotel);
  const selectedroom = useSelector((state) => state.hotel.selectedroom);
  const userTokendata = useSelector((state) => state.authToken.authToken);
  const tokenReward = useSelector((state) => state.tokenReward.tokenreward);
  const fulltokenreward = useSelector((state) => state.tokenReward.fulltokenreward);

  const checkAmenitiesexits = (selectedhotel) => {
    if ("amenities" in selectedhotel) {
      return true;
    } else {
      return false;
    }
  };
  const location = useLocation();

  const updateuserStore = async (token) => {
    try {
      const res = await axios.get(`${APIConfig.FASTAPI_URL}/v1/api/me`, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        dispatch(setUserInfo(res.data));
      }
    } catch (error) {
      console.error(error?.response);
    }
  };

  useEffect(() => {
    updateuserStore(userToken);
  }, []);

  useEffect(() => {
    if (location.state !== undefined) {
      // if token rewards coming from chat
      dispatch(setTokenReward(location.state.chattokenrewards));
      dispatch(setFullTReward(location.state.chattokenrewards));
    } else {
      // if token coming from offers
      let token_reward = parseFloat(selectedroom.token_reward);
      dispatch(setTokenReward(Math.floor(token_reward)));
      dispatch(setFullTReward(token_reward));
    }

    if (checkAmenitiesexits(selectedhotel)) {
      if (selectedhotel.amenities !== undefined && selectedhotel.amenities.indexOf("BREAKFAST_FULL") >= 0) {
        setBreakfastexits(true);
      }
    }
  }, []);

  const showFullReward = (type) => {
    setFullReward(type);
  };

  const [loading, setloading] = useState(false);
  const userToken = useSelector((state) => state.authToken.authToken?.access_token);

  const [openChangeModel, setOpenChangeModal] = useState(false);
  const [updatedprice, setUpdatedPrice] = useState(0);

  const handleModalClose = () => {
    setOpenChangeModal(false);
  };
  useEffect(() => {
    const checkPrice = async () => {
      await checkPriceBeforeBooking(selectedroom.id)
        .then((res) => {
          if (res !== null) {
            if (res.data.offers.length > 0) {
              let updated_price = res.data.offers[0].price.total;
              let active_price = selectedroom.price.total;
              if (updated_price !== active_price) {
                setUpdatedPrice(updated_price);
                setOpenChangeModal(true);
              } else {
                setUpdatedPrice(updated_price);
                setOpenChangeModal(false);
              }
            }
          } else {
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    };
    checkPrice();
  }, []);

  const checkMediaexits = (selectedhotel) => {
    if ("media" in selectedhotel) {
      return true;
    } else {
      return false;
    }
  };
  const history = useHistory();

  let available_cards = [
    { code: "CA", name: "MasterCard" },
    { code: "VI", name: "Visa" },
    { code: "AX", name: "American Express" },
    { code: "DC", name: "Diners Club" },
    { code: "AU", name: "Carte Aurore" },
    { code: "CG", name: "Cofinoga" },
    { code: "DS", name: "Discover" },
    { code: "GK", name: "Lufthansa GK Card" },
    { code: "JC", name: "Japanese Credit Bureau" },
    { code: "TC", name: "Torch Club" },
    { code: "TP", name: "Universal Air Travel Card" },
    { code: "BC", name: "Bank Card" },
    { code: "DL", name: "Delta" },
    { code: "MA", name: "Maestro" },
    { code: "VE", name: "Visa Electron" },
  ];

  const getvendorCode = (name) => {
    let obj = available_cards.find((o) => o.name.toLowerCase() === name.toLowerCase());
    return obj.code;
  };

  const guestListArray = [];

  for (let i = 0; i < guests.adults; i++) {
    guestListArray.push({
      name: methods.watch(`guest_name_${i}`),
      email: methods.watch(`guest_email_${i}`),
    });
  }

  const firstName = methods.watch("fname");
  const lastName = methods.watch("lname");
  const userEmail = methods.watch("email");

  let roomobj = {
    id: selectedroom.id,
    boardType: "None",
    type: selectedroom.room.type,
    category: selectedroom.room.typeEstimated.category,
    beds: selectedroom.room.typeEstimated.beds,
    bedType: selectedroom.room.typeEstimated.bedType,
    description: selectedroom.room.description.text,
    hotel_id: selectedhotel.hotelId,
  };

  const { name } = useSelector((state) => state.hotel.selectedhotel);

  const submitData = async (data) => {
    let guestArr;
    guestArr = guestListArray.map((guest, index) => {
      // eslint-disable-next-line array-callback-return
      if (guest.name === "" && guest.email === "") return;
      return {
        id: index + 1,
        name: {
          title: "MR",
          firstName: guest?.name?.trim()?.split(" ")[0] || "",
          lastName: guest?.name?.trim()?.split(" ")[1] || "",
        },
        contact: {
          phone: "+33679278416",
          email: guest?.email?.trim(),
        },
      };
    });

    const expiryDate = data.expDate.trim().split("/");
    const formattedExpDate = expiryDate[1].length === 2 ? `${"20" + expiryDate[1]}-${expiryDate[0]}` : `${expiryDate[1]}-${expiryDate[0]}`;
    let carddata = cardvalid.number(data.cardNumber.trim().split(" ").join(""));
    let validexpdate = cardvalid.expirationDate(data.expDate);
    let vendorcode = getvendorCode(carddata.card.type);
    let cardtype = carddata.card.type;
    let trimcardnumber = data.cardNumber.trim().split(" ").join("");

    if (!carddata.isValid || !validexpdate.isValid) {
      setError("cardNumber", {
        type: "manual",
        message: "Invalid card number",
      });

      if (!validexpdate.isValid) {
        setError("expDate", {
          type: "manual",
          message: "Invalid date",
        });
      }
      return;
    }

    if (carddata.isValid && validexpdate.isValid) {
      setloading(true);
      let payload = {
        data: {
          offerId: selectedroom.id,
          guests: guestArr,
          payments: [
            {
              method: "creditCard",
              card: {
                vendorCode: vendorcode,
                cardNumber: trimcardnumber,
                expiryDate: formattedExpDate,
              },
            },
          ],
        },
      };

      const roomobjrespone = await setHotelroom(roomobj);
      if (roomobjrespone !== null) {
        const bookRoomDetails = await bookHotel(payload, userToken);

        if (bookRoomDetails?.data) {
          let booking_detail = bookRoomDetails.data[0];

          let confirm_payload = {
            offer_id: selectedroom.id,
            type: "cc",
            payment_confirmation: {
              type: booking_detail.type,
              amadeus_booking_id: booking_detail.id,
              reference: booking_detail["associatedRecords"][0]["reference"],
              originSystemCode: booking_detail["associatedRecords"][0]["originSystemCode"],
              providerConfirmationId: booking_detail.providerConfirmationId,
            },

            guests: guestArr,
            details: {
              booking_id: 1,
              commission: "",
              currency: selectedroom.price.currency,
              base: selectedroom.price.base,
              total: selectedroom.price.total,
              startDate: selectedroom.checkInDate,
              endDate: selectedroom.checkOutDate,
              hotel_id: selectedhotel.hotelId,
              room_id: selectedroom.id,
            },
            customer_id: userTokendata.user_id,
            rewards: fulltokenreward,
          };

          await confirmHotel(confirm_payload, userToken)
            .then((res) => {
              let finalresponse = res;
              let payment_type = TEXT.CC;

              setloading(false);
              if (res !== null) {
                showNotification("Congrats! you have successfully booked a hotel.");
                setloading(false);
                history.push({
                  pathname: `/confirmation-page/${bookRoomDetails?.data[0]?.id}`,
                  state: {
                    bookRoomDetails,
                    guestArr,
                    guestwish: data.guest_wish || "",
                    cardtype,
                    trimcardnumber,
                    finalresponse,
                    payment_type,
                  },
                });
              } else {
                showNotification("Something! went wrong. please try again");
              }
            })
            .catch((error) => {
              console.log("error", error);
              setloading(false);
            });
        }
        if (bookRoomDetails?.errors) {
          const errorMeassage = bookRoomDetails?.errors[0]?.title;
          showNotification(errorMeassage.charAt(0).toUpperCase() + errorMeassage.slice(1).toLowerCase());
          setloading(false);
        }
      } else {
        showNotification("something! went wrong. please try again");
        setloading(false);
      }
    } else {
      showNotification("Enter valid card details!");
      setloading(false);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const formatRoomName = (name) => {
    if (!name) return null;
    const hotelName = name.split("_").join(" ");
    return hotelName.charAt(0) + hotelName.slice(1).toLocaleLowerCase();
  };

  const wordCapitalizeAddress = (address) => {
    if (!address) return "";
    return address
      .split(" ")
      .map((a) => _.capitalize(a))
      .join(" ");
  };

  return (
    <ScopedCssBaseline>
      <Box className={classes.bookingPage}>
        <div className={classes.boxWidth}>
          <Grid container>
            <Grid item xs={12} md={4}>
              <section className={classes.leftContainer}>
                <BookingDetailsBox />
                {tokenReward !== "" && (
                  <div className={clsx(classes.boxOffer)}>
                    <div className={clsx(classes.boxOfferPadding, classes.greenCheckedIcon)}>
                      <div className={clsx(classes.boxImgCircle, classes.bookicon4)}></div>
                      {showfullreward ? (
                        <h3 className={classes.boxOfferTitle} onClick={() => showFullReward(false)}>
                          {fulltokenreward !== "NaN" ? fulltokenreward : 0} TRVL tokens reward
                        </h3>
                      ) : (
                        <h3 className={classes.boxOfferTitle} onClick={() => showFullReward(true)}>
                          {tokenReward !== "NaN" ? tokenReward : 0} TRVL tokens reward
                        </h3>
                      )}
                    </div>
                  </div>
                )}
              </section>
            </Grid>
            <Grid item xs={12} md={8}>
              <section className={classes.rightContainer}>
                <h3 className={classes.title}>Hotel</h3>
                <div className={classes.hotelInfo}>
                  <div className={clsx(classes.hotelInfoPadding, classes.flex)}>
                    <div className={classes.imageDiv}>
                      <div className={`${classes.imageSliderMaxWidth} imgSliderInBookingPage`}>
                        <Slider {...settings}>
                          {checkMediaexits(selectedhotel) ? (
                            selectedhotel.media.map((media, idx) => (
                              <img className={classes.roomImage} src={media?.uri} alt="Room" title="Room" key={idx} />
                            ))
                          ) : (
                            <img
                              className={classes.roomImage}
                              src={"http://localhost:3000/static/media/hotel2.5d32e021.jpg"}
                              alt="Room"
                              title="Room"
                            />
                          )}
                        </Slider>
                      </div>
                    </div>
                    <div className={classes.hotelInfoContent}>
                      <h3 className={classes.hotelInfoContentTitle}>{formatRoomName(name)}</h3>
                      <p className={classes.hotelInfoContentDescription}>
                        {wordCapitalizeAddress(selectedhotel.address.lines[0]) +
                          " ," +
                          wordCapitalizeAddress(selectedhotel.address.cityName) +
                          " " +
                          wordCapitalizeAddress(selectedhotel.address.postalCode)}
                      </p>
                      <h4 className={classes.subTitle}>Grand master suit</h4>
                    </div>
                  </div>
                </div>
                <FormProvider {...methods}>
                  <form onSubmit={handleSubmit(submitData)}>
                    <YourDetails />
                    <GuestList />
                    <GuestWishes />
                    <ReedemNFTReward />

                    <PaymentDetails
                      loading={loading}
                      selectedroom={selectedroom}
                      selectedhotel={selectedhotel}
                      guestListArray={guestListArray}
                      firstname={firstName}
                      lastname={lastName}
                      email={userEmail}
                    />
                  </form>
                </FormProvider>
              </section>
            </Grid>
          </Grid>
        </div>
        <ChangePriceModel open={openChangeModel} handleClose={handleModalClose} updatedprice={updatedprice} />
      </Box>
    </ScopedCssBaseline>
  );
};

export default BookingPage;

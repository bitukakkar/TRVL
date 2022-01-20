import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import { useStyles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import useNavBg from "./../../../Hooks/useNavBg";
import { Box } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import { ERROR_MESSAGES } from "../../../Constants/Strings";
import { getRooms } from "../../../APIs/AmadeusService";
import { getAgentAddress } from "../../../APIs/AmadeusService";
import { favoriteHotelHandler, favouriteAction, getFavoriteHotelsIdList } from "../../../APIs/FavoriteHotel/FavoriteHotelService";
import { getDateInFormat } from "../../../Utils/dateTime";
import { showNotification } from "../..";
import { resetTokenReward } from "../../../Components/ChatModule/tokenrewardRedux";
import Gallery from "./Gallery";
import RoomsAvailable from "./RoomsAvailable";
import HotelDescription from "./HotelDescription";
import Bestoffer from "./../../LandingPage/bestoffer/index";

// const Addanother = () => {
//   const classes = useStyles();
//   const [guestarray, setGuestarray] = useState([]);

//   const addGuests = () => {
//     let new_guest = {
//       id: guestarray.length + 1,
//       name: {
//         title: "MR",
//         firstName: "",
//         lastName: "",
//       },
//     };
//     setGuestarray([...guestarray, new_guest]);
//   };

//   const updateGuestdata = (value, index, fieldname) => {
//     var key = index;

//     guestarray[key].name[fieldname] = value;
//     setGuestarray([...guestarray]);
//   };
//   const handleTitle = (value, index, fieldname) => {
//     var key = index;

//     guestarray[key].name[fieldname] = value;
//     setGuestarray([...guestarray]);
//   };
//   return (
//     <div className={classes.addguestbox}>
//       <div className={classes.addguestbox_container}>
//         {guestarray.length > 0 &&
//           guestarray.map((data, index) => (
//             <div key={index} className={classes.guestbox}>
//               {/* <div className={classes.guest_field1}>
//                 <select
//                   onChange={(e) => handleTitle(e.target.value, index, "title")}
//                   value={data.name.title}
//                   className={classes.guest_select}
//                 >
//                   <option value="MR">MR</option>
//                   <option value="MS">MS</option>
//                 </select>
//               </div> */}
//               <div className={classes.guest_field2}>
//                 <label htmlFor="firstName" className={classes.guest_label}>
//                   Guest First Name
//                 </label>
//                 <input
//                   type="text"
//                   className={classes.guest_input}
//                   value={data.name.firstName}
//                   placeholder="First Name"
//                   onChange={(e) => {
//                     updateGuestdata(e.target.value, index, "firstName");
//                   }}
//                 />
//               </div>
//               <div className={classes.guest_field2}>
//                 <label htmlFor="lastName" className={classes.guest_label}>
//                   Guest Last Name
//                 </label>
//                 <input
//                   type="text"
//                   className={classes.guest_input}
//                   value={data.name.lastName}
//                   placeholder="Last Name"
//                   onChange={(e) => {
//                     updateGuestdata(e.target.value, index, "lastName");
//                   }}
//                 />
//               </div>
//             </div>
//           ))}
//       </div>
//       <div className={classes.add_btn}>
//         <button className={classes.roomBoxButton} onClick={() => addGuests()}>
//           Add another guest
//         </button>
//       </div>
//     </div>
//   );
// };

const HotelPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [availalerooms, setAvailablerooms] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [availalemedias, setAvailablemedias] = useState([]);
  const [agentaddress, setAgentaddress] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const selectedhotel = useSelector((state) => state.hotel.selectedhotel);
  if (selectedhotel === "") {
    history.push("/");
  }
  const { noOfGuest, totalroom, checkIn, checkOut } = useSelector((state) => state.search);
  const roomsearch = {
    hotelId: selectedhotel?.hotelId,
    checkInDate: getDateInFormat(checkIn),
    checkOutDate: getDateInFormat(checkOut),
    adults: noOfGuest,
    roomQuantity: totalroom,
  };

  const [favHotelsIds, setFavHotelsIds] = useState([]);

  const userToken = useSelector((state) => state.authToken.authToken?.access_token);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    getFavoriteHotelsIdList(setFavHotelsIds, userToken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!!favHotelsIds && favHotelsIds.length) {
      setIsFavorite(favHotelsIds.includes(selectedhotel?.hotelId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favHotelsIds]);

  const searchrooms = async () => {
    if (!checkIn || !checkOut || !noOfGuest || !totalroom) {
      showNotification(ERROR_MESSAGES.ENTER_ALL_FIELDS);
    } else {
      setLoading(true);
      await getRooms(roomsearch)
        .then((res) => {
          if (res.data !== undefined) {
            setAvailablerooms(res.data.offers);
            setLoading(false);
          } else {
            showNotification(res.errors[0].title);
            setLoading(false);
          }
        })
        .catch((error) => {
          setLoading(false);
        });
    }
  };

  const getagentAddress = async () => {
    await getAgentAddress()
      .then((res) => {
        if (Array.isArray(res) && res.length > 0) {
          let total_address = res.length;
          let get_last_address = res[total_address - 1].id;
          setAgentaddress(get_last_address);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    searchrooms();
    dispatch(resetTokenReward());
    getagentAddress();
    if ("media" in selectedhotel) {
      setAvailablemedias(selectedhotel.media);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddFavoriteHotel = () => {
    favoriteHotelHandler(selectedhotel?.hotelId, favouriteAction?.add, userToken).then((data) => {
      data?.message && setIsFavorite(true);
    });
  };

  const handleRemoveFavoriteHotel = () => {
    favoriteHotelHandler(selectedhotel?.hotelId, favouriteAction?.remove, userToken).then((data) => {
      data?.message && setIsFavorite(false);
    });
  };

  const [setIsNavBgShow] = useNavBg();

  // show nav backgroundColor
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setIsNavBgShow(), []);

  const capitalizeHotelName = (hotelName) => {
    if (!hotelName) return;
    return `${hotelName.toString().charAt(0).toUpperCase()}${hotelName.toString().slice(1).toLowerCase()}`;
  };

  return (
    <ScopedCssBaseline>
      <Box className={classes.boxWidth}>
        <h1 className={classes.title}>{capitalizeHotelName(selectedhotel?.name)}</h1>
        <div className={classes.info}>
          <div className={classes.infoCircle}>
            <span>{selectedhotel?.rating}</span>
          </div>
          <div className={classes.infoCircle}>
            {isFavorite ? (
              <FavoriteIcon className={classes.favIconStyle} onClick={handleRemoveFavoriteHotel} />
            ) : (
              <FavoriteBorderIcon className={classes.favIconStyle} onClick={handleAddFavoriteHotel} />
            )}
          </div>
        </div>
        <Gallery />
        <HotelDescription />
        <RoomsAvailable
          rooms={availalerooms}
          loading={loading}
          selectedhotel={selectedhotel}
          searchrooms={searchrooms}
          agentaddress={agentaddress}
        />
        {/* <SimilarHotels /> */}
      </Box>
      <div className={classes.similar_hotels_container}>
        <div className={classes.borderTop}></div>
        <Bestoffer subTitle="Similar hotels" title="Those might interest you" />
      </div>
    </ScopedCssBaseline>
  );
};

export default HotelPage;

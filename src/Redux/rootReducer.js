import { combineReducers } from "redux";
import { loading } from "./Reducers/loading";
import hotel from "../Containers/Hotels/hotelsRedux";
import user from "./Reducers/user";
import hotelDetails from "../Containers/HotelDetails/hotelDetailsRedux";
import search from "../Containers/Search/searchRedux";
import agentDeploy from "../Containers/AgentDeploy/agentDeployRedux";
import reservation from "../Containers/Reservation/reservationRedux";
import roomTotalPrice from "../Components/Payment/PaymentRedux";
import walletInfo from "../Components/Wallet/WalletRedux";
import signUpInfo from "../Containers/SignIn/CreatePassword/signUpRedux";
import loginInfo from "../Containers/SignIn/Email/loginRedux";
import authToken from "./Reducers/authToken";
import agentRegisterDetails from "./../Components/Others/DigitalAgent/agentRedux";
import userInfo from "../Components/AppHeader/userinfoRedux";
import tokenReward from "../Components/ChatModule/tokenrewardRedux";
import headerBgInfo from "./../Components/AppHeader/appHeaderRedux";
import bookingPageInfo from "./../Components/HotelBooking/BookingPage/bookingRedux";
import tokenPackInfo from "../Components/Others/TokenCard/tokenCardRedux";
import searchInputAndFilter from "../Components/HotelBooking/HotelsList/SearchInputAndFilter/SearchInputAndFilterRedux";

const createRootReducer = () =>
  combineReducers({
    headerBgInfo,
    loading,
    hotel,
    user,
    hotelDetails,
    search,
    agentDeploy,
    reservation,
    roomTotalPrice,
    walletInfo,
    signUpInfo,
    loginInfo,
    authToken,
    agentRegisterDetails,
    bookingPageInfo,
    userInfo,
    tokenReward,
    tokenPackInfo,
    searchInputAndFilter,
  });

export default createRootReducer;

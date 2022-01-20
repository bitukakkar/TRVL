import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";

import {
  Search,
  Reservation,
  HotelDetails,
  Hotels,
  AgentDeploy,
  // Home,
  Landing,
  LandingBlue,
} from "../Containers";
import { AppHeader } from "../Components";
import { Token } from "../Containers/Token";
import HotelsList from "../Components/HotelBooking/HotelsList";
import HotelPage from "../Components/HotelBooking/HotelPage";
import BookingPage from "../Components/HotelBooking/BookingPage";
import ConfirmationPage from "../Components/HotelBooking/ConfirmationPage";
import SignIn from "../Containers/SignIn";
import ConnectWallet from "../Containers/SignIn/ConnectWallet";
import RecoverPassword from "../Containers/SignIn/Recover";
import CreatePassword from "../Containers/SignIn/CreatePassword";
import NewPassword from "../Containers/SignIn/NewPassword";
import Favourites from "./../Components/Others/Favourites/index";
import DigitalAgent from "../Components/Others/DigitalAgent";
import TokensPage from "./../Components/Others/TokensPage/index";
import Faq from "./../Components/Others/Faq/index";
import TokensPayment from "./../Components/Others/TokensPayment/index";
import Technology from "./../Components/Others/Technology/index";
import Partners from "./../Components/Others/Partners/index";
import Settings from "../Components/Settings";
import ChatModule from "../Components/ChatModule";
import NFTPage from "../Components/NFTPage";
import AppFooter from "../Components/AppFooter";
import NftMarketplace from "../Components/NftMarketplace";
import PrivacyPolicy from "./../Components/Others/PrivacyPolicy/index";
import TermService from "../Components/Others/TermService/index";
import PrivateRoute, { verifyToken } from "./PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { removeAuthToken } from "../Redux/Reducers/authToken";
import LandingPage from "../Components/LandingPage";

const Routes = (props) => (
  <div className="RootContainer">
    <AppHeader />
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/token-old" component={Token} />
      <PrivateRoute
        exact
        path="/reservation/:booking_id/"
        component={Reservation}></PrivateRoute>
      <Route exact path="/details" component={HotelDetails} />
      <Route exact path="/hotels" component={Hotels} />
      <PrivateRoute exact path="/agent">
        <AgentDeploy />
      </PrivateRoute>
      <Route exact path="/landing" component={Landing} />
      <Route exact path="/landing/blue" component={LandingBlue} />
      <Route exact path="/hotel-list">
        <HotelsList />
      </Route>
      <Route exact path="/hotel-page">
        <HotelPage />
      </Route>
      <PrivateRoute exact path="/booking-page">
        <BookingPage />
      </PrivateRoute>
      <PrivateRoute exact path="/confirmation-page/:booking_id">
        <ConfirmationPage />
      </PrivateRoute>
      <Route exact path="/login" component={SignIn} />
      <Route exact path="/register" component={CreatePassword} />
      <PrivateRoute exact path="/set-wallet">
        <ConnectWallet />
      </PrivateRoute>
      <PrivateRoute exact path="/reset-password">
        <NewPassword />
      </PrivateRoute>
      <Route exact path="/forget-password" component={RecoverPassword} />
      <PrivateRoute exact path="/favourites">
        <Favourites />
      </PrivateRoute>
      <PrivateRoute exact path="/digital-agent">
        <DigitalAgent />
      </PrivateRoute>
      <PrivateRoute exact path="/token">
        <TokensPage />
      </PrivateRoute>
      <PrivateRoute exact path="/tokens-payment">
        <TokensPayment />
      </PrivateRoute>
      <Route exact path="/technology" component={Technology} />
      <Route exact path="/partners" component={Partners} />
      <Route exact path="/faq" component={Faq} />

      <PrivateRoute exact path="/settings/:pathName">
        <Settings />
      </PrivateRoute>
      <PrivateRoute exact path="/chat/:booking_id">
        <ChatModule />
      </PrivateRoute>
      <PrivateRoute exact path="/nft">
        <NFTPage />
      </PrivateRoute>
      <PrivateRoute exact path="/nft-marketplace">
        <NftMarketplace />
      </PrivateRoute>
      <Route exact path="/privacy-policy" component={PrivacyPolicy} />
      <Route exact path="/term-service" component={TermService} />
      <Redirect to="/" />
    </Switch>
    <AppFooter />
  </div>
);

export const Router = () => {
  const [, setpathName] = useState(window.location.pathname);
  const history = useHistory();
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.authToken.authToken);

  useEffect(() => {
    return history.listen((location) => {
      setpathName(location.pathname);
    });
  }, [history]);

  useEffect(() => {
    if (userToken?.access_token) {
      verifyToken(userToken?.access_token).then((data) => {
        if (!data) {
          dispatch(removeAuthToken());
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/landing-temp" component={LandingPage} />
        <Route path="/" component={Routes} />
      </Switch>
    </>
  );
};

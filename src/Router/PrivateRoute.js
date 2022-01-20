import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import APIConfig from "./../APIs/config";
import { removeAuthToken } from "../Redux/Reducers/authToken";

export const verifyToken = async (token) => {
  try {
    const res = await axios.get(`${APIConfig.FASTAPI_URL}/v1/api/me`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (res?.data?.id) {
      return true;
    }
  } catch (error) {
    console.error(error?.response);
  }
};

const PrivateRoute = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const [isTokenValid, setIsTokenValid] = useState(true);
  const userToken = useSelector((state) => state.authToken.authToken);

  useEffect(() => {
    if (!!userToken?.access_token) {
      setIsTokenValid(true);
    } else {
      setIsTokenValid(false);
      dispatch(removeAuthToken());
    }

    verifyToken(userToken?.access_token).then((data) => {
      if (!data) {
        dispatch(removeAuthToken());
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return userToken && userToken?.access_token && isTokenValid ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;

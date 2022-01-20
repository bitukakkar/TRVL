import React, { useState } from "react";
import { Marker, OverlayView } from "@react-google-maps/api";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { updateHotel } from "../../Containers/Hotels/hotelsRedux";
import { HotelModal } from "../";

const MapMarker = ({ marker, clusterer, val, setShowModal }) => {
  const { address, latitude, longitude } = marker;
  const [showInfoWindow, setInfoWindow] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <>
      <Marker
        key={address}
        position={{
          lat: parseFloat(latitude),
          lng: parseFloat(longitude),
        }}
        clusterer={clusterer}
        onClick={() => {
          dispatch(updateHotel(val));
          if (val.agent_id !== "fake") {
            history.push("/details");
            setShowModal(true);
          }
        }}
        onMouseOver={() => setInfoWindow(true)}
        onMouseOut={() => setInfoWindow(false)}
      >
        {showInfoWindow && (
          <OverlayView
            position={{
              lat: parseFloat(latitude),
              lng: parseFloat(longitude),
            }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <HotelModal hotelData={val} />
          </OverlayView>
        )}
      </Marker>
    </>
  );
};

export { MapMarker };

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
} from "@material-ui/core";

import { HotelRoomRow } from "../";
import { useStyles } from "./styles";
import { TABLE_HEADINGS } from "../../Constants/General";

export const HotelRoom = () => {
  const classes = useStyles();
  const [rooms, setRooms] = useState([]);
  const hotelData = useSelector((state) => state.hotel.hotel);
  const { checkIn, checkOut } = useSelector((state) => state.search);
  const features = useSelector((state) => state.hotel.filters);

  useEffect(() => {
    //Filter rooms based on features
    if (features.length > 0) {
      const filterdRoom = [hotelData].filter((roomFeature) => {
        let isPresent = false;
        features.forEach((feature) => {
          if (roomFeature?.amenities.includes(feature)) {
            isPresent = true;
          }
        });
        return isPresent;
      });
      setRooms(filterdRoom);
    } else {
      setRooms([hotelData]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hotelData.hotelId, checkIn, checkOut, features, hotelData.amenities]);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow className={classes.tableHead}>
            {TABLE_HEADINGS?.length > 0 &&
              TABLE_HEADINGS?.map((item, index) => (
                <TableCell
                  key={index}
                  className={classes.tableHeadText}
                  align="center"
                  data-testid="table-cell">
                  {item}
                </TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rooms?.length > 0 &&
            rooms?.map((row, index) => <HotelRoomRow key={index} row={row} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

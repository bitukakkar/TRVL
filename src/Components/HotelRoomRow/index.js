import React, { useState } from "react";
import { useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Button, Collapse, TableRow, TableCell } from "@material-ui/core";
import { useStyles } from "./styles";
import { formatter } from "../../Utils";
import { TEXT } from "../../Constants/Strings";
import PaymentModal from "../Payment/PaymentModal";
import {
  updateHotelOfferId,
  updateRoomTotalPrice,
} from "../Payment/PaymentRedux";
import EtherWallet from "../Wallet/index";
import CoinbasePayButton from "./../Wallet/CoinbaseCommerce";

export const HotelRoomRow = ({ row }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openModal, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const priceRoom =
    row?.offers &&
    row?.offers.length > 0 &&
    row?.offers.map((data) => data?.price?.total);
  const totalPrice = formatter.format(priceRoom);

  return (
    <>
      <TableRow data-testid="room-item">
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}>
            {open ? (
              <KeyboardArrowUpIcon data-testid="keyboard-arrow-up-icon" />
            ) : (
              <KeyboardArrowDownIcon data-testid="keyboard-arrow-down-icon" />
            )}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          {"123"}
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          {row?.name}
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          {row?.offers &&
            row?.offers.length > 0 &&
            row?.offers.map((data) => data?.guests?.adults)}
        </TableCell>
        <TableCell align="center">{totalPrice}</TableCell>
        <TableCell></TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          className={classes.collapseContainer}
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div className={classes.paymentOptionContainer}>
              <h3 className={classes.paymentOptionHeading}>Description:</h3>
              <ul>
                {row?.offers &&
                  row?.offers.length > 0 &&
                  row?.offers.map((data) => {
                    const roomDescription =
                      data?.room?.description?.text?.split("\n");
                    return roomDescription.map((data, idx) => (
                      <li key={idx}>{data}</li>
                    ));
                  })}
              </ul>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Button
                  className={classes.button}
                  onClick={() => {
                    dispatch(updateRoomTotalPrice(+priceRoom));
                    dispatch(updateHotelOfferId(row?.offers[0]?.id));
                    handleOpen();
                  }}
                  variant="contained"
                  data-testid="button-submit">
                  {TEXT.CONTINUE}
                </Button>
                <EtherWallet hotelPrice={+priceRoom} row={row} />
                <div className={classes.cryptoBtn}>
                  <CoinbasePayButton row={row} />
                </div>
              </div>
            </div>
          </Collapse>
        </TableCell>
      </TableRow>
      <PaymentModal handleClose={handleClose} open={openModal} row={row} />
    </>
  );
};

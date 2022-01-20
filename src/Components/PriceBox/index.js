import React from "react";
import EuroIcon from "@material-ui/icons/Euro";
import { Button, CircularProgress } from "@material-ui/core";

import { useStyles } from "./styles";
import { TEXT } from "../../Constants/Strings";
import { formatFloatVal } from "../../Utils/hotel";

export const PriceBox = ({ roomData, calculatedPrice, loading, handleSubmit }) => {
  const classes = useStyles();
  return (
    <div className={classes.roomPriceContainer}>
      <div className={classes.roomPrice}>
        <EuroIcon className={classes.detailIcon} />
        {`${formatFloatVal(roomData?.bundle?.baserate)}`}/{TEXT.NIGHT}
      </div>
      <hr />
      <div className={classes.priceItem}>
        <div>
          <EuroIcon className={classes.detailIcon} />{" "}
          {`${formatFloatVal(roomData?.bundle?.baserate)}`} X {calculatedPrice?.nightCount}{" "}
          {TEXT.NIGHTS}
        </div>
        <div>{formatFloatVal(calculatedPrice?.amountWithoutTax)}</div>
      </div>
      <div className={classes.priceItem}>
        <div>{TEXT.TAX}</div>
        <div>{formatFloatVal(roomData?.bundle?.tax)}</div>
      </div>
      <div className={classes.priceItem}>
        <div>{TEXT.OTHER_FEES}</div>
        <div>{formatFloatVal(roomData?.bundle?.other_fees)}</div>
      </div>
      <hr />
      <div className={classes.priceItem}>
        <div>{TEXT.TOTAL}</div>
        <div>
          <EuroIcon className={classes.detailIcon} />
          {formatFloatVal(calculatedPrice?.totalAmount)}
        </div>
      </div>
      <div className={classes.priceButtonContainer}>
        <Button
          className={!loading ? classes.priceButton : classes.disablePriceButton}
          onClick={handleSubmit}
          disabled={loading}
          data-testid="priceBox-submit"
        >
          {loading && <CircularProgress className={classes.circularProgress} size={20} data-testid="loading" />}
          {TEXT.CONTINUE}
        </Button>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { useStyles } from "./styles";
import { ErrorMessage } from "@hookform/error-message";
import { Controller, useFormContext } from "react-hook-form";
import CryptoPayment from "../../Payments/CryptoPayment";
import InputMask from "react-input-mask";
import { CircularProgress, Grid } from "@material-ui/core";
import TrvlTokenPaymentModal from "../TrvlTokenPaymentModal";
import clsx from "clsx";

const PaymentDetails = ({
  loading,
  selectedroom,
  selectedhotel,
  guestListArray,
  firstname,
  lastname,
  email,
}) => {
  const classes = useStyles();
  const { register, control, errors: formError } = useFormContext();
  const [isActiveCredit, setIsActiveCredit] = useState(true);
  const [isActiveTrvl, setIsActiveTrvl] = useState(false);
  const [isActiveCrypto, setIsActiveCrypto] = useState(false);

  const setMethodtype = () => {
    setIsActiveTrvl(false);
    setIsActiveCrypto(true);
    setIsActiveCredit(false);
  };
  const creditBtnClass =
    isActiveCredit && !isActiveTrvl && !isActiveCrypto && classes.orangeBg;
  const defaultCreditBtnClass =
    !isActiveCrypto && !isActiveCredit && !isActiveTrvl && classes.orangeBg;

  return (
    <section className={classes.paymentSection}>
      <h3 className={classes.title}>Payment details</h3>
      <div className={classes.paymentForms}>
        <h4 className={classes.titleLabel}>How would you like to pay?</h4>
        <div className={classes.paymentButtonContainer}>
          <button
            onClick={() => {
              setIsActiveTrvl(false);
              setIsActiveCrypto(false);
              setIsActiveCredit(true);
            }}
            type="button"
            className={clsx(
              classes.paymentButton,
              classes.orangeBorder,
              creditBtnClass,
              defaultCreditBtnClass
            )}>
            Credit Card
          </button>

          <CryptoPayment
            selectedroom={selectedroom}
            selectedhotel={selectedhotel}
            guestListArray={guestListArray}
            setMethodtype={setMethodtype}
            firstname={firstname}
            lastname={lastname}
            email={email}
            isActiveCrypto={isActiveCrypto}
          />
        </div>

        <div className={classes.formsPadding}>
          {isActiveCredit && (
            <Grid container spacing={0}>
              <Grid item xs={12} className={classes.marginTop30}>
                <label htmlFor="cardHolderName" className={classes.label}>
                  Credit card name holder
                </label>
                <input
                  type="text"
                  id="cardHolderName"
                  className={clsx(classes.input, classes.fullWidth)}
                  placeholder="Name"
                  {...register("holderName", {
                    required: "Holder name is required.",
                  })}
                />
                <ErrorMessage
                  errors={formError}
                  name="holderName"
                  render={({ message }) => (
                    <span className={classes.form_error_msg}>{message}</span>
                  )}
                />
              </Grid>
              <Grid item xs={12} className={classes.marginTop30}>
                <label htmlFor="cardNumber" className={classes.label}>
                  Credit card number
                </label>
                <Controller
                  render={({ field }) => (
                    <InputMask
                      mask="9999 9999 9999 9999"
                      disabled={false}
                      maskChar=" "
                      onChange={(e) => {
                        field.onChange(e);
                      }}>
                      {() => (
                        <input
                          type="text"
                          id="cardNumber"
                          className={clsx(classes.input, classes.fullWidth)}
                          placeholder="Number"
                        />
                      )}
                    </InputMask>
                  )}
                  control={control}
                  name="cardNumber"
                  rules={{
                    required: "Card number is required",
                  }}
                />
                <ErrorMessage
                  errors={formError}
                  name="cardNumber"
                  render={({ message }) => (
                    <span className={classes.form_error_msg}>{message}</span>
                  )}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className={clsx(
                  classes.marginTop30,
                  classes.exp_input_div_padding
                )}>
                <label htmlFor="expDate" className={classes.label}>
                  Expiration date
                </label>
                <Controller
                  render={({ field }) => (
                    <InputMask
                      mask="99/9999"
                      disabled={false}
                      maskChar=" "
                      onChange={(e) => {
                        field.onChange(e);
                      }}>
                      {() => (
                        <input
                          type="text"
                          id="expDate"
                          className={clsx(classes.input)}
                          placeholder="e.g 12/2025"
                        />
                      )}
                    </InputMask>
                  )}
                  rules={{
                    required: "Exp date is required.",
                  }}
                  control={control}
                  name="expDate"
                />
                <ErrorMessage
                  errors={formError}
                  name="expDate"
                  render={({ message }) => (
                    <span className={classes.form_error_msg}>{message}</span>
                  )}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className={clsx(
                  classes.marginTop30,
                  classes.sec_input_div_padding
                )}>
                <label htmlFor="securityCode" className={classes.label}>
                  Security code
                </label>
                <Controller
                  render={({ field }) => (
                    <InputMask
                      mask="9999"
                      disabled={false}
                      maskChar=" "
                      onChange={(e) => {
                        field.onChange(e);
                      }}>
                      {() => (
                        <input
                          type="text"
                          id="securityCode"
                          className={clsx(classes.input)}
                          placeholder="Code"
                        />
                      )}
                    </InputMask>
                  )}
                  rules={{ required: "Security code is required." }}
                  control={control}
                  name="securityCode"
                />
                <ErrorMessage
                  errors={formError}
                  name="securityCode"
                  render={({ message }) => (
                    <span className={classes.form_error_msg}>{message}</span>
                  )}
                />
              </Grid>
              {/* </div> */}
            </Grid>
          )}
        </div>
      </div>
      <div className={classes.confirmBookingBtnDiv}>
        {isActiveCredit && (
          <button
            className={classes.confirmBookingBtn}
            type="submit"
            disabled={loading}>
            {loading ? (
              <CircularProgress
                data-testid="circular-progress"
                className={classes.circularProgress}
                size={20}
              />
            ) : (
              "Confirm booking"
            )}
          </button>
        )}
      </div>
      <TrvlTokenPaymentModal
        open={isActiveTrvl}
        handleClose={() => setIsActiveTrvl(false)}
      />
    </section>
  );
};

export default PaymentDetails;

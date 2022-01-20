import React, { useState } from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import {
  CircularProgress,
  FormControl,
  InputLabel,
  TextField,
  Select,
  Typography,
  FormHelperText,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { post } from "../../APIs/helpers";
import APIConfig from "../../APIs/config";
import { useStyles } from "./style";
import { useForm, Controller } from "react-hook-form";
import InputMask from "react-input-mask";
import { vestResolver } from "@hookform/resolvers/vest";
import validationSuite from "./ValidationSuite";
import { showNotification } from "./../ShowNotification/index";
import { UI_NOTIFICATIONS_TYPE } from "./../../Types/Enums";
import { useHistory } from "react-router-dom";

const PaymentForm = ({ row }) => {
  const paymentPrice = useSelector((state) => state.roomTotalPrice.payPrice);
  const selectedCurrency = useSelector((state) => state.search.currency);
  const history = useHistory();
  const hotelOfferId = useSelector(
    (state) => state.roomTotalPrice.hotelOfferId
  );
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: vestResolver(validationSuite),
  });
  const onSubmit = async (data) => {
    const {
      title,
      firstName,
      lastName,
      email,
      phone,
      address,
      vendorCode,
      cardNumber,
      expDate,
    } = data;
    setLoading(true);
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !address ||
      !vendorCode ||
      !cardNumber ||
      !expDate
    )
      return;
    const expiryDate = expDate.trim().split("/");

    const formatedExpDate =
      expiryDate[1].length === 2
        ? `${"20" + expiryDate[1]}-${expiryDate[0]}`
        : `${expiryDate[1]}-${expiryDate[0]}`;

    const bookPostBody = {
      data: {
        offerId: hotelOfferId,
        guests: [
          {
            name: {
              title: title || "Mr",
              firstName: firstName.trim(),
              lastName: lastName.trim(),
            },
            contact: {
              phone: "+" + phone,
              email: email.trim(),
            },
          },
        ],
        payments: [
          {
            method: "creditCard",
            card: {
              vendorCode,
              cardNumber: cardNumber.trim().split(" ").join(""),
              expiryDate: formatedExpDate,
            },
          },
        ],
      },
    };
    const bookRoomDetails = await post(
      `${APIConfig?.AMADEDUS_BASE_URL}/book`,
      bookPostBody
    );
    if (bookRoomDetails?.data) {
      showNotification("Booking Success", UI_NOTIFICATIONS_TYPE.success);
      setLoading(false);
      history.push({
        pathname: `/reservation/${bookRoomDetails?.data[0]?.id}`,
        state: { row },
      });
    }
    if (bookRoomDetails?.errors) {
      const errorMeassage = bookRoomDetails?.errors[0]?.title;
      showNotification(
        errorMeassage.charAt(0).toUpperCase() +
          errorMeassage.slice(1).toLowerCase()
      );
      setLoading(false);
    }
  };

  const showError = (inputName) =>
    errors?.[inputName] && errors?.[inputName]?.message;
  const currencySymbol = (currName) => {
    switch (currName) {
      case "USD":
        return "$";
      case "EUR":
        return "€";
      case "GBP":
        return "£";
      default:
        return "$";
    }
  };

  return (
    <>
      <Card className={classes.root}>
        <CardContent className={classes.cardContentPadding}>
          <Typography
            className={classes.cardHeader}
            component="h5"
            variant="h5">
            Book a hotel
          </Typography>
          <form className="From" onSubmit={handleSubmit(onSubmit)}>
            <div style={{ display: "flex" }}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-title">Title</InputLabel>
                <Select
                  native
                  label="Title"
                  inputProps={{
                    name: "title",
                    id: "outlined-title",
                  }}
                  {...register("title", { required: true })}>
                  <option value={"Mr"}>Mr</option>
                  <option value={"Mrs"}>Mrs</option>
                </Select>
                <FormHelperText>{showError("title")}</FormHelperText>
              </FormControl>
              <TextField
                label="First Name"
                className={clsx(
                  classes.margin,
                  classes.textField,
                  classes.space
                )}
                {...register("firstName", { required: true })}
                variant="outlined"
                helperText={showError("firstName")}
              />
              <TextField
                label="Last Name"
                className={clsx(
                  classes.margin,
                  classes.textField,
                  classes.space
                )}
                {...register("lastName", { required: true })}
                variant="outlined"
                helperText={showError("lastName")}
              />
            </div>
            <div className={classes.flex}>
              <TextField
                label="Email"
                type="email"
                className={clsx(
                  classes.margin,
                  classes.textField,
                  classes.space
                )}
                {...register("email", { required: true })}
                variant="outlined"
                helperText={showError("email")}
              />
              <TextField
                label="Phone"
                className={clsx(
                  classes.margin,
                  classes.textField,
                  classes.space
                )}
                {...register("phone", { required: true })}
                variant="outlined"
                helperText={showError("phone")}
              />
              <TextField
                label="Address"
                className={clsx(
                  classes.margin,
                  classes.textField,
                  classes.space
                )}
                {...register("address", { required: true })}
                variant="outlined"
                helperText={showError("address")}
              />
            </div>
            <div style={{ display: "flex" }}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-vendorName">
                  Vendor Name
                </InputLabel>
                <Select
                  native
                  label="Vendor Name"
                  {...register("vendorCode", { required: true })}
                  inputProps={{
                    name: "vendorCode",
                    id: "outlined-vendorName",
                  }}>
                  <option aria-label="None" value="" />
                  <option value={"CA"}>MasterCard</option>
                  <option value={"VI"}>Visa</option>
                  <option value={"AX"}>American Express</option>
                  <option value={"DC"}>Diners Club</option>
                  <option value={"AU"}>Carte Aurore</option>
                  <option value={"CG"}>Cofinoga</option>
                  <option value={"DS"}>Discover</option>
                  <option value={"GK"}>Lufthansa GK Card</option>
                  <option value={"JC"}>Japanese Credit Bureau</option>
                  <option value={"TC"}>Torch Club</option>
                  <option value={"TP"}>Universal Air Travel Card</option>
                  <option value={"BC"}>Bank Card</option>
                  <option value={"DL"}>Delta</option>
                  <option value={"MA"}>Maestro</option>
                  <option value={"VE"}>Visa Electron</option>
                </Select>
                <FormHelperText>{showError("vendorCode")}</FormHelperText>
              </FormControl>

              <Controller
                render={({ field }) => (
                  <InputMask
                    mask="9999 9999 9999 9999"
                    disabled={false}
                    maskChar=" "
                    {...field}>
                    {() => (
                      <TextField
                        label="Card Number"
                        className={clsx(
                          classes.margin,
                          classes.textField,
                          classes.space
                        )}
                        variant="outlined"
                        helperText={showError("cardNumber")}
                      />
                    )}
                  </InputMask>
                )}
                thousandSeparator
                name="cardNumber"
                className="input"
                control={control}
              />

              <Controller
                render={({ field }) => (
                  <InputMask
                    mask="99/9999"
                    disabled={false}
                    maskChar=" "
                    {...field}>
                    {() => (
                      <TextField
                        label="Expiry Date"
                        className={clsx(
                          classes.margin,
                          classes.textFields,
                          classes.formControl,
                          classes.space
                        )}
                        variant="outlined"
                        helperText={showError("expDate")}
                      />
                    )}
                  </InputMask>
                )}
                thousandSeparator
                name="expDate"
                className="input"
                control={control}
              />
            </div>
            <div style={{ marginTop: "0" }} className={classes.space}>
              <button
                type="submit"
                className={
                  (!loading && clsx(classes.margin, classes.submitBTN)) ||
                  clsx(classes.disabledBTN)
                }
                disabled={loading}>
                {loading && (
                  <CircularProgress
                    className={classes.circularProgress}
                    size={20}
                  />
                )}
                Pay {`${currencySymbol(selectedCurrency)}${paymentPrice}`}
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default PaymentForm;

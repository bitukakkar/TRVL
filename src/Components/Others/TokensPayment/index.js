import React, { useState } from "react";
import { useStyles } from "./styles";
import { Box, CircularProgress } from "@material-ui/core";
import clsx from "clsx";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import PurchaseSuccessModal from "./TokenPurchaseSuccessModal";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTokenprice } from "../../../APIs/AmadeusService";
import { showNotification } from "./../../ShowNotification/index";
import { UI_NOTIFICATIONS_TYPE } from "../../../Types/Enums";
import { of } from "await-of";
import useWeb3 from "../../Wallet/useWeb3";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { IMaskInput } from "react-imask";

const TokensPayment = () => {
  const classes = useStyles();
  const history = useHistory();
  const web3 = useWeb3();
  const isSmallScreen = useMediaQuery("(max-width:580px)");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [creditClass, setCreditClass] = useState(true);
  const [cryptoClass, setcryptoClass] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [transactionHash, setTransactionHash] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isCyptoPay, setIsCryptoPay] = useState(false);
  const creditBtnHandler = () => {
    setCreditClass(true);
    setcryptoClass(false);
    setIsCryptoPay(false);
  };
  const cryptoBtnHandler = () => {
    setCreditClass(false);
    setcryptoClass(true);
    setIsCryptoPay(true);
    reset();
  };
  const [openPurchaseSuccessModal, setOpenPurchaseSuccessModal] =
    useState(false);

  const handleModalOpen = () => {
    setOpenPurchaseSuccessModal(true);
  };

  const handleModalClose = () => {
    setOpenPurchaseSuccessModal(false);
  };

  const tokenPackInfo = useSelector((state) => state.tokenPackInfo?.pack);

  if (!tokenPackInfo) {
    history.push("/");
    return null;
  }

  const connectWallet = async () => {
    if (window.ethereum) {
      //check if Metamask is installed
      try {
        const address = await window.ethereum.enable(); //connect Metamask
        return address;
      } catch (error) {
        console.log(error);
      }
    } else {
      return {
        connectedStatus: false,
        status:
          "🦊 You must install Metamask into your browser: https://metamask.io/download.html",
      };
    }
  };

  const getMoneyToETH = async (total_price, currency = "USD") => {
    try {
      let payload = {
        token: "ETH",
        currency: currency,
      };
      let res = await getTokenprice(payload);
      let token_price = res.token_price;
      let token_to_send = parseFloat(total_price) / token_price;
      return token_to_send.toFixed(8);
    } catch (error) {
      console.log(error);
    }
  };

  const sendEthers = async (walletNumber) => {
    try {
      setLoading(true);

      const eth = await getMoneyToETH(tokenPackInfo?.price);

      if (!walletNumber || !eth) {
        showNotification("Something Went Wrong. Please retry!");
        setLoading(false);
        return;
      }

      const weiAmount = web3.utils.toWei(`${eth}`, "ether"); // convert ethers to wei
      const [data, error] = await of(
        web3.eth.sendTransaction({
          from: `${walletNumber}`,
          to: `${process.env.REACT_APP_ETHER_WALLET}`,
          value: weiAmount,
        })
      );

      if (data) {
        setLoading(false);
        handleModalOpen();
        return data;
      } else {
        showNotification(
          "Could not complete payment. Please retry!",
          UI_NOTIFICATIONS_TYPE.error
        );
        setLoading(false);
        console.error(error);
      }
    } catch (error) {
      showNotification(
        "Something Went Wrong. Please retry!",
        UI_NOTIFICATIONS_TYPE.error
      );
      setLoading(false);
    }
  };

  const handleMetaMaskPayment = async () => {
    try {
      const address = await connectWallet();
      const response = await sendEthers(address[0]);
      setTransactionHash(response?.transactionHash);
    } catch (error) {
      showNotification("Something Went Wrong. Please retry!");
      setLoading(false);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    if (isCyptoPay) {
      handleMetaMaskPayment();
    }
  };

  return (
    <ScopedCssBaseline>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className={clsx(classes.boxWidth)}>
          <section className={classes.leftContainer}>
            <h3 className={classes.title}>Payment details</h3>
            <div className={classes.formSection}>
              <div className={classes.formSectionPadding}>
                <h4 className={classes.formTitle}>
                  How would you like to pay?
                </h4>
                <div className={clsx(classes.flex, classes.mt30)}>
                  <button
                    type="button"
                    className={clsx(
                      classes.button,
                      creditClass && classes.blueBg
                    )}
                    onClick={creditBtnHandler}>
                    Credit Card
                  </button>
                  <button
                    type="button"
                    className={clsx(
                      classes.button,
                      classes.ml10,
                      cryptoClass && classes.blueBg
                    )}
                    onClick={cryptoBtnHandler}>
                    Crypto Currency
                  </button>
                </div>

                {!isCyptoPay ? (
                  <>
                    <label htmlFor="holderName" className={classes.label}>
                      Credit card name holder
                    </label>
                    <input
                      type="text"
                      id="holderName"
                      placeholder="Name"
                      className={clsx(classes.input, classes.inputFullWidth)}
                      {...register("holderName", {
                        required: !isCyptoPay ? "Name is required" : false,
                      })}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="holderName"
                      render={({ message }) => (
                        <span
                          style={{
                            color: "red",
                            marginLeft: "4px",
                            marginTop: "5px",
                            display: "inline-block",
                          }}>
                          {message}
                        </span>
                      )}
                    />
                    <label htmlFor="cardNumber" className={classes.label}>
                      Credit card number
                    </label>
                    <IMaskInput
                      mask="0000 0000 0000 0000"
                      disabled={false}
                      type="text"
                      id="cardNumber"
                      placeholder="Number"
                      className={clsx(classes.input, classes.inputFullWidth)}
                      {...register("cardNumber", {
                        required: !isCyptoPay
                          ? "Credit card number is required"
                          : false,
                      })}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="cardNumber"
                      render={({ message }) => (
                        <span
                          style={{
                            color: "red",
                            marginLeft: "4px",
                            marginTop: "5px",
                            display: "inline-block",
                          }}>
                          {message}
                        </span>
                      )}
                    />
                    <div
                      className={clsx(classes.flexSpaceBetween, classes.mt3)}>
                      <div>
                        <label htmlFor="expDate" className={classes.label}>
                          Expiration date
                        </label>
                        <IMaskInput
                          mask="00/0000"
                          disabled={false}
                          {...register("expDate", {
                            required: !isCyptoPay
                              ? "Expiration date is required"
                              : false,
                          })}
                          type="text"
                          id="expDate"
                          placeholder="e.g 12/2025"
                          className={clsx(classes.input)}
                        />
                        <ErrorMessage
                          errors={errors}
                          name="expDate"
                          render={({ message }) => (
                            <span
                              style={{
                                color: "red",
                                marginLeft: "4px",
                                marginTop: "5px",
                                display: "inline-block",
                              }}>
                              {message}
                            </span>
                          )}
                        />
                      </div>
                      <div>
                        <label htmlFor="secCode" className={classes.label}>
                          Security code
                        </label>
                        <IMaskInput
                          mask="0000"
                          {...register("securityCode", {
                            required: !isCyptoPay
                              ? "Security code is required"
                              : false,
                          })}
                          type="text"
                          id="secCode"
                          placeholder="Code"
                          disabled={false}
                          className={clsx(classes.input)}
                        />
                        <ErrorMessage
                          errors={errors}
                          name="securityCode"
                          render={({ message }) => (
                            <span
                              style={{
                                color: "red",
                                marginLeft: "4px",
                                marginTop: "5px",
                                display: "inline-block",
                              }}>
                              {message}
                            </span>
                          )}
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className={clsx(classes.submitBtn, classes.submitBtnTwo)}
                      onClick={handleModalOpen}>
                      {loading ? (
                        <CircularProgress size={20} className={classes.white} />
                      ) : (
                        "Confirm purchase"
                      )}
                    </button>
                  </>
                ) : (
                  <div style={{ width: "100%" }}></div>
                )}
              </div>
            </div>

            <PurchaseSuccessModal
              open={openPurchaseSuccessModal}
              handleClose={handleModalClose}
              token={tokenPackInfo.token}
            />
          </section>
          <section className={classes.rightContainer}>
            {!isSmallScreen ? (
              <div>
                <h3 className={classes.title}>Product</h3>
                <div className={classes.tokenPack}>
                  <div className={classes.tokenPackCircleImg}></div>
                  <h4 className={classes.tokenName}>{tokenPackInfo?.name}</h4>
                  <h2 className={classes.tokenAmount}>
                    {tokenPackInfo?.token}
                  </h2>
                  <h4 className={classes.tokenText}>tokens</h4>
                  <h3 className={classes.tokenPrice}>
                    ${tokenPackInfo?.price}
                  </h3>
                  <button
                    type="submit"
                    className={classes.submitBtn}
                    onClick={handleModalOpen}>
                    {loading ? (
                      <CircularProgress size={20} className={classes.white} />
                    ) : (
                      "Confirm purchase"
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <>
                <h2 className={classes.tittle_sm}>Purchase token pack</h2>
                <div className={classes.tokenPack_sm}>
                  <div className={classes.tokenPack_sm_left}>
                    <div className={classes.tokenPackCircleImg}></div>
                    <div className={classes.token_pack_price}>
                      <h4 className={classes.tokenText}>tokens</h4>
                      <h2 className={classes.tokenAmount}>
                        {tokenPackInfo?.token}
                      </h2>
                    </div>
                  </div>
                  <div className={classes.tokenPack_sm_right}>
                    <h4 className={classes.tokenText}>tokens</h4>
                    <h3 className={classes.tokenPrice}>
                      ${tokenPackInfo?.price}
                    </h3>
                  </div>
                </div>
              </>
            )}
          </section>
        </Box>
      </form>
    </ScopedCssBaseline>
  );
};

export default TokensPayment;

import React, { useEffect, useState } from "react";
import useWeb3 from "./useWeb3";
import { Button, CircularProgress } from "@material-ui/core";
import { of } from "await-of";
import { showNotification } from "../ShowNotification";
import { useStyles } from "./styles";
import { useSelector } from "react-redux";
import { CURRENCY_CODE } from "../../Constants/General";
import { get } from "../../APIs/helpers";
import { UI_NOTIFICATIONS_TYPE } from "./../../Types/Enums";
import { useHistory } from "react-router-dom";
import APIConfig from "./../../APIs/config";
import clsx from "clsx";

const EtherWallet = ({ hotelPrice, row, styleClass }) => {
  const web3 = useWeb3();
  const [isMetaMask, setIsMetaMask] = useState(false);
  const [loading, setLoading] = useState(false);
  const selectedCurrency = useSelector((state) => state.search.currency);
  const [transactionHash, setTransactionHash] = useState(null);
  const history = useHistory();
  const classes = useStyles();

  const connectWallet = async () => {
    if (window.ethereum) {
      //check if Metamask is installed
      try {
        const address = await window.ethereum.enable(); //connect Metamask
        const obj = {
          connectedStatus: true,
          status: "",
          address: address,
        };
        return obj;
      } catch (error) {
        return {
          connectedStatus: false,
          status: "🦊 Connect to Metamask using the button on the bottom.",
        };
      }
    } else {
      return {
        connectedStatus: false,
        status:
          "🦊 You must install Metamask into your browser: https://metamask.io/download.html",
      };
    }
  };

  const currencyId = () => {
    switch (selectedCurrency) {
      case "USD":
        return CURRENCY_CODE.USD;
      case "EUR":
        return CURRENCY_CODE.EUR;
      case "GBP":
        return CURRENCY_CODE.GBP;
      default:
        return CURRENCY_CODE.EUR;
    }
  };

  const getMoneyToETH = async (amount) => {
    try {
      const response = await get(
        `${
          APIConfig.BASE_URL
        }/crypto/conversion/?amount=${amount}&currency=${currencyId()}`
      );
      let eth = JSON.parse(response)?.data?.quote?.[1027]?.price;
      return eth;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      console.log("MetaMask is installed!");
      setIsMetaMask(true);
    } else {
      console.log("MetaMask is not installed!");
    }
  }, []);

  const sendEthers = async (walletNumber) => {
    try {
      const eth = await getMoneyToETH(hotelPrice);
      if (!walletNumber || !hotelPrice || !eth) {
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
        showNotification("Payment Success", UI_NOTIFICATIONS_TYPE.success);
        setLoading(false);
        // history.push({
        //   pathname: `/reservation/${Math.floor(99999 * Math.random() + 1)}`,
        //   state: { row },
        // });
        history.push(`/reservation/${Math.floor(99999 * Math.random() + 1)}`);
        return data.transactionHash;
      }
      showNotification(
        "Could not complete payment. Please retry!",
        UI_NOTIFICATIONS_TYPE.error
      );
      setLoading(false);
      console.error(error);
    } catch (error) {
      showNotification(
        "Something Went Wrong. Please retry!",
        UI_NOTIFICATIONS_TYPE.error
      );
      setLoading(false);
      console.log(error);
    }
  };

  const handleEtherPayment = async () => {
    try {
      const wallet = await connectWallet();
      const tnxId = await sendEthers(wallet?.address[0]);
      setTransactionHash(tnxId);
    } catch (error) {
      showNotification("Something Went Wrong. Please retry!");
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div>
      {(isMetaMask && (
        <>
          <Button
            className={clsx(
              !loading ? classes.button : classes.loadingButton,
              styleClass
            )}
            style={{ minWidth: "168.06px", minHeight: "40px" }}
            disabled={loading}
            variant="contained"
            onClick={() => {
              setLoading(true);
              handleEtherPayment();
            }}>
            {(loading && (
              <CircularProgress size={20} data-testid="loading" />
            )) ||
              `Continue with Ether`}
          </Button>
        </>
      )) || (
        <Button
          className={clsx(classes.disabledButton, styleClass)}
          disabled={true}
          variant="contained">
          Continue with Ether
        </Button>
      )}
    </div>
  );
};

export default EtherWallet;

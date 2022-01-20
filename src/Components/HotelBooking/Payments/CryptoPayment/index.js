import React, { useEffect, useState } from "react";
import useWeb3 from "./useWeb3";
import { CircularProgress } from "@material-ui/core";
import { of } from "await-of";
import { showNotification } from "../../../ShowNotification";
import { useStyles } from "./styles";
import { useSelector } from "react-redux";
import { UI_NOTIFICATIONS_TYPE } from "../../../../Types/Enums";
import { useHistory } from "react-router-dom";
import validator from "validator";
import { TEXT } from "../../../../Constants/Strings";
import { setHotelroom, confirmHotel, getTokenprice } from "../../../../APIs/AmadeusService";
import clsx from "clsx";

const CryptoPayment = ({ selectedroom, selectedhotel, guestListArray, setMethodtype, firstname, lastname, email, isActiveCrypto }) => {
  const web3 = useWeb3();
  const [isMetaMask, setIsMetaMask] = useState(false);
  const userTokendata = useSelector((state) => state.authToken.authToken);
  const userToken = useSelector((state) => state.authToken.authToken?.access_token);
  const [loading, setLoading] = useState(false);
  const [transactionHash, setTransactionHash] = useState(null);
  const history = useHistory();
  const classes = useStyles();
  let currency = selectedroom.price.currency;
  const fulltokenreward = useSelector((state) => state.tokenReward.fulltokenreward);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      console.log("MetaMask is installed!");
      setIsMetaMask(true);
    } else {
      console.log("MetaMask is not installed!");
    }
  }, []);

  const guestarray = guestListArray.map((guest, index) => {
    // eslint-disable-next-line array-callback-return
    if (guest.name === "" && guest.email === "") return;
    return {
      id: index + 1,
      name: {
        title: "MR",
        firstName: guest?.name?.trim()?.split(" ")[0] || "",
        lastName: guest?.name?.trim()?.split(" ")[1] || "",
      },
      contact: {
        phone: "+33679278416",
        email: guest?.email?.trim(),
      },
    };
  });

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
        status: "🦊 You must install Metamask into your browser: https://metamask.io/download.html",
      };
    }
  };

  const getMoneyToETH = async (currency, total_price) => {
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
      let hotelPrice = selectedroom.price.total;
      let roomobj = {
        id: selectedroom.id,
        boardType: "None",
        type: selectedroom.room.type,
        category: selectedroom.room.typeEstimated.category,
        beds: selectedroom.room.typeEstimated.beds,
        bedType: selectedroom.room.typeEstimated.bedType,
        description: selectedroom.room.description.text,
        hotel_id: selectedhotel.hotelId,
      };
      setLoading(true);
      const roomobjrespone = await setHotelroom(roomobj);
      if (roomobjrespone !== null) {
        const eth = await getMoneyToETH(currency, hotelPrice);

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
          let confirm_payload = {
            offer_id: selectedroom.id,
            type: "tx",
            crypto: {
              sender: walletNumber,
              receiver: `${process.env.REACT_APP_ETHER_WALLET}`,
              transaction_id: data.transactionHash,
              amount: weiAmount,
            },

            guests: guestarray,
            details: {
              booking_id: 1,
              commission: "",
              currency: selectedroom.price.currency,
              base: selectedroom.price.base,
              total: selectedroom.price.total,
              startDate: selectedroom.checkInDate,
              endDate: selectedroom.checkOutDate,
              hotel_id: selectedhotel.hotelId,
              room_id: selectedroom.id,
            },
            customer_id: userTokendata.user_id,
            rewards: fulltokenreward,
          };
          await confirmHotel(confirm_payload, userToken)
            .then((res) => {
              let finalresponse = res;
              let payment_type = TEXT.CRYPTO;
              setLoading(false);
              if (res !== null) {
                setLoading(false);
                history.push({
                  pathname: "/confirmation-page/" + res.booking_ref,
                  state: {
                    guestArr: guestarray,
                    payment_type,
                    finalresponse,
                  },
                });
              } else {
                showNotification("Something! went wrong. please try again");
              }
            })
            .catch((error) => {
              setLoading(false);
            });
        } else {
          showNotification("Could not complete payment. Please retry!", UI_NOTIFICATIONS_TYPE.error);
          setLoading(false);
          console.error(error);
        }
      } else {
        showNotification("Something Went Wrong. Please retry!", UI_NOTIFICATIONS_TYPE.error);
        setLoading(false);
      }
    } catch (error) {
      showNotification("Something Went Wrong. Please retry!", UI_NOTIFICATIONS_TYPE.error);
      setLoading(false);
    }
  };

  const handleEtherPayment = async () => {
    try {
      setMethodtype();
      let guestempty = false;
      let guestvalidemail = true;
      for (var i = 0; i <= guestarray.length - 1; i++) {
        if ((guestarray[i]?.contact?.email === undefined || guestarray[i].name.firstName) === "" || guestarray[i].contact.email === "") {
          guestempty = true;
        }

        if (
          guestarray[i]?.contact?.email !== undefined &&
          guestarray[i]?.contact?.email !== "" &&
          !validator.isEmail(guestarray[i].contact.email)
        ) {
          guestvalidemail = false;
        }
      }

      if (!firstname || !lastname || !email || guestempty) {
        showNotification("Please fill all data");
      } else if (!validator.isEmail(email)) {
        showNotification("Enter valid Email!");
      } else {
        if (!guestvalidemail) {
          showNotification("Enter valid guest Email!");
          return false;
        }
        const wallet = await connectWallet();
        const tnxId = await sendEthers(wallet?.address[0]);
        setTransactionHash(tnxId);
      }
    } catch (error) {
      showNotification("Something Went Wrong. Please retry!");
      setLoading(false);
    }
  };

  return (
    <span>
      {(isMetaMask && (
        <>
          <button
            className={
              isActiveCrypto
                ? clsx(classes.paymentButton, classes.orangeText, classes.marginLeft10, classes.orangeBorder, classes.orangeBg)
                : clsx(classes.paymentButton, classes.orangeText, classes.marginLeft10, classes.orangeBorder)
            }
            disabled={loading}
            type="button"
            onClick={() => {
              handleEtherPayment();
            }}>
            {(loading && <CircularProgress size={20} data-testid="loading" />) || `Cryptocurrency`}
          </button>
        </>
      )) || (
        <button
          className={clsx(classes.paymentButton, classes.orangeText, classes.marginLeft10, classes.orangeBorder, classes.loadingButton)}
          disabled={true}
          type="button"
          variant="contained">
          Crypto currency
        </button>
      )}
    </span>
  );
};

export default CryptoPayment;

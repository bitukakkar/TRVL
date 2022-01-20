import Torus from "@toruslabs/torus-embed";
import Web3 from "web3";
import { ethers } from "ethers";
import { of } from "await-of";

import { updateBlackdrop } from "../Redux/Reducers/loading";
import fetchABI from "../ABIs/Fetch.json";
import { showNotification } from "../Components";

let torus = null;

export const initializeTorusWallet = async (networkId) => {
  torus = new Torus({
    buttonPosition: "bottom-left",
  });
  const network = {
    4444: { host: "localhost", chainId: 4444 },
  };
  try {
    await torus.init({ showTorusButton: true, network: network[networkId] });
    await torus.login();
    window.web3 = new Web3(torus.provider);
    return true;
  } catch (error) {
    await torus.cleanUp();
    return false;
  }
};

export const logoutTorusWallet = async () => {
  try {
    await torus?.logout();
    await torus?.cleanUp();
    return true;
  } catch (error) {
    await torus?.cleanUp();
    return false;
  }
};

export const getAccountDetail = async () => {
  try {
    const userInfo = await torus?.getUserInfo();
    return userInfo;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getNetworkId = async () => window.web3.eth.net.getId();
export const getAccounts = async () => window.web3.eth.getAccounts();
export const getAccountAddress = async () => {
  const [address] = await window.web3.eth.getAccounts();
  return address;
};

export const getNetworkName = () => {
  return window.web3.eth.net.getNetworkType();
};

export const isUserLoggedIn = () =>
  new Promise((resolve, reject) => {
    window.web3.eth.getAccounts((err, accounts) => {
      if (err != null) {
        reject(err);
      }
      resolve(accounts.length !== 0);
    });
  });

export const metaMaskAccountsChanged = (callback) => {
  window.ethereum.on("chainChanged", callback);
  window.ethereum.on("accountsChanged", callback);
};

export const sendTransaction = async (toAddress, tokenAmount) => {
  // Send Tokens and return transaction hash
  const fromAddress = await getAccountAddress(); // Get user account address
  // FET contract address
  const contractAddress = "0xe4c685195D111eeb1ee9b509f17357761Ee2d786";
  const contract = new window.web3.eth.Contract(fetchABI, contractAddress);
  const bigNumAmount = ethers?.BigNumber?.from(tokenAmount);
  const decimal = await contract?.methods?.decimals()?.call(); // Get contract decimal
  const tokenAmountInDenominator = ethers.utils.parseUnits(bigNumAmount.toString(), decimal);
  const data = await contract?.methods // Transfer token
    ?.transfer(toAddress, tokenAmountInDenominator)
    ?.send({ from: fromAddress });
  return data?.transactionHash;
};

export const sendEthers = async (toAddress, tokenAmount, dispatch) => {
  // Send ether and return transaction hash
  dispatch(updateBlackdrop(true));
  const fromAddress = await getAccountAddress(); // Get user account address
  const weiAmount = Web3.utils.toWei(`${tokenAmount}`, "ether"); // convert ethers to wei
  const [data, error] = await of(
    window.web3.eth.sendTransaction({
      from: fromAddress,
      to: toAddress,
      value: weiAmount,
    }),
  );
  dispatch(updateBlackdrop(false));
  if (data) {
    return data.transactionHash;
  }
  showNotification("Could not complete payment. Please retry!");
  console.error(error);
};

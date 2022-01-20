import { post } from "./helpers";

export const startBooking = async (host, port, params) => {
  return post(`http://${host}:${port}/book`, params);
};

export const confirmBooking = (host, port, params) => {
  return post(`http://${host}:${port}/confirm`, params);
};

export const acceptBooking = (host, port, params) => {
  return post(`http://${host}:${port}/accept`, params);
};

export const declineBooking = (host, port) => {
  return post(`http://${host}:${port}/decline`, {});
};

export const negotiateBooking = (host, port, params) => {
  return post(`http://${host}:${port}/negotiate`, params);
};

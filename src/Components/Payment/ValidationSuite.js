import vest, { test, enforce } from "vest";

const validationSuite = vest.create((data = {}) => {
  test("firstName", "First Name is required", () => {
    enforce(data.firstName).isNotEmpty();
  });

  test("lastName", "Last Name is required", () => {
    enforce(data.firstName).isNotEmpty();
  });

  test("email", "Email is required", () => {
    enforce(data.email).isNotEmpty();
  });

  test("phone", "Phone is required", () => {
    enforce(data.phone).isNotEmpty();
  });

  test("phone", "Invalid phone number", () => {
    enforce(data.phone).isNumeric();
  });

  test("phone", "Invalid phone number", () => {
    // eslint-disable-next-line no-useless-escape
    enforce(data.phone).matches(/^[0-9+\(\)#\.\s\/ext-]+$/);
  });

  test("phone", "Phone must be at least 10 chars", () => {
    enforce(data.phone).longerThanOrEquals(10);
  });

  test("vendorCode", "Vendor Name is required", () => {
    enforce(data.vendorCode).isNotEmpty();
  });

  test("address", "Address is required", () => {
    enforce(data.address).isNotEmpty();
  });

  test("address", "Invalid address", () => {
    enforce(data.address).matches(/^[#.0-9a-zA-Z\s,-]+$/);
  });

  test("cardNumber", "Card number is required", () => {
    enforce(data.cardNumber).isNotEmpty();
  });

  test("expDate", "Expiry date is required", () => {
    enforce(data.expDate).isNotEmpty();
  });
});

export default validationSuite;

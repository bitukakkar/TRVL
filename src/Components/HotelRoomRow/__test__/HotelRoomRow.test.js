import React from "react";
import { useState as useStateMock } from "react";
import userEvent from "@testing-library/user-event";
import createSetup from "../../../Utils/setup";
import { HotelRoomRow } from "../../../Components/HotelRoomRow";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

const setOpen = jest.fn();
const setLoading = jest.fn();

describe("<HotelRoomRow />", () => {
  let setup;

  beforeEach(() => {
    useStateMock
        .mockImplementation(init => [init, setOpen])
        .mockImplementation(init => [init, setLoading]);
    setup = createSetup({
      component: HotelRoomRow,
    });
  });

  afterEach(jest.resetAllMocks);

  test("When it renders Then it should not crash", () => {
    const { container } = setup();
    expect(container).toBeTruthy();
  });

  test("When open is set true Then KeyboardArrowUpIcon should be rendered", () => {
    useStateMock
        .mockImplementationOnce(() => [true, setOpen])
        .mockImplementationOnce(() => [false, setLoading]);
    const { queryByTestId } = setup();
    expect(queryByTestId("keyboard-arrow-up-icon")).toBeTruthy();
  });

  test("When open is set false Then KeyboardArrowDownIcon should be rendered", () => {
    useStateMock
        .mockImplementationOnce(() => [false, setOpen])
        .mockImplementationOnce(() => [false, setLoading]);
    const { queryByTestId } = setup();
    expect(queryByTestId("keyboard-arrow-down-icon")).toBeTruthy();
  });

  test("When loading is set true Then CircularProgress should be rendered", () => {
    useStateMock
        .mockImplementationOnce(() => [true, setOpen])
        .mockImplementationOnce(() => [true, setLoading]);
    const { queryByTestId } = setup();
    expect(queryByTestId("loading")).toBeTruthy();
  });

  test("When loading is set false Then CircularProgress should not be rendered", () => {
    useStateMock
        .mockImplementationOnce(() => [true, setOpen])
        .mockImplementationOnce(() => [false, setLoading]);
    const { queryByTestId } = setup();
    expect(queryByTestId("loading")).toBeNull();
  });

  test("When user click on submit button Then startBooking should be called", () => {
    useStateMock
        .mockImplementationOnce(() => [true, setOpen]);
    const { getByTestId } = setup();
    userEvent.click(getByTestId("button-submit"));
    expect(setLoading).toBeCalled();
  });
});

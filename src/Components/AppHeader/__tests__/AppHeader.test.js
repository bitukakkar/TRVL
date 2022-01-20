import React from "react";
import { useState as useStateMock } from "react";
import { useSelector as useSelectorMock } from "react-redux";
import { fireEvent } from "@testing-library/react";
import createSetup from "../../../Utils/setup";
import { AppHeader } from "../../../Components/AppHeader";
import { TEXT } from "../../../Constants/Strings";
import { logoutTorusWallet as logoutTorusWalletMock } from "../../../Utils";

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

jest.mock("../../../Utils", () => ({
  ...jest.requireActual("../../../Utils"),
  logoutTorusWallet: jest.fn(),
}));

const mockAppState = {
  user: {
    address: "Address",
  },
};

const setOpen = jest.fn();

describe("<AppHeader />", () => {
  let setup;

  beforeEach(() => {
    useStateMock.mockImplementation(init => [init, setOpen]);
    useSelectorMock.mockImplementation(callback => {
      return callback(mockAppState);
    });
    setup = createSetup({
      component: AppHeader,
    });
  });

  afterEach(jest.resetAllMocks);

  test("When it renders Then it should not crash", () => {
    const { container } = setup();
    expect(container).toBeTruthy();
  });

  test("When it renders Then it should has search text", () => {
    const { getByText } = setup();
    expect(getByText(TEXT.SEARCH)).toBeDefined();
  });

  test("When it renders Then it should has agent text", () => {
    const { getByText } = setup();
    expect(getByText(TEXT.AGENT)).toBeDefined();
  });

  test("When it renders Then it should has token text", () => {
    const { getByText } = setup();
    expect(getByText(TEXT.TOKEN)).toBeDefined();
  });

  test("When user has no address And click on the login button Then setOpen should be called", () => {
    const localMockState = {
      ...mockAppState,
      user: {
        address: null,
      },
    };
    useSelectorMock.mockImplementation(callback => {
      return callback(localMockState);
    });
    const { getByTestId } = setup();
    fireEvent.click(getByTestId("button-login"));
    expect(setOpen).toBeCalled();
  });

  test("When user has address And click on the logout button Then logoutTorusWallet should be called", () => {
    const { getByTestId } = setup();
    fireEvent.click(getByTestId("button-logout"));
    expect(logoutTorusWalletMock).toBeCalled();
  });
});

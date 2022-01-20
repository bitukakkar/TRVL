import React from "react";
import { useState as useStateMock } from "react";
import createSetup from "../../../Utils/setup";
import { OfferBox } from "../../../Components/OfferBox";
import { TEXT } from "../../../Constants/Strings";

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

const setOfferPrice = jest.fn();

describe("<OfferBox />", () => {
  let setup;

  beforeEach(() => {
    useStateMock.mockImplementation(init => [init, setOfferPrice]);
    setup = createSetup({
      component: OfferBox,
    });
  });

  afterEach(jest.resetAllMocks);

  test("When it renders Then it should not crash", () => {
    const { container } = setup();
    expect(container).toBeTruthy();
  });

  test("When offerPrice has items Then Euro icon should be rendered", () => {
    const offerPrice = [
      {
        name: TEXT.BOOKING_DOT_COM,
        price: 6,
      },
    ];
    useStateMock.mockImplementationOnce(() => [offerPrice, setOfferPrice]);
    const { getByTestId } = setup();
    expect(getByTestId("icon-euro")).toBeTruthy();
  });

  test("When offerPrice has no items Then Euro icon should not be rendered", () => {
    const offerPrice = [];
    useStateMock.mockImplementationOnce(() => [offerPrice, setOfferPrice]);
    const { queryByTestId } = setup();
    expect(queryByTestId("icon-euro")).toBeNull();
  });
});

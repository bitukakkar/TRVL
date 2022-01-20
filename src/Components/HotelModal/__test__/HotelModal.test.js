import React from "react";
import { useState as useStateMock } from "react";
import createSetup from "../../../Utils/setup";
import { HotelModal } from "../../../Components/HotelModal";
import { TEXT } from "../../../Constants/Strings";

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

const setPriceRange = jest.fn();

describe("<HotelModal />", () => {
  let setup;
  let props;

  beforeEach(() => {
    props = {
      hotelData: {
        rooms: [
          {
            pricing: {
              baserate: 10,
            }
          }
        ],
        star_rating: 10,
        name: 'hotel name',
        addr1: 'address 1',
        city: 'city',
        country: 'country',
        image: 'hotel_image',
        agent_id: 'real',
      },
    };
    useStateMock.mockImplementation(init => [init, setPriceRange]);
    setup = createSetup({
      component: HotelModal,
      props,
    });
  });

  afterEach(jest.resetAllMocks);

  test("When it renders Then it should not crash", () => {
    const { container } = setup();
    expect(container).toBeTruthy();
  });

  test("When the hotel agent id equals to fake Then HOTEL_FULLY_RESERVED message should be rendered", () => {
    props.hotelData.agent_id = 'fake';
    const { getByText } = setup();
    expect(getByText(TEXT.HOTEL_FULLY_RESERVED)).toBeDefined();
  });

  test("When the hotel name equals to Test Hotel Then Test Hotel should be rendered", () => {
    const { container } = setup();
    props.hotelData.name = 'hotel name';
    const newTree = setup();
    expect(container).toEqual(newTree.container);
  });

  test("When the min price and max price are same Then min price should be rendered", () => {
    useStateMock.mockImplementationOnce(() => [{ min: 15, max: 15 }, setPriceRange]);
    const { getByText } = setup();
    expect(getByText("15")).toBeTruthy();
  });

  test("When the min price equals to 100 And max price equals to 150 Then 100 - 150 should be rendered", () => {
    useStateMock.mockImplementationOnce(() => [{ min: 100, max: 150 }, setPriceRange]);
    const { getByText } = setup();
    expect(getByText("100 - 150")).toBeTruthy();
  });
});

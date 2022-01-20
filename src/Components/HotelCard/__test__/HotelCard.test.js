import React from "react";
import { useState as useStateMock } from "react";
import createSetup from "../../../Utils/setup";
import { HotelCard } from "../../../Components/HotelCard";

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

const setMinmaxPrice = jest.fn();

describe("<HotelCard />", () => {
  let setup;
  let props;

  beforeEach(() => {
    props = {
      showHotel: {
        rooms: [
          {
            pricing: {
              baserate: 100,
            }
          }
        ],
        name: 'Hotel Name',
        image: 'hotel_image',
        rating: 5,
      }
    };
    useStateMock.mockImplementation(init => [init, setMinmaxPrice]);
    setup = createSetup({
      component: HotelCard,
      props,
    });
  });

  afterEach(jest.resetAllMocks);

  test("When it renders Then it should not crash", () => {
    const { container } = setup();
    expect(container).toBeTruthy();
  });

  test("When the showHotel name is 'Show Hotel' Then 'Show Hotel' should be rendered", () => {
    props.showHotel.name = 'Show Hotel';
    const { getByText } = setup();
    expect(getByText('Show Hotel')).toBeDefined();
  });

  test("When the star rating is 5 Then 5 should be rendered", () => {
    props.showHotel.star_rating = 5;
    const { getByText } = setup();
    expect(getByText('5')).toBeDefined();
  });

  test("When the min price and max price are same Then min price should be rendered", () => {
    useStateMock.mockImplementationOnce(() => [{ min: 15, max: 15 }, setMinmaxPrice]);
    const { getByText } = setup();
    expect(getByText("15")).toBeTruthy();
  });

  test("When the min price equals to 100 And max price equals to 150 Then 100-150 should be rendered", () => {
    useStateMock.mockImplementationOnce(() => [{ min: 100, max: 150 }, setMinmaxPrice]);
    const { getByText } = setup();
    expect(getByText("100-150")).toBeTruthy();
  });
});

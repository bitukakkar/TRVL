import React from "react";
import { useState as useStateMock } from "react";
import createSetup from "../../../Utils/setup";
import { AmenitiesBox } from "../../../Components/AmenitiesBox";
import { fireEvent } from "@testing-library/react";

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

const setShowMoreAmenities = jest.fn();

describe("<AmenitiesBox />", () => {
  let setup;
  let props;

  beforeEach(() => {
    props = {
      amenities: {
        amenity: [
          'Amenity 1',
          'Amenity 2',
          'Amenity 3',
        ],
        moreAmenity: [
          'Amenity 4',
          'Amenity 5',
          'Amenity 6',
        ]
      },
      showMoreAmenities: true,
      setShowMoreAmenities: () => jest.fn(),
    };
    useStateMock.mockImplementation(init => [init, setShowMoreAmenities]);
    setup = createSetup({
      component: AmenitiesBox,
      props,
    });
  });

  afterEach(jest.resetAllMocks);

  test("When it renders Then it should not crash", () => {
    const { container } = setup();
    expect(container).toBeTruthy();
  });

  test("When moreAmenity is available Then moreAmenity values should be rendered", () => {
    const { getByText } = setup();
    expect(getByText(props.amenities.moreAmenity[0])).toBeTruthy();
  });

  test("When amenities is not set And user click on read more button Then setShowMoreAmenities should be called", () => {
    props.amenities = null;
    const { getByTestId } = setup();
    fireEvent.click(getByTestId("button-show-more"));
    expect(setShowMoreAmenities).toBeCalled();
  });
});

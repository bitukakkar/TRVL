import React from "react";
import { useState as useStateMock } from "react";
import createSetup from "../../../Utils/setup";
import { HotelRoom } from "../../../Components/HotelRoom";
import { TABLE_HEADINGS } from "../../../Constants/General";

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

const setRooms = jest.fn();

describe("<HotelRoom />", () => {
  let setup;

  beforeEach(() => {
    useStateMock.mockImplementation(init => [init, setRooms]);
    setup = createSetup({
      component: HotelRoom,
    });
  });

  afterEach(jest.resetAllMocks);

  test("When it renders Then it should not crash", () => {
    const { container } = setup();
    expect(container).toBeTruthy();
  });

  test("When TABLE_HEADINGS has items Then table cell should be rendered", () => {
    const { getByText } = setup();
    expect(getByText(TABLE_HEADINGS[1])).toBeTruthy();
  });

  test("When the rooms exist Then HotelRoomRow should be rendered", () => {
    const rooms = [
      {
        name: 'Room 1',
        pricing: {
          baserate: 5
        }
      }
    ];
    useStateMock.mockImplementationOnce(() => [rooms, setRooms]);
    const { getByTestId } = setup();
    expect(getByTestId("room-item")).toBeTruthy();
  });

  test("When there are no rooms Then HotelRoomRow should not be rendered", () => {
    const rooms = [];
    useStateMock.mockImplementationOnce(() => [rooms, setRooms]);
    const { queryByTestId } = setup();
    expect(queryByTestId("room-item")).toBeNull();
  });
});

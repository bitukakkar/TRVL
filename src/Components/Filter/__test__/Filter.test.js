import React from "react";
import { useState as useStateMock } from "react";
import { fireEvent } from "@testing-library/react";
import createSetup from "../../../Utils/setup";
import { Filter } from "../../../Components/Filter";
import { TEXT } from "../../../Constants/Strings";

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

const setFilterName = jest.fn();

describe("<Filter />", () => {
  let setup;

  beforeEach(() => {
    useStateMock.mockImplementation(init => [init, setFilterName]);
    setup = createSetup({
      component: Filter,
    });
  });

  afterEach(jest.resetAllMocks);

  test("When it renders Then it should not crash", () => {
    const { container } = setup();
    expect(container).toBeTruthy();
  });

  test("When it renders Then it should has filters text", () => {
    const { getByText } = setup();
    expect(getByText(TEXT.FILTERS)).toBeDefined();
  });

  test("When user select an item from the dropdown menu Then filter name setting function should be called", () => {
    const { getByTestId } = setup();
    fireEvent.change(getByTestId("multiple-chip"));
    expect(setFilterName).toBeCalled();
  });
});

import React from "react";
import createSetup from "../../../Utils/setup";
import { FilterBox } from "../../../Components/FilterBox";
import userEvent from "@testing-library/user-event";

describe("<FilterBox />", () => {
  let setup;
  let props;

  const setIsFilterClickedMock = jest.fn();

  beforeEach(() => {
    props = {
      hotels: [],
      setFilteredHotel: () => jest.fn(),
      setIsFilterClicked: setIsFilterClickedMock
    };

    setup = createSetup({
      component: FilterBox,
      props
    });
  });

  afterEach(jest.resetAllMocks);

  test("When it renders Then it should not crash", () => {
    const { container } = setup();
    expect(container).toBeTruthy();
  });

  test("When user click on filter button Then filter clicked status should be set true", () => {
    const { getByTestId } = setup();
    userEvent.click(getByTestId('filter-button'));
    expect(setIsFilterClickedMock).toBeCalledTimes(1);
  });
});

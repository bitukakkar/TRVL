import React from "react";
import createSetup from "../../../Utils/setup";
import { PriceBox } from "../../../Components/PriceBox";
import userEvent from "@testing-library/user-event";

describe("<PriceBox />", () => {
  let setup;
  let props;

  const handleSubmitMock = jest.fn();

  beforeEach(() => {
    props = {
      roomData: [],
      calculatedPrice: 0,
      loading: false,
      handleSubmit: handleSubmitMock
    };

    setup = createSetup({
      component: PriceBox,
      props
    });
  });

  afterEach(jest.resetAllMocks);

  test("When it renders Then it should not crash", () => {
    const { container } = setup();
    expect(container).toBeTruthy();
  });

  test("When user click on submit button Then submit function should be called", () => {
    const { getByTestId } = setup();
    userEvent.click(getByTestId('priceBox-submit'));
    expect(handleSubmitMock).toBeCalledTimes(1);
  });

  test("When price is loading Then CircularProgress should be rendered", () => {
    props.loading = true;
    const { getByTestId } = setup();
    expect(getByTestId('loading')).toBeTruthy();
  });
});

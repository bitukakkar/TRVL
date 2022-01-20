import React from "react";
import createSetup from "../../../Utils/setup";
import { DatePicker } from "../../../Components/DatePicker";

describe("<DatePicker />", () => {
  let setup;
  let props;

  beforeEach(() => {
    props = {
      setDate: () => jest.fn(),
      date: new Date().toString(),
      label: 'label',
      disableDate: () => jest.fn(),
    };
    setup = createSetup({
      component: DatePicker,
      props,
    });
  });

  afterEach(jest.resetAllMocks);

  test("When it renders Then it should not crash", () => {
    const { container } = setup();
    expect(container).toBeTruthy();
  });
});

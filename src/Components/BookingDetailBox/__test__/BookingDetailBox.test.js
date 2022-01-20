import React from "react";
import createSetup from "../../../Utils/setup";
import { BookingDetailBox } from "../../../Components/BookingDetailBox";

describe("<BookingDetailBox />", () => {
  let setup;

  beforeEach(() => {
    setup = createSetup({
      component: BookingDetailBox,
    });
  });

  afterEach(jest.resetAllMocks);

  test("When it renders Then it should not crash", () => {
    const { container } = setup();
    expect(container).toBeTruthy();
  });
});

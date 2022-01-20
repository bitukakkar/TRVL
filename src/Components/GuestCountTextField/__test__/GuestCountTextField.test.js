import React from "react";
import createSetup from "../../../Utils/setup";
import { GuestCountTextField } from "../../../Components/GuestCountTextField";

describe("<GuestCountTextField />", () => {
  let setup;

  beforeEach(() => {
    setup = createSetup({
      component: GuestCountTextField,
    });
  });

  afterEach(jest.resetAllMocks);

  test("When it renders Then it should not crash", () => {
    const { container } = setup();
    expect(container).toBeTruthy();
  });
});

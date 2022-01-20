import React from "react";
import createSetup from "../../Utils/setup";
import App from "../../App";

describe("<App />", () => {
  let setup;

  beforeEach(() => {
    setup = createSetup({
      component: App,
    });
  });

  afterEach(jest.resetAllMocks);

  test("When it renders Then it should not crash", () => {
    const { container } = setup();
    expect(container).toBeTruthy();
  });
});

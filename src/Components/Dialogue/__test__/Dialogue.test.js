import React from "react";
import createSetup from "../../../Utils/setup";
import { Dialogue } from "../../../Components/Dialogue";

describe("<Dialogue />", () => {
  let setup;

  beforeEach(() => {
    setup = createSetup({
      component: Dialogue,
    });
  });

  afterEach(jest.resetAllMocks);

  test("When it renders Then it should not crash", () => {
    const { container } = setup();
    expect(container).toBeTruthy();
  });

  test("When it renders with message Then it should has the message", () => {
    const testMessage = 'Message Test';
    const { getByText } = setup({
      props: {
        message: testMessage
      }
    });
    expect(getByText(testMessage)).toBeDefined();
  });
});

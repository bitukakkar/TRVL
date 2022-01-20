import React from "react";
import createSetup from "../../../Utils/setup";
import { Blackdrop } from "../../../Components/Blackdrop";

describe("<Blackdrop />", () => {
  let setup;
  let props;

  beforeEach(() => {
    props = {
      visible: true,
    };
    setup = createSetup({
      component: Blackdrop,
      props,
    });
  });

  afterEach(jest.resetAllMocks);

  test("When it renders Then it should not crash", () => {
    const { container } = setup();
    expect(container).toBeTruthy();
  });

  test("When visible is set true Then main content should be rendered", () => {
    const { getByTestId } = setup();
    expect(getByTestId("container")).toBeTruthy();
  });

  test("When visible is set false Then main content should not be rendered", () => {
    props.visible = false;
    const { queryByTestId } = setup();
    expect(queryByTestId("container")).toBeNull();
  });
});

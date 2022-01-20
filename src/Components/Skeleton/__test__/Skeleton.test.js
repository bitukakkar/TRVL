import React from "react";
import createSetup from "../../../Utils/setup";
import { Skeleton } from "../../../Components/Skeleton";

describe("<Skeleton />", () => {
  let setup;

  beforeEach(() => {
    setup = createSetup({
      component: Skeleton,
    });
  });

  afterEach(jest.resetAllMocks);

  test("When it renders Then it should not crash", () => {
    const { container } = setup();
    expect(container).toBeTruthy();
  });
});

import React from "react";
import createSetup from "../../../Utils/setup";
import { PlaceSearch } from "../../../Components/PlaceSearch";

describe("<PlaceSearch />", () => {
  let setup;

  beforeEach(() => {
    setup = createSetup({
      component: PlaceSearch,
    });
  });

  afterEach(jest.resetAllMocks);

  test("When it renders Then it should not crash", () => {
    const { container } = setup();
    expect(container).toBeTruthy();
  });
});

import React from "react";
import createSetup from "../../../Utils/setup";
import { RoomSkeleton } from "../../../Components/RoomSkeleton";

describe("<RoomSkeleton />", () => {
  let setup;

  beforeEach(() => {
    setup = createSetup({
      component: RoomSkeleton,
    });
  });

  afterEach(jest.resetAllMocks);

  test("When it renders Then it should not crash", () => {
    const { container } = setup();
    expect(container).toBeTruthy();
  });
});

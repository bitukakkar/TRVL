import React from "react";
import createSetup from "../../../Utils/setup";
import { WalletModal } from "../../../Components/WalletModal";

describe("<WalletModal />", () => {
  let setup;

  beforeEach(() => {
    setup = createSetup({
      component: WalletModal,
    });
  });

  afterEach(jest.resetAllMocks);

  test("When it renders Then it should not crash", () => {
    const { container } = setup();
    expect(container).toBeTruthy();
  });
});

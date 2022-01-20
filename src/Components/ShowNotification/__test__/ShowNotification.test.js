import React from "react";
import createSetup from "../../../Utils/setup";
import { showNotification } from "../../../Components/ShowNotification";
import { UI_NOTIFICATIONS_TYPE } from "../../../Types/Enums";
import { toast } from "react-toastify";

describe("<ShowNotification />", () => {
  let setup;
  let props;

  beforeEach(() => {
    props = {
      msg: 'message',
      type: 'success',
      position: 'bottom',
      duration: 3000,
      color: 'red',
    };
    setup = createSetup({
      component: showNotification,
      props,
    });
  });

  afterEach(jest.resetAllMocks);

  test("When it renders Then it should not crash", () => {
    const { container } = setup();
    expect(container).toBeTruthy();
  });

  test("When notification type equals to SUCCESS Then success toast notification should be called", () => {
    setup({
      props: {
        type: UI_NOTIFICATIONS_TYPE.success,
      },
    });
    expect(toast.success).toBeTruthy();
  });

  test("When notification type equals to WARNING Then warning toast notification should be called", () => {
    setup({
      props: {
        type: UI_NOTIFICATIONS_TYPE.warning,
      },
    });
    expect(toast.success).toBeTruthy();
  });

  test("When notification type equals to ERROR Then error toast notification should be called", () => {
    setup({
      props: {
        type: UI_NOTIFICATIONS_TYPE.error,
      },
    });
    expect(toast.error).toBeTruthy();
  });

  test("When notification type equals to INFO Then info toast notification should be called", () => {
    setup({
      props: {
        type: UI_NOTIFICATIONS_TYPE.info,
      },
    });
    expect(toast.info).toBeTruthy();
  });
});

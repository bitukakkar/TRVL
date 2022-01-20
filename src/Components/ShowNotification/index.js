import { toast } from "react-toastify";
import { UI_NOTIFICATIONS_TYPE } from "../../Types/Enums";

export const showNotification = (msg, type, position, duration, color = "red") => {
  const toastProps = {
    className: {
      background: color,
      textAlign: "center",
    },
    position: position ? toast.POSITION[position] : toast.POSITION.TOP_RIGHT,
    autoClose: duration,
    pauseOnFocusLoss: true,
    pauseOnHover: false,
  };

  switch (type) {
    case UI_NOTIFICATIONS_TYPE.success:
      return toast.success(msg, {
        ...toastProps,
      });

    case UI_NOTIFICATIONS_TYPE.warning:
      return toast.warn(msg, {
        ...toastProps,
      });

    case UI_NOTIFICATIONS_TYPE.error:
      return toast.error(msg, {
        ...toastProps,
      });

    default:
      return toast.info(msg, {
        ...toastProps,
      });
  }
};

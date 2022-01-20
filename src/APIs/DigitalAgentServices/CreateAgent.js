import axios from "axios";
import { showNotification } from "../../Components/ShowNotification/index";
import { UI_NOTIFICATIONS_TYPE } from "../../Types/Enums";
import { postHeader } from "../helpers";
import { handleAxiosError, APIs } from "../apiList";
import { of } from "await-of";
import { setAgentImage } from "../../Components/Others/DigitalAgent/agentRedux";

export const createAgentHandler = async (
  details,
  token,
  setIsBtnDisabled,
  isAgentInfoAvailable,
  agentImage
) => {
  const { name, image, location, strategies } = details;

  if (!name && !location && !strategies && !token) {
    showNotification(
      "Something Went Wrong. Please retry!",
      UI_NOTIFICATIONS_TYPE.error
    );
    setIsBtnDisabled(false);
    return;
  }

  const formattedStrategies = strategies?.map((strategy) => ({
    name: strategy.value,
  }));

  if (!formattedStrategies[0]?.name) {
    showNotification(
      "Something Went Wrong. Please retry!",
      UI_NOTIFICATIONS_TYPE.error
    );
    setIsBtnDisabled(false);
    return;
  }

  const toBase64 = (file) => {
    if (!file) return "";
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject("");
    });
  };

  // send again image to the server when call update api
  const getImage = () => {
    if (isAgentInfoAvailable) {
      if (agentImage === "") {
        return toBase64(image[0]);
      }
      return agentImage;
    }
  };

  const data = {
    agent_name: name,
    agent_address: location,
    agent_strategies: JSON.stringify(formattedStrategies),
    agent_image: await getImage(),
  };

  try {
    // const res = await axios.post(APIs?.createAgent, data, {
    //   headers: {
    //     "Content-Type": postHeader?.json,
    //     Authorization: "Bearer " + token?.access_token,
    //   },
    // });
    const res = !isAgentInfoAvailable
      ? await axios.post(APIs?.createAgent, data, {
          headers: {
            "Content-Type": postHeader?.json,
            Authorization: "Bearer " + token?.access_token,
          },
        })
      : await axios.put(APIs?.updateAgent, data, {
          headers: {
            "Content-Type": postHeader?.json,
            Authorization: "Bearer " + token?.access_token,
          },
        });

    showNotification("success", UI_NOTIFICATIONS_TYPE.success);
    return res?.data;
  } catch (error) {
    setIsBtnDisabled(false);
    if (error?.response?.data?.detail[0]?.loc) {
      showNotification(
        `${error?.response?.data?.detail[0]?.msg}`,
        UI_NOTIFICATIONS_TYPE.error
      );
      return;
    }
    if (error?.response?.data?.detail) {
      showNotification(
        `${error?.response?.data?.detail}`,
        UI_NOTIFICATIONS_TYPE.error
      );
    } else {
      showNotification(
        "Something Went Wrong. Please retry!",
        UI_NOTIFICATIONS_TYPE.error
      );
    }
    handleAxiosError(error);
  }
};

export const fetchAgentImage = async (dispatch, userToken) => {
  if (!dispatch || !userToken) return;

  const [data, error] = await of(
    axios.get(APIs.agentDetails, {
      headers: {
        Authorization: "Bearer " + userToken?.access_token,
        "Content-Type": "application/json",
      },
    })
  );

  if (data && data?.status === 200) {
    dispatch(setAgentImage(data.data?.agent_image));
  }

  if (error) {
    handleAxiosError(error);
  }
};

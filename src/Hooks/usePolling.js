import { useRef } from "react";

const timeoutms = 1000; //Polling time is 1 sec,

const usePolling = (callback) => {
  const processId = useRef();

  const stopPolling = () => {
    if (processId.current) {
      clearInterval(processId.current);
      processId.current = undefined;
      return;
    }
  };

  const startPolling = () => {
    callback();
    processId.current = setInterval(() => callback(), timeoutms);
  };
  return [startPolling, stopPolling];
};

export { usePolling };

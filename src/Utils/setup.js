import React from "react";

import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { persistStore } from "redux-persist";
import DateFnsUtils from "@date-io/date-fns";
import { store } from "../Redux/Store";
import { theme } from "../Theme";

const persistor = persistStore(store);

export default function createSetup(params) {
  const {
    component: Component,
    props: initialProps = {},
  } = params;

  return ({ props } = {}) => {
    const combinedProps = { ...initialProps, ...props };

    const wrappedComponent = (p) => (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <BrowserRouter>
                <Component {...p} />
              </BrowserRouter>
            </MuiPickersUtilsProvider>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    );

    const wrapper = render(wrappedComponent(combinedProps));

    const rerender = (rerenderParams) => {
      const { rerenderProps } = rerenderParams;
      const newProps = { ...combinedProps, ...rerenderProps };

      wrapper.rerender(wrappedComponent(newProps));
    };

    return {
      ...wrapper,
      rerender,
      props,
    };
  };
}
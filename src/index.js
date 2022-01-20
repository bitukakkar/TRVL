import React from "react";
import ReactDOM from "react-dom";
import dotenv from "dotenv";
import DateFnsUtils from "@date-io/date-fns";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./Components/ScrollToTop";
import "./index.css";
import App from "./App";
import { store } from "./Redux/Store";
import { theme } from "./Theme";

const persistor = persistStore(store);
dotenv.config();
toast.configure();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <BrowserRouter>
              <ScrollToTop>
                <App />
              </ScrollToTop>
            </BrowserRouter>
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

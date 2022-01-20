import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Grid } from "@material-ui/core";
import {
  useStyles,
  reactSelectStyles,
  reactSelectFilterStyles,
  strategyFieldStyles,
} from "./styles";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import clsx from "clsx";
import Select from "react-select";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calenderIcon from "./../../../../Assets/images/calendar.svg";
import { useFormContext, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useDispatch, useSelector } from "react-redux";
import { createAgentHandler } from "./../../../../APIs/DigitalAgentServices/CreateAgent";
import GooglePlaceAutocomplete from "../GooglePlaceAutocomplete/index";
import {
  setAgentName,
  setAgentImage,
  setCheckIn,
  setCheckOut,
  setIncreaseGuestCount,
  setDecreaseGuestCount,
  setAgentFilters,
  setAgentAddress,
  setIsFormFinishAgentSetup,
} from "../agentRedux";
import APIConfig from "../../../../APIs/config";
import { FEATURES, STRATEGIES } from "./../../../../Constants/General";
import "./style.css";

const budgetOptions = [
  { value: "100-250", label: "$100-250 per night" },
  { value: "250-500", label: "$250-500 per night" },
  { value: "500-750", label: "$500-750 per night" },
];

const AgentDetails = () => {
  const { checkIn, checkOut, guestCount, filters, isFormFinishAgentSetup } =
    useSelector((state) => state.agentRegisterDetails);
  const { handleSubmit, control, setValue, formState } = useFormContext();
  const classes = useStyles();
  const dispatch = useDispatch();

  const setHookFormValue = (label, value) => setValue(`${label}`, value);

  const currencyInitialState = { value: "", label: "Loading..." };
  const budgetInitialState = { value: "100-25", label: "$100-250 per night" };

  const [currencySelectedOption, setCurrencySelectedOption] =
    useState(currencyInitialState);
  const [localCurrency, setLocalCurrency] = useState(currencyInitialState);
  const currencyOptions = [
    { ...localCurrency },
    { value: "USD", label: "USD" },
  ];
  const [budgetSelectedOption, setBudgetSelectedOption] =
    useState(budgetInitialState);
  const [strategySelectedOption, setStrategySelectedOption] = useState(null);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const [isAgentInfoAvailable, setIsAgentInfoAvailable] = useState(false);
  const { src: agentImage } = useSelector(
    (state) => state.agentRegisterDetails.image
  );

  const guestCountIncreaseHandler = () => {
    dispatch(setIncreaseGuestCount());
  };
  const guestCountDecreaseHandler = () => {
    dispatch(setDecreaseGuestCount());
  };

  const userToken = useSelector((state) => state.authToken.authToken);

  const handleAgentDetailsSubmit = (details) => {
    setIsBtnDisabled(true);
    createAgentHandler(
      details,
      userToken,
      setIsBtnDisabled,
      isAgentInfoAvailable,
      agentImage
    ).then((data) => {
      if (data?.agent_name) {
        setIsAgentInfoAvailable(true);
        setIsBtnDisabled(false);
      }
    });
  };

  const formattedConstants = (constants) => {
    if (!Array.isArray(FEATURES) && !FEATURES.length) return;
    const data = constants.map((data) => {
      const value = data.text.split("_").join(" ");
      return { value, label: value };
    });
    return data;
  };

  useEffect(() => {
    let isMounted = true;
    fetch("https://ipapi.co/currency")
      .then((res) => res.text())
      .then((data) => {
        if (isMounted) {
          setCurrencySelectedOption({ value: data, label: data });
          setLocalCurrency({ value: data, label: data });
        }
      })
      .catch((err) => console.log(JSON.stringify(err)));

    return () => {
      isMounted = false;
    };
  }, []);

  const fetchAgent = () => {
    fetch(`${APIConfig?.FASTAPI_URL}/v1/user_agent_details`, {
      headers: {
        Authorization: "Bearer " + userToken?.access_token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data !== null) {
          setIsAgentInfoAvailable(true);
          const strategies = JSON.parse(data?.agent_strategies).map((s) => {
            return {
              value: s.name.toString().toLowerCase(),
              label:
                s.name.toString()[0].toUpperCase() +
                s.name.toString().substring(1),
            };
          });
          setStrategySelectedOption(strategies);

          dispatch(setAgentAddress({ label: data?.agent_address, value: "" }));
          dispatch(setAgentName(data?.agent_name));
          dispatch(setAgentImage(data?.agent_image));

          setHookFormValue("name", data?.agent_name);
          setHookFormValue("strategies", strategies);
          setHookFormValue("location", data?.agent_address);
        }
      })
      .catch((err) => JSON.stringify(err));
  };

  useEffect(() => {
    let isMounted = true;
    !isFormFinishAgentSetup &&
      isAgentInfoAvailable === false &&
      isMounted &&
      fetchAgent();

    return () => {
      isMounted = false;
      dispatch(setIsFormFinishAgentSetup(false));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box className={`${classes.boxWidth} agentDetails`}>
      <section className={classes.dealingOptions}>
        <h3 className={classes.title}>Dealing options</h3>
        <Box className={classes.dealingBox}>
          <ScopedCssBaseline>
            <div className={classes.boxPadding}>
              <Grid container spacing={0}>
                {/* <div className={classes.flexBetween}> */}
                <Grid
                  item
                  xs={12}
                  md={6}
                  className={classes.curr_choice_input_div_padding}>
                  <div>
                    <label htmlFor="currency" className={classes.label}>
                      Currency choice
                    </label>
                    <Select
                      inputId="currency"
                      onChange={(e) => setCurrencySelectedOption(e)}
                      options={currencyOptions}
                      styles={reactSelectStyles}
                      placeholder="Currency"
                      value={currencySelectedOption}
                    />
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  className={classes.budget_choice_input_div_padding}>
                  <label htmlFor="" className={classes.label}>
                    Budget
                  </label>
                  <Select
                    onChange={(e) => setBudgetSelectedOption(e)}
                    options={budgetOptions}
                    styles={reactSelectStyles}
                    placeholder="Budget"
                    value={budgetSelectedOption}
                  />
                </Grid>
                {/* </div> */}
                <Grid item xs={12}>
                  <label
                    htmlFor=""
                    className={clsx(classes.label, classes.strategy_label)}>
                    Strategy
                  </label>
                  <Controller
                    render={({ field }) => (
                      <Select
                        closeMenuOnSelect={false}
                        isMulti
                        isClearable={false}
                        onChange={(e) => {
                          field.onChange(e);
                          setStrategySelectedOption(e);
                        }}
                        options={formattedConstants(STRATEGIES).map((s) => ({
                          value: s?.value?.toString().toLowerCase(),
                          label:
                            s?.label?.toString()[0].toUpperCase() +
                            s?.label?.toString().substring(1),
                        }))}
                        placeholder="Strategy"
                        styles={strategyFieldStyles}
                        value={strategySelectedOption}
                      />
                    )}
                    rules={{ required: "Agent strategy is required" }}
                    control={control}
                    name="strategies"
                    defaultValue={false}
                  />
                  <ErrorMessage
                    errors={formState.errors}
                    name="strategies"
                    render={({ message }) => (
                      <span
                        style={{
                          color: "red",
                          marginLeft: "4px",
                          marginTop: "5px",
                          display: "inline-block",
                        }}>
                        {message}
                      </span>
                    )}
                  />
                </Grid>
              </Grid>
            </div>
          </ScopedCssBaseline>
        </Box>
      </section>
      <section className={classes.destinyOptions}>
        <h3 className={classes.title}>Destiny options</h3>
        <Box className={classes.destinyBox}>
          <ScopedCssBaseline>
            <div className={classes.boxPadding}>
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <label htmlFor="search" className={clsx(classes.label)}>
                    Where would you like to go
                  </label>
                  <div style={{ width: "100%" }}>
                    <GooglePlaceAutocomplete />
                  </div>
                  <ErrorMessage
                    errors={formState.errors}
                    name="location"
                    render={({ message }) => (
                      <span
                        style={{
                          color: "red",
                          marginLeft: "4px",
                          marginTop: "5px",
                          display: "inline-block",
                        }}>
                        {message}
                      </span>
                    )}
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  md={4}
                  className={classes.checkIn_choice_input_div_padding}>
                  <div>
                    <label htmlFor="checkIn" className={clsx(classes.label)}>
                      Check-in
                    </label>
                    <div className={classes.flex}>
                      <label htmlFor="checkIn">
                        <div className={classes.searchIconBox}>
                          <img src={calenderIcon} alt="calender" />
                        </div>
                      </label>
                      <DatePicker
                        id="checkIn"
                        className={clsx(
                          classes.input,
                          classes.fullWidth,
                          classes.iconInputBorderRadius
                        )}
                        placeholderText="29-05-2022"
                        dateFormat="dd-MM-yyyy"
                        selected={checkIn}
                        autoComplete="off"
                        onChange={(date) => dispatch(setCheckIn(date))}
                      />
                    </div>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={6}
                  md={4}
                  className={classes.checkOut_choice_input_div_padding}>
                  <div>
                    <label htmlFor="" className={clsx(classes.label)}>
                      Check-out
                    </label>
                    <div className={classes.flex}>
                      <label htmlFor="checkOut">
                        <div className={classes.searchIconBox}>
                          <img src={calenderIcon} alt="calender" />
                        </div>
                      </label>
                      <DatePicker
                        id="checkOut"
                        className={clsx(
                          classes.input,
                          classes.fullWidth,
                          classes.iconInputBorderRadius
                        )}
                        placeholderText="29-05-2022"
                        dateFormat="dd-MM-yyyy"
                        selected={checkOut}
                        autoComplete="off"
                        onChange={(date) => dispatch(setCheckOut(date))}
                      />
                    </div>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  className={classes.numOfGuest_choice_input_div_padding}>
                  <div>
                    <label htmlFor="" className={clsx(classes.label)}>
                      Number of guests
                    </label>
                    <div className={classes.guestCountBox}>
                      <ScopedCssBaseline>
                        <div className={classes.flexYCenter}>
                          <button
                            className={classes.guestCountBtn}
                            onClick={guestCountIncreaseHandler}>
                            <AddCircleOutlineIcon />
                          </button>
                          <p
                            className={clsx(
                              classes.guestCount,
                              classes.fullWidth
                            )}>
                            {guestCount}
                          </p>
                          <button
                            className={classes.guestCountBtn}
                            onClick={guestCountDecreaseHandler}>
                            <RemoveCircleOutlineIcon />
                          </button>
                        </div>
                      </ScopedCssBaseline>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="filterBox">
                    <label
                      htmlFor=""
                      className={clsx(classes.label, classes.mt22)}>
                      Filters
                    </label>
                    <Select
                      closeMenuOnSelect={false}
                      isMulti
                      isClearable={false}
                      onChange={(e) => dispatch(setAgentFilters(e))}
                      options={formattedConstants(FEATURES)}
                      styles={reactSelectFilterStyles}
                      defaultValue={filters}
                    />
                  </div>
                </Grid>
              </Grid>
            </div>
          </ScopedCssBaseline>
        </Box>
      </section>
      <button
        onClick={handleSubmit((data) => handleAgentDetailsSubmit(data))}
        className={clsx(classes.saveBtn, isBtnDisabled && classes.btnDisabled)}
        disabled={isBtnDisabled}>
        {isBtnDisabled ? (
          <CircularProgress size="25px" className={classes.white} />
        ) : isAgentInfoAvailable ? (
          `Update agent`
        ) : (
          `Save agent`
        )}
      </button>
    </Box>
  );
};

export default AgentDetails;

import React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { reactSelectStyles } from "../AgentDetails/styles";
import { components } from "react-select";
import SearchIcon from "@material-ui/icons/Search";
import { searchIconBox, styles } from "./styles";
import { useFormContext, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setAgentAddress } from "../agentRedux";

const Control = ({ children, ...rest }) => {
  return (
    components.Control && (
      <components.Control {...rest}>
        <div style={searchIconBox}>
          <SearchIcon />
        </div>{" "}
        {children}
      </components.Control>
    )
  );
};

const GooglePlaceAutocomplete = () => {
  const { control, setValue } = useFormContext();
  const dispatch = useDispatch();
  const { address } = useSelector((state) => state.agentRegisterDetails);

  useEffect(() => {
    setValue("location", address?.label);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Controller
      render={({ field }) => (
        <GooglePlacesAutocomplete
          apiKey={`${process.env.REACT_APP_KEY_GOOGLE}`}
          selectProps={{
            styles: { ...reactSelectStyles, ...styles },
            value: address,
            onChange: (e) => {
              dispatch(setAgentAddress(e));
              field.onChange(e?.label);
            },
            components: { Control },
            isClearable: true,
            placeholder: "Type a location",
          }}
        />
      )}
      rules={{ required: "Agent location required" }}
      control={control}
      name="location"
      defaultValue={false}
    />
  );
};

export default GooglePlaceAutocomplete;

import React, { useState, useEffect, useRef, useMemo } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useDispatch } from "react-redux";
import parse from "autosuggest-highlight/parse";
import throttle from "lodash/throttle";
import { updateAddressDetails } from "../../Containers/Search/searchRedux";
import { GridDropdown } from "./GridDropdown";
import { useStyles } from "./styles";
import { PLACE_ADDRESS_COMPONENT } from "../../Constants/General";
import { TEXT } from "../../Constants/Strings";
import { cityCodes } from "../../Utils/cityCodes";

const autocompleteService = { current: null };

const loadScript = (src, position, id) => {
  if (!position) {
    return;
  }
  const script = document.createElement("script");
  script.setAttribute("async", "");
  script.setAttribute("id", id);
  script.src = src;
  position.appendChild(script);
};

export const PlaceSearch = ({ searchTxt, setSearchTxt, styleClass }) => {
  const classes = useStyles();
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);
  const loaded = useRef(false);
  const dispatch = useDispatch();

  if (typeof window !== "undefined" && !loaded.current) {
    if (!document.querySelector("#google-maps")) {
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_KEY_GOOGLE}&libraries=places`,
        document.querySelector("head"),
        "google-maps"
      );
    }
    loaded.current = true;
  }

  const fetch = useMemo(
    () =>
      throttle((request, callback) => {
        autocompleteService.current.getPlacePredictions(request, callback);
      }, 200),
    []
  );

  useEffect(() => {
    let active = true;
    if (!autocompleteService) return undefined;

    const initGooglePlace = (isActive) => {
      if (
        !autocompleteService?.current &&
        window.google &&
        window.google.maps.places !== undefined
      ) {
        autocompleteService.current =
          new window.google.maps.places.AutocompleteService();
      }
      if (!autocompleteService.current) {
        return undefined;
      }
      if (inputValue === "") {
        setOptions(value ? [value] : []);
        return undefined;
      }
      fetch({ input: inputValue }, (results) => {
        if (isActive) {
          let newOptions = [];
          if (value) {
            newOptions = [value];
          }
          if (results) {
            newOptions = [...newOptions, ...results];
          }
          setOptions(newOptions);
        }
      });
    };
    initGooglePlace(active);
    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);

  const getAddressComponent = (address_components) => {
    // Get Country, County and City from address component
    const placeAddress = [
      PLACE_ADDRESS_COMPONENT.COUNTRY,
      PLACE_ADDRESS_COMPONENT.COUNTY,
      PLACE_ADDRESS_COMPONENT.CITY,
    ];

    return placeAddress.map((address) => {
      let postalCodeType = address_components.filter((aComp) =>
        aComp.types.some((typesItem) => typesItem === address)
      );
      if (postalCodeType != null && postalCodeType?.length > 0)
        return postalCodeType[0].long_name;
      return null;
    });
  };

  const handleAddressDetails = async (placeName, country, county, city) => {
    let cityCode = await cityCodes.filter(
      (cites) =>
        cites?.name.toString().toLowerCase() ===
        placeName?.toString().toLowerCase()
    );
    cityCode = cityCode[0]?.cityCode || null;
    dispatch(updateAddressDetails({ country, county, city, cityCode }));
  };

  const handleAutoComplete = async (val) => {
    if (!val) {
      return;
    }
    if (window.google) {
      const service = new window.google.maps.places.PlacesService(
        document.createElement("div")
      );
      //Call google place detail API
      service.getDetails({ placeId: val.place_id }, (place, status) => {
        if (status === "OK") {
          if (place && place?.address_components?.length !== 0) {
            const [country, county, city] = getAddressComponent(
              place.address_components
            );
            const placeName = place.address_components[0]?.long_name;
            handleAddressDetails(placeName, country, county, city);
          }
        }
      });
    }
  };

  return (
    <Autocomplete
      id="google-map-demo"
      className={classes.autoCompleteBox}
      classes={{ inputRoot: classes.inputRoot }}
      getOptionLabel={(option) =>
        typeof option === "string" ? option : option.description
      }
      getOptionSelected={(option, value) => option.place_id === value.place_id}
      filterOptions={(x) => x}
      options={options}
      autoComplete
      includeInputInList
      filterSelectedOptions
      value={searchTxt}
      onChange={(event, newValue) => {
        setOptions(newValue ? [newValue, ...options] : options);
        setValue(newValue);
        setSearchTxt(newValue);
        handleAutoComplete(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={TEXT.WHERE}
          variant="standard"
          fullWidth
        />
      )}
      renderOption={(option) => {
        const matches =
          option.structured_formatting.main_text_matched_substrings;
        const parts = parse(
          option.structured_formatting.main_text,
          matches.map((match) => [match.offset, match.offset + match.length])
        );

        return <GridDropdown parts={parts} option={option} />;
      }}
    />
  );
};

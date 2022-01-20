import React from "react";
import { useState as useStateMock } from "react";
import { useSelector as useSelectorMock } from "react-redux";
import { fireEvent } from "@testing-library/react";
import createSetup from "../../../Utils/setup";
import { SearchContainer } from "../../../Components/SearchContainer";
import { getHotels } from "../../../APIs/HotelService";
import { Filter } from "../../Filter";

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

jest.mock("../../../APIs/HotelService", () => {
  return {
    ...(jest.requireActual("../../../APIs/HotelService")),
    getHotels: jest.fn(),
  };
});

jest.mock("../../Filter", () => {
  return {
    ...(jest.requireActual("../../Filter")),
  };
});

const mockAppState = {
  search: {
    checkIn: "22-6-2021",
    checkOut: "26-6-2021",
    searchTxt: true,
    noOfGuest: 2,
    agentName: "Agent Name",
    currency: "EUR",
    addressDetails: {
      country:"United Kingdom",
      county:"Greater London",
      city:"London",
      cityCode:"LON",
    },
  },
  hotel: {
    hotel: {},
    filters: [],
    hotels:[]
  }
};

const setLoading = jest.fn();

describe("<SearchContainer />", () => {
  let setup;

  beforeEach(() => {
    useStateMock.mockImplementation(init => [init, setLoading]);
    useSelectorMock.mockImplementation(callback => {
      return callback(mockAppState);
    });
    setup = createSetup({
      component: SearchContainer,
    });
  });

  afterEach(jest.resetAllMocks);

  test("When it renders Then it should not crash", () => {
    const { container } = setup();
    expect(container).toBeTruthy();
  });

  test("When user click on the search button Then getHotels function should be called", () => {
    useSelectorMock.mockImplementation(callback => {
      return callback(mockAppState);
    });
    const { getByTestId } = setup();
    fireEvent.click(getByTestId("search-button"));
    expect(getHotels).toBeCalled();
  });

  test("When checkIn is set empty Then getHotels function should not be called", () => {
    const localMockState = {
      ...mockAppState,
      search: {
        checkIn: "",
        checkOut: "Check Out",
        searchTxt: "search keyword",
        noOfGuest: 2,
        agentName: "Agent Name",
        currency: "EUR",
        addressDetails: {
          country: "United Kingdom",
          county: "UK",
          city: "London",
        },
      },
    };
    useSelectorMock.mockImplementation(callback => {
      return callback(localMockState);
    });
    const { getByTestId } = setup();
    fireEvent.click(getByTestId("search-button"));
    expect(getHotels).not.toBeCalled();
  });

  test("When checkOut is set empty Then getHotels function should not be called", () => {
    const localMockState = {
      ...mockAppState,
      search: {
        checkIn: "Check In",
        checkOut: "",
        searchTxt: "search keyword",
        noOfGuest: 2,
        agentName: "Agent Name",
        currency: "EUR",
        addressDetails: {
          country: "United Kingdom",
          county: "UK",
          city: "London",
        },
      },
    };
    useSelectorMock.mockImplementation(callback => {
      return callback(localMockState);
    });
    const { getByTestId } = setup();
    fireEvent.click(getByTestId("search-button"));
    expect(getHotels).not.toBeCalled();
  });

  test("When searchTxt is unset Then getHotels function should not be called", () => {
    const localMockState = {
      ...mockAppState,
      search: {
        checkIn: "Check In",
        checkOut: "Check Out",
        searchTxt: null,
        noOfGuest: 2,
        agentName: "Agent Name",
        currency: "EUR",
        addressDetails: {
          country: "United Kingdom",
          county: "UK",
          city: "London",
        },
      },
    };
    useSelectorMock.mockImplementation(callback => {
      return callback(localMockState);
    });
    const { getByTestId } = setup();
    fireEvent.click(getByTestId("search-button"));
    expect(getHotels).not.toBeCalled();
  });

  test("When noOfGuest is set 0 Then getHotels function should not be called", () => {
    const localMockState = {
      ...mockAppState,
      search: {
        checkIn: "Check In",
        checkOut: "Check Out",
        searchTxt: "search keyword",
        noOfGuest: 0,
        agentName: "Agent Name",
        currency: "EUR",
        addressDetails: {
          country: "United Kingdom",
          county: "UK",
          city: "London",
        },
      },
    };
    useSelectorMock.mockImplementation(callback => {
      return callback(localMockState);
    });
    const { getByTestId } = setup();
    fireEvent.click(getByTestId("search-button"));
    expect(getHotels).not.toBeCalled();
  });

  test("When country is unset Then getHotels function should not be called", () => {
    const localMockState = {
      ...mockAppState,
      search: {
        checkIn: "Check In",
        checkOut: "Check Out",
        searchTxt: "search keyword",
        noOfGuest: 2,
        agentName: "Agent Name",
        currency: "EUR",
        addressDetails: {
          country: "",
          county: "UK",
          city: "London",
        },
      },
    };
    useSelectorMock.mockImplementation(callback => {
      return callback(localMockState);
    });
    const { getByTestId } = setup();
    fireEvent.click(getByTestId("search-button"));
    expect(getHotels).not.toBeCalled();
  });

  test("When agentName is unset Then getHotels function should not be called", () => {
    const localMockState = {
      ...mockAppState,
      search: {
        checkIn: "Check In",
        checkOut: "Check Out",
        searchTxt: "search keyword",
        noOfGuest: 2,
        agentName: "",
        currency: "EUR",
        addressDetails: {
          country: "United Kingdom",
          county: "UK",
          city: "London",
        },
      },
    };
    useSelectorMock.mockImplementation(callback => {
      return callback(localMockState);
    });
    const { getByTestId } = setup();
    fireEvent.click(getByTestId("search-button"));
    expect(getHotels).not.toBeCalled();
  });

  test("When currency is unset Then getHotels function should not be called", () => {
    const localMockState = {
      ...mockAppState,
      search: {
        checkIn: "Check In",
        checkOut: "Check Out",
        searchTxt: "search keyword",
        noOfGuest: 2,
        agentName: "Agent Name",
        currency: "",
        addressDetails: {
          country: "United Kingdom",
          county: "UK",
          city: "London",
        },
      },
    };
    useSelectorMock.mockImplementation(callback => {
      return callback(localMockState);
    });
    const { getByTestId } = setup();
    fireEvent.click(getByTestId("search-button"));
    expect(getHotels).not.toBeCalled();
  });

  test("When search is loading Then CircularProgress should be rendered", () => {
    useStateMock.mockImplementationOnce(() => [true, setLoading]);
    const { queryByTestId } = setup();
    expect(queryByTestId("circular-progress")).toBeTruthy();
  });

  test("When search is done Then SearchIcon should be rendered", () => {
    useStateMock.mockImplementationOnce(() => [false, setLoading]);
    const { queryByTestId } = setup();
    expect(queryByTestId("circular-progress")).toBeNull();
  });
});

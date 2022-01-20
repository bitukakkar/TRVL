import hotel1 from "../Assets/images/hotel1.jpg";
import hotel2 from "../Assets/images/hotel2.jpg";
import hotel3 from "../Assets/images/hotel3.jpg";
import hotel4 from "../Assets/images/hotel4.jpg";
import hotel5 from "../Assets/images/hotel5.jpg";
import hotel6 from "../Assets/images/hotel6.jpg";
import hotel7 from "../Assets/images/hotel7.jpg";
import hotel8 from "../Assets/images/hotel8.jpg";
import hotel9 from "../Assets/images/hotel9.jpg";

const hotelImages = [hotel1, hotel2, hotel3, hotel4, hotel5, hotel6, hotel7, hotel8, hotel9];

// NOTE: Hotel images are hardcoded and being set randomly
export const getRandomImages = () => {
  const indexOfRandomImage = Math.floor(Math.random() * hotelImages.length + 1) % hotelImages.length;
  return hotelImages[indexOfRandomImage];
};

export const formatString = (str) => {
  // Make first letter uppercase
  str = str.replace(/^\w/, (c) => c.toUpperCase());
  // Remove "_" and "-" from the string
  str = str.replace(/[_-]/g, " ");
  return str;
};

export const formatFloatVal = (num) => {
  return parseFloat(num).toFixed(2);
};

export const getAddressString = ({ cityName, lines, postalCode }) =>
  (postalCode && [lines, postalCode, cityName].join(", ")) || [lines, cityName].join(", ");

// NOTE: Transform the features data into an array to be used easily.
export const formatHotelsForFeatures = (hotels) => {
  // Change hotels data in required format
  try {
    if (hotels?.data?.length > 0) {
      hotels = hotels?.data?.map((hotelData) => hotelData?.hotel);
    }
    return hotels;
  } catch (e) {
    console.error(e);
    // return [];
  }
};

export const getMinMaxPrice = (rooms) => {
  // Return min and max price from rooms data
  const priceArray = rooms.map((room) => room?.price?.total);
  const min = Math.min(...priceArray);
  const max = Math.max(...priceArray);
  return { min, max };
};

export const generateQueryParams = (params) => {
  // Return query params string
  let query = "";
  let index = 0;
  for (const [key, value] of Object.entries(params)) {
    let str;
    if (value) {
      if (Array.isArray(value)) {
        let ArrStr = value?.length !== 0 && value?.join(",");
        str = index === 0 ? `?${key}=${ArrStr}` : `&${key}=${ArrStr}`;
      } else {
        str = index === 0 ? `?${key}=${value}` : `&${key}=${value}`;
      }
      index++;
      query += str;
    }
  }
  return query.split(" ").join("%20");
};

// convert number to currency format string
export const formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

export const getFormattedBookingData = (data) => {
  // return formated hotel data, converted from XML response
  try {
    const hotelReservation =
      data["soap:Envelope"]["soap:Body"]?.ProcessHotelReservationResponse?.OTA_HotelResRS?.HotelReservations?.HotelReservation;
    const address = hotelReservation?.ResGuests?.ResGuest?.Profiles?.ProfileInfo?.Profile?.Customer?.Address;
    const roomCode = hotelReservation?.RoomStays?.RoomStay?.RoomRates?.RoomRate["@attributes"]?.RoomTypeCode;
    const fullname = hotelReservation?.ResGuests?.ResGuest?.Profiles?.ProfileInfo?.Profile?.Customer?.PersonName;
    const email = hotelReservation?.ResGuests?.ResGuest?.Profiles?.ProfileInfo?.Profile?.Customer?.Email["#text"];
    const phone = hotelReservation?.ResGuests?.ResGuest?.Profiles?.ProfileInfo?.Profile?.Customer?.Telephone["@attributes"]?.PhoneNumber;
    const amount = hotelReservation?.RoomStays?.RoomStay?.Total["@attributes"]?.AmountAfterTax;
    const checkin = hotelReservation?.RoomStays?.RoomStay?.TimeSpan["@attributes"]?.Start;
    const checkout = hotelReservation?.RoomStays?.RoomStay?.TimeSpan["@attributes"]?.End;
    const guestCount = hotelReservation?.RoomStays?.RoomStay?.GuestCounts?.GuestCount["@attributes"]?.Count;

    const bookingData = {
      roomType: roomCode,
      guestCount: guestCount,
      name: `${fullname?.GivenName["#text"]} ${fullname?.Surname["#text"]}`,
      email: email,
      phone: phone,
      checkin: checkin,
      checkout: checkout,
      amount: amount,
      addressLine: address?.AddressLine["#text"],
      city: address?.CityName["#text"],
      country: address?.CountryName["#text"],
      postalCode: address?.PostalCode["#text"],
    };

    return bookingData;
  } catch (e) {
    console.log("Error", e);
    return null;
  }
};

// Convert XML to JSON
export const xmlToJson = (xml) => {
  // Create the return object
  var obj = {};

  if (xml.nodeType === 1) {
    // element
    // do attributes
    if (xml.attributes?.length > 0) {
      obj["@attributes"] = {};
      for (var j = 0; j < xml.attributes?.length; j++) {
        var attribute = xml.attributes.item(j);
        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
      }
    }
  } else if (xml.nodeType === 3) {
    // text
    obj = xml.nodeValue;
  }
  // do children
  if (xml.hasChildNodes()) {
    for (var i = 0; i < xml.childNodes?.length; i++) {
      var item = xml.childNodes.item(i);
      var nodeName = item.nodeName;
      if (typeof obj[nodeName] == "undefined") {
        obj[nodeName] = xmlToJson(item);
      } else {
        if (typeof obj[nodeName].push == "undefined") {
          var old = obj[nodeName];
          obj[nodeName] = [];
          obj[nodeName].push(old);
        }
        obj[nodeName].push(xmlToJson(item));
      }
    }
  }
  return obj;
};

// blocked hotels name list
const blockedHotelsList = [
  {
    name: "Intercontinental london park",
  },
  {
    name: "Jubilee hotel",
  },
  {
    name: "Novotel london city south",
  },
];

// Block/hide hotel using name
const blockHotelsUsingName = (hotels) => {
  if (!hotels || !hotels.length) return [];

  const filteredHotels = hotels.filter(
    (hotel) => !blockedHotelsList.some((blockedHotel) => hotel.name.toString().toUpperCase() === blockedHotel.name.toString().toUpperCase())
  );
  return filteredHotels;
};

// NOTE: Removed unnecessary data from the response before saving to redux store
export const trimHotelData = (hotels) => {
  const trimedDataHotels = hotels?.length > 0 && hotels?.map((hotel) => hotel);
  return blockHotelsUsingName(trimedDataHotels);
};

export const getFilteredHotels = (filtersFromStore, hotels) => {
  // Return filtered hotel based on features
  if (!filtersFromStore || filtersFromStore.length === 0) {
    return hotels;
  }

  const filteredHotels = hotels?.filter((hotel) => {
    let isPresent = false;
    filtersFromStore.forEach((filter) => {
      if (hotel?.amenities?.includes(filter)) {
        isPresent = true;
        return true;
      }
    });
    return isPresent;
  });

  return filteredHotels;
};

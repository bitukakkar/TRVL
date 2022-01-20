import React from "react";
import Carousel from "react-multi-carousel";
import createSetup from "../../../Utils/setup";
import { MatchedHotels } from "../../../Components/MatchedHotels";

jest.mock(
    "react-multi-carousel",
    () => (p) => (
        <div data-testid="carousel-item">
          <span>{p.name}</span>
        </div>
    ),
);

describe("<MatchedHotels />", () => {
  let setup;
  let props;

  beforeEach(() => {
    props = {
      matchedHotels: [
        {
          rooms: [
            {
              pricing: {
                baserate: 100,
              }
            }
          ],
          name: 'Hotel Name',
          image: 'hotel_image',
          star_rating: 5,
        }
      ]
    };
    setup = createSetup({
      component: MatchedHotels,
      props,
    });
  });

  afterEach(jest.resetAllMocks);

  test("When it renders Then it should not crash", () => {
    const { container } = setup();
    expect(container).toBeTruthy();
  });

  test("When matched hotels exist Then hotel card should be rendered", () => {
    const { getByTestId } = setup();
    expect(getByTestId('carousel-item')).toBeTruthy();
  });

  test("When matched hotels don't exist Then hotel card should not be rendered", () => {
    props.matchedHotels = [];
    const { queryByTestId } = setup();
    expect(queryByTestId('carousel-item')).toBeNull();
  });
});

import createSetup from "../../../Utils/setup";
import { MapMarker } from "../../../Components/MapMarker";

jest.mock("@react-google-maps/api", () => ({
  ...(jest.requireActual("@react-google-maps/api")),
  Marker: (props) => <div />,
}));

describe("<MapMarker />", () => {
  let setup;
  let props;

  beforeEach(() => {
    props = {
      marker: {
        address: 'Address',
        latitude: 0,
        longitude: 0,
      },
      clusterer: 'clusterer',
      val: {
        agent_id: 'real',
      },
      setShowModal: () => jest.fn(),
    };
    setup = createSetup({
      component: MapMarker,
      props,
    });
  });

  afterEach(jest.resetAllMocks);

  test("When it renders Then it should not crash", () => {
    const { container } = setup();
    expect(container).toBeTruthy();
  });
});

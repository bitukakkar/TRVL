import React from "react";
import createSetup from "../../../Utils/setup";
import { Dropdown } from "../../../Components/Dropdown";
import {fireEvent} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("<Dropdown />", () => {
  let setup;
  let props;

  const setValueMock = jest.fn();

  beforeEach(() => {
    props = {
      value: 'value',
      setValue: setValueMock,
      menuItems: [
        {
          value: 'menu_a',
          text: 'Menu A'
        },
        {
          value: 'menu_b',
          text: 'Menu B'
        },
        {
          value: 'menu_c',
          text: 'Menu C'
        },
      ],
      label: 'label',
    };
    setup = createSetup({
      component: Dropdown,
      props,
    });
  });

  afterEach(jest.resetAllMocks);

  test("When it renders Then it should not crash", () => {
    const { container } = setup();
    expect(container).toBeTruthy();
  });

  test("When label is set 'DropDown' Then 'DropDown' should be rendered", () => {
    const { getByLabelText } = setup({
      props: {
        label: 'Dropdown'
      }
    });
    expect(getByLabelText('Dropdown')).toBeTruthy();
  });
});

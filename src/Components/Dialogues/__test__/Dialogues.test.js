import React from "react";
import { useState as useStateMock } from "react";
import createSetup from "../../../Utils/setup";
import { Dialogues } from "../../../Components/Dialogues";

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

const setDialoguesData = jest.fn();

describe("<Dialogues />", () => {
  let setup;
  let props;

  beforeEach(() => {
    props = {
      bookingId: 1,
      setAction: () => jest.fn()
    };
    useStateMock.mockImplementation(init => [init, setDialoguesData]);
    setup = createSetup({
      component: Dialogues,
      props
    });
  });

  afterEach(jest.resetAllMocks);

  test("When it renders Then it should not crash", () => {
    const { container } = setup();
    expect(container).toBeTruthy();
  });

  test("When dialoguesData exists Then AgentDialogue should be rendered", () => {
    const dialogues = [
      {
        performative: "confirmation",
        message: "Confirmation Message",
      }
    ];
    useStateMock.mockImplementationOnce(() => [dialogues, setDialoguesData]);
    const { getByTestId } = setup();
    expect(getByTestId("dialogue")).toBeTruthy();
  });
});

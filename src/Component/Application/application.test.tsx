import React from "react";
import Application from "./Application.jsx";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Application component", () => {
  test("Application component should render it self", () => {
    render(<Application />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
    const labelElement = screen.getByLabelText(`Job Location`);
    const spanElement = screen.getByText('Reset');
    expect(spanElement).toBeInTheDocument();
    const spanElement2 = screen.getByText('Undo')
    const formElement = screen.getByTestId('custom-form');
    expect(formElement).toBeInTheDocument();
    expect(spanElement2).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();
    const checkboxElement = screen.getByRole("checkbox");
    expect(checkboxElement).toBeInTheDocument();
  });
});

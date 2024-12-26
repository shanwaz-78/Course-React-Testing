import React from "react";
import Application from "./Application.jsx";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Application component", () => {
  test("Application component should render it self", () => {
    render(<Application />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
    const heading1 = screen.getByRole("heading", { name: "kyle" });
    expect(heading1).toBeInTheDocument();
    const heading2 = screen.getByRole('heading', {name : "will"});
    expect(heading2).toBeInTheDocument();
    const labelElement = screen.getByLabelText(`Job Location`);
    expect(labelElement).toBeInTheDocument();
    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();
    const checkboxElement = screen.getByRole("checkbox");
    expect(checkboxElement).toBeInTheDocument();
  });
});

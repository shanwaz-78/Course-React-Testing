import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Greet from "./Component/Greet/Greet";

test("Greet should render with name ", () => {
  render(<Greet name="Kyle" />);
  const element = screen.getByText('Hello Kyle');
  console.log(element);
  expect(element).toBeInTheDocument();
});

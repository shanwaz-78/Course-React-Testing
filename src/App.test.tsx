import React from "react";
import App from "./App";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("show the text from screen ", () => {
  render(<App />);
  const element = screen.getByText(/hello/i);
  console.log(element);
  expect(element).toBeInTheDocument();
})
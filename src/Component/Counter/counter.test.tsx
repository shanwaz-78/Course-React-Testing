import { screen, render, fireEvent } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./Counter.tsx";
import React from "react";
import "@testing-library/jest-dom";

describe(`Counter`, () => {
  test(`renders correctly`, () => {
    render(<Counter />);
    const counterElement = screen.getByRole("heading");
    expect(counterElement).toBeInTheDocument();

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(buttons.length);
  });

  test(`render initial value`, () => {
    render(<Counter />);
    const initalValue = screen.getByText(`Counter: 0`);
    expect(initalValue).toBeInTheDocument();
  });

  test("count increments by 1 after button click", async () => {
    render(<Counter />);
    const incrementBtn = screen.getByRole("button", { name: "Increment" });

    await user.click(incrementBtn);

    const updatedValue = screen.getByText("Counter: 1");
    expect(updatedValue).toBeInTheDocument();
  });

  test("decrement by 1 after buton click", async () => {
    user.setup();
    render(<Counter />);
    const decrementBtn = screen.getByRole("button", { name: "Decrement" });
    await user.click(decrementBtn);
    const updatedValue = screen.getByText("Counter: 0");
    expect(updatedValue).toBeInTheDocument();
  });
});

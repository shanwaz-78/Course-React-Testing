import React from "react";
import { render, screen } from "@testing-library/react";
import { Skills } from "./Skills";
import "@testing-library/jest-dom";

describe("Skills Components", () => {
  const skills = ["TypeScript", "Node", "Express"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders correctly with items", () => {
    render(<Skills skills={skills} />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(skills.length);
  });
});

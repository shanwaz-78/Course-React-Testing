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

  test('renders Login Button', () => {
    render(<Skills skills={skills}/>)
    const button = screen.getByRole('button', {name : 'Login'});
    expect(button).toBeInTheDocument();
  })

  test('Start Learning button is not rendered', () => {
    render(<Skills skills={skills}/>)
    const startLearningBtn = screen.queryByRole('button', {name : "Start Learning"});
    expect(startLearningBtn).not.toBeInTheDocument();
  })

  test('Start Learning button is eventually rendered', async () => {
    render(<Skills skills={skills}/>)
    const startLearningBtn =  await screen.findByRole('button', {name : "Start Learning"});
    expect(startLearningBtn).toBeInTheDocument()
  })
});

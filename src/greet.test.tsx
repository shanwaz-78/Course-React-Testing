/* eslint-disable */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Greet from './Component/Greet/Greet';
import '@testing-library/jest-dom';

describe('Greet', () => {
  test('Greet should render with name', () => {
    render(<Greet name="Kyle" />);
    const element = screen.getByText('Hello Kyle');
    expect(element).toBeInTheDocument()
  });

  test('Greet should render \'Hello guest\' when no name is provided', () => {
    render(<Greet />);
    const element = screen.getByText('Hello guest');
    expect(element).toBeInTheDocument();
  });
});

describe('Greet with name only', () => {
  test('Greet should render the passed name', () => {
    render(<Greet name="will sentence" />);
    const element = screen.getByText('Hello will sentence');
    expect(element).toBeInTheDocument();
  });
});

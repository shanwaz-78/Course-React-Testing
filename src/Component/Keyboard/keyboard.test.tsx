import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import KeyboardInteraction from './KeyboardInterection.tsx';
import Counter from '../Counter/Counter';

describe('Keyboard', () => {
  test('should render correctly', () => {
    render(<KeyboardInteraction />);
    const heading = screen.getByPlaceholderText('Please write some text');
    expect(heading).toBeInTheDocument();
  });

  test('should handle input correctly', async () => {
    user.setup();
    render(<KeyboardInteraction />);
    const input = screen.getByPlaceholderText('Please write some text');
    const setBtn = screen.getByRole('button', { name: 'Set' });
    await user.type(input, '10');
    await user.click(setBtn);
    const heading = screen.getByText('10');
    expect(heading).toBeInTheDocument();
  });

  test('elements should focus in right order', async () => {
    user.setup();
    render(<Counter />);
    const incrementBtn = screen.getByRole('button', { name: 'Increment' });
    const decrementBtn = screen.getByRole('button', { name: 'Decrement' });
    await user.tab();
    expect(incrementBtn).toHaveFocus();
  });
});

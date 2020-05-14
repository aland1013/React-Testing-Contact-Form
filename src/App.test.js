import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders App without crashing', () => {
  render(<App />);
});

test('accepts a first name', async () => {
  const { getByPlaceholderText } = render(<App />);
  const firstName = getByPlaceholderText('Edd');

  await userEvent.type(firstName, 'Adam');
  console.log(firstName);
  expect(firstName).toHaveValue('Adam');
});

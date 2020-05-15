import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import App from './App';

test('renders App without crashing', () => {
  render(<App />);
});

test('accepts a first name', () => {
  const { getByPlaceholderText } = render(<App />);
  const firstName = getByPlaceholderText('Edd');

  userEvent.type(firstName, 'Adam');
  expect(firstName).toHaveValue('Adam');
});

test('accepts a last name', () => {
  const { getByPlaceholderText } = render(<App />);
  const lastName = getByPlaceholderText('Burke');

  userEvent.type(lastName, 'Land');
  expect(lastName).toHaveValue('Land');
});

test('accepts an email address', () => {
  const { getByPlaceholderText } = render(<App />);
  const email = getByPlaceholderText('bluebill1049@hotmail.com');

  userEvent.type(email, 'adam@gmail.com');
  expect(email).toHaveValue('adam@gmail.com');
});

test('accepts a message', () => {
  const { getByPlaceholderText } = render(<App />);
  const message = getByPlaceholderText('Enter message here');

  userEvent.type(message, 'Thanks');
  expect(message).toHaveValue('Thanks');
});

test('submits data when button is clicked', async () => {
  const { getByPlaceholderText, getByTestId } = render(<App />);

  userEvent.type(getByPlaceholderText('Edd'), 'Adam');
  userEvent.type(getByPlaceholderText('Burke'), 'Land');
  userEvent.type(
    getByPlaceholderText('bluebill1049@hotmail.com'),
    'adam@gmail.com'
  );
  userEvent.type(getByPlaceholderText('Enter message here'), 'Thanks');

  fireEvent.click(getByTestId('submit'));

  const data = await waitFor(() => getByTestId('data'));
});

test('sends a POST request', async () => {});

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
// tion one time for each element in the array.
//
//
//   Calls a defined callback function on each element of an array, and returns an array that contains the results.
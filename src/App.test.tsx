import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Go to product page link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Go to product page/i);
  expect(linkElement).toBeInTheDocument();
});

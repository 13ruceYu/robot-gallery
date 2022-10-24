import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('机器人', () => {
  render(<App />);
  const linkElement = screen.getByText(/机器人/i);
  expect(linkElement).toBeInTheDocument();
});

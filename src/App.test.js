import { render, screen } from '@testing-library/react';
import App from './App';

test('find Moratuwa', () => {
  render(<App />);
  const linkElement = screen.getByText(/Moratuwa Engineering Research Conference 2024/i);
  expect(linkElement).toBeInTheDocument();
});

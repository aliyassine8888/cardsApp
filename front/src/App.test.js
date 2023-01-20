import { render, screen } from '@testing-library/react';
import App from './App';


test('renders learn react link', () => {
  render(<App />);
  const appContainer = screen.getAllByTestId(/App/i);
  expect(appContainer).toBeInTheDocument();
});

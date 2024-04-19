import { render, screen } from '@testing-library/react';
import Header from '../Component/Header/Header';

test('renders button with correct text', () => {
  render(<Header/>);
  const buttonElement = screen.getByText('abc');
  expect(buttonElement).toBeInTheDocument();
});

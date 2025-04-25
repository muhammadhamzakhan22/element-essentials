import { render, screen } from '@testing-library/react';
import Loader from './Loader';
import '@testing-library/jest-dom';

describe('Loader', () => {
  it('renders the loader component', () => {
    render(<Loader />);
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });

  it('has the wrapper class', () => {
    render(<Loader />);
    const loader = screen.getByTestId('loader');
    expect(loader.className).toMatch(/wrapper/);
  });

  it('renders three dots', () => {
    render(<Loader />);
    const dots = screen.getAllByRole('presentation');
    expect(dots.length).toBe(3);
  });
});

import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';
import '@testing-library/jest-dom';

describe('Input', () => {
  it('renders with placeholder', () => {
    render(<Input placeholder="Type here..." />);
    expect(screen.getByPlaceholderText('Type here...')).toBeInTheDocument();
  });

  it('accepts value and onChange', () => {
    const handleChange = jest.fn();
    render(<Input value="hello" onChange={handleChange} />);
    const input = screen.getByDisplayValue('hello');
    fireEvent.change(input, { target: { value: 'world' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('is required when required prop is true', () => {
    render(<Input required />);
    expect(screen.getByRole('textbox')).toBeRequired();
  });

  it('is disabled when disabled prop is true', () => {
    render(<Input disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });
});

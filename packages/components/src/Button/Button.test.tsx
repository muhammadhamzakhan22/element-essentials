import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import '@testing-library/jest-dom';

describe('Button', () => {
    it('renders with primary variant', () => {
        render(<Button variant="primary">Click me</Button>);
        expect(screen.getByRole('button', { name: /Click me/i })).toHaveClass('primary');
    });

    it('is disabled when disabled prop is true', () => {
        render(<Button disabled>Click me</Button>);
        expect(screen.getByRole('button', { name: /Click me/i })).toBeDisabled();
    });
});
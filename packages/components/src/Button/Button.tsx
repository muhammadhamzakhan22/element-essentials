/**
 * Button component using design tokens with CSS Modules and TypeScript.
 */

import React from 'react';
import styles from './Button.module.css';

// Define button variants
type ButtonVariant = 'primary' | 'secondary' | 'accent';

interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

// Map variants to colors
// const variantStyles: Record<ButtonVariant, keyof ColorPalette> = {
//   primary: 'primary',
//   secondary: 'secondary',
//   accent: 'accent',
// };

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  onClick,
  disabled = false,
}) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${disabled ? styles.disabled : ''}`;

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
};

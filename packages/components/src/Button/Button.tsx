/**
 * Button component using design tokens with CSS Modules and TypeScript.
 */

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Button.module.css';

// Define button variants
type ButtonVariant = 'primary' | 'secondary' | 'accent';

type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  icon?: React.ReactNode;
  size?: ButtonSize;
  onClick?: () => void;
  disabled?: boolean;
}

// Map variants to colors
// const variantStyles: Record<ButtonVariant, keyof ColorPalette> = {
//   primary: 'primary',
//   secondary: 'secondary',
//   accent: 'accent',
// };

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  icon,
  size = 'md',
  onClick,
  disabled = false,
}) => {
  const buttonClass = [
    styles.button,
    styles[variant],
    styles[`button--${size}`],
    disabled ? styles.disabled : '',
  ].join(' ');

  return (
    <motion.button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      type="button"
      initial={{ scale: 0.96, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={!disabled ? { scale: 1.04 } : {}}
      transition={{ type: 'spring', stiffness: 320, damping: 24 }}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{children}</span>
    </motion.button>
  );
};

export default Button;

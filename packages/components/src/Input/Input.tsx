import React from 'react';
import {
  colors,
  typography,
  spacing,
} from '@element-essentials/tokens/src/theme';
import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  return (
    <div className={`${styles.eeMessageBox} ${className}`}>
      <input className={styles.eeMessageInput} type="text" {...props} />
    </div>
  );
};

export default Input;

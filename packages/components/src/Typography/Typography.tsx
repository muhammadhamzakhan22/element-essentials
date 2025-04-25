import React from 'react';
import styles from './Typography.module.css';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'overline';

// Restrict to HTML tags only (exclude SVG and other non-HTML tags)
type AllowedHTMLTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  children: React.ReactNode;
  className?: string;
  component?: AllowedHTMLTags;
}

const variantToElement: Record<TypographyVariant, keyof JSX.IntrinsicElements> =
  {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
    caption: 'span',
    overline: 'span',
  };

const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  children,
  className = '',
  component,
  ...rest
}) => {
  const allowedTags: AllowedHTMLTags[] = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'span',
  ];
  const Component = (component ||
    variantToElement[variant] ||
    'span') as keyof JSX.IntrinsicElements;

  // Runtime warning for non-allowed tags
  if (component && !allowedTags.includes(component)) {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn(
        `[Typography] The 'component' prop ('${component}') is not an allowed HTML tag. Only these are allowed: ${allowedTags.join(', ')}`
      );
    }
  }

  return React.createElement(
    Component as keyof JSX.IntrinsicElements,
    {
      className: `${styles[variant]} ${className}`.trim(),
      ...(rest as React.HTMLAttributes<HTMLElement>),
    },
    children
  );
};

export default Typography;

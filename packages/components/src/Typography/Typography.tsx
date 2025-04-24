import React from "react";
import styles from "./Typography.module.css";

export type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "overline";

// Utility type to restrict to HTML tags only (exclude SVG tags)
type HTMLTags = Exclude<keyof JSX.IntrinsicElements, keyof SVGElementTagNameMap>;

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  children: React.ReactNode;
  className?: string;
  component?: HTMLTags;
}

const variantToElement: Record<TypographyVariant, keyof JSX.IntrinsicElements> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  caption: "span",
  overline: "span",
};

export const Typography: React.FC<TypographyProps> = ({
  variant = "body1",
  children,
  className = "",
  component,
  ...rest
}) => {
  const Component = component || variantToElement[variant] || "span";
  return (
    <Component className={`${styles[variant]} ${className}`.trim()} {...rest}>
      {children}
    </Component>
  );
};

export default Typography;

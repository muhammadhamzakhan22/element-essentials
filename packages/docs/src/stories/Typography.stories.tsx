import React from "react";
import { Typography } from "../../../components/src/Typography/Typography";
import type { Meta, StoryObj } from "@storybook/react";

type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "overline";

const variants: TypographyVariant[] = [
  "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "caption", "overline"
];

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Typography>;

export const AllVariants: Story = {
  render: () => (
    <div>
      {variants.map((variant) => (
        <Typography key={variant} variant={variant} style={{ marginBottom: 12 }}>
          {variant.charAt(0).toUpperCase() + variant.slice(1)} Typography
        </Typography>
      ))}
    </div>
  ),
};

export const Playground: Story = {
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
    variant: "body1",
  },
};

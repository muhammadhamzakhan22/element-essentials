import React from 'react';
import { Button } from '@element-essentials/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A button component from the Element Essentials library.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// --- Refactored: Systematic Button Variants Showcase ---

const buttonVariants = ['primary', 'secondary', 'accent', 'error', 'success'] as const;
const buttonSizes = ['sm', 'md', 'lg'] as const;

type Variant = typeof buttonVariants[number];
type Size = typeof buttonSizes[number];

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {buttonVariants.map((variant) => (
        <div key={variant}>
          <div style={{ marginBottom: 8, fontWeight: 600 }}>{variant.charAt(0).toUpperCase() + variant.slice(1)} Variant</div>
          <div style={{ display: 'flex', gap: 16 }}>
            {buttonSizes.map((size) => (
              <Button key={size} variant={variant} size={size}>
                {`${variant.charAt(0).toUpperCase() + variant.slice(1)} ${size.toUpperCase()}`}
              </Button>
            ))}
            <Button variant={variant} size="md" disabled>
              {`${variant.charAt(0).toUpperCase() + variant.slice(1)} Disabled`}
            </Button>
          </div>
        </div>
      ))}
    </div>
  ),
};

// --- Classic Storybook Named Exports for Compatibility ---
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'md',
  },
};
export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    size: 'md',
  },
};
export const Accent: Story = {
  args: {
    children: 'Accent Button',
    variant: 'accent',
    size: 'md',
  },
};
export const Error: Story = {
  args: {
    children: 'Error Button',
    variant: 'error',
    size: 'md',
  },
};
export const Success: Story = {
  args: {
    children: 'Success Button',
    variant: 'success',
    size: 'md',
  },
};
// --- Icon Button Example (kept for demonstration) ---
export const WithIcon: Story = {
  args: {
    children: 'Save Post',
    variant: 'primary',
    icon: (
      <svg
        viewBox="0 -0.5 25 25"
        height="20px"
        width="20px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="1.5"
          d="M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z"
          clipRule="evenodd"
          fillRule="evenodd"
        ></path>
      </svg>
    ),
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    disabled: true,
    size: 'md',
  },
};

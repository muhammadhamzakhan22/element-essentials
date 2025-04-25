import React from 'react';
import { Loader } from '@element-essentials/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60vh',
      }}
    >
      <Loader />
    </div>
  ),
};

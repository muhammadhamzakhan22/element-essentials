import React from 'react';
import Loader from '../../../components/src/Loader/Loader';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  render: () => <Loader />,
};

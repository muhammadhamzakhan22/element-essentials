import React from 'react';
import { Input } from '@element-essentials/components';

export default {
  title: 'Components/Input',
  component: Input,
};

export const Default = () => <Input placeholder="Default" />;
export const WithValue = () => (
  <Input placeholder="With value" value="Hello world" readOnly />
);
export const Disabled = () => <Input placeholder="Disabled" disabled />;
export const Required = () => <Input placeholder="Required" required />;
export const CustomWidth = () => (
  <Input placeholder="Custom width" style={{ width: 280 }} />
);

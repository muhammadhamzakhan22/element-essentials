/**
 * Storybook stories for Button component.
 */

import { Button } from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        variant: {
            control: { type: 'select', options: ['primary', 'secondary', 'accent'] },
        },
        disabled: { control: 'boolean' },
        children: { control: 'text' },
    },
};

export const Primary = {
    args: {
        variant: 'primary',
        children: 'Primary Button',
    },
};

export const Secondary = {
    args: {
        variant: 'secondary',
        children: 'Secondary Button',
    },
};

export const Accent = {
    args: {
        variant: 'accent',
        children: 'Accent Button',
    },
};

export const Disabled = {
    args: {
        variant: 'primary',
        children: 'Disabled Button',
        disabled: true,
    },
};
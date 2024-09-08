import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SdButton, { type SdButtonProps } from './SdButton';
import { SdIcon } from '../SdIcon';

const meta: Meta<SdButtonProps> = {
    title: 'Inputs/SdButton',
    component: SdButton,
    decorators: (Story, { args }) =>
        args.variant === 'icon' ? (
            <SdButton {...args}>
                <SdIcon.GearIcon />
            </SdButton>
        ) : (
            <Story {...args} />
        ),
};
type Story = StoryObj<typeof meta>;
export default meta;

export const Primary: Story = {
    argTypes: {
        children: {
            control: { type: 'text' },
        },
        loading: {
            control: { type: 'boolean' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
        selected: {
            control: { type: 'boolean' },
        },
        fullwidth: {
            control: { type: 'boolean' },
        },
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'text', 'icon'],
        },
    },
    args: {
        variant: 'primary',
        children: 'Primary Button',
        disabled: false,
        selected: false,
        loading: false,
        fullwidth: false,
    },
};

export const Secondary: Story = {
    args: {
        ...Primary.args,
        variant: 'secondary',
        children: 'Secondary Button',
    },
    argTypes: Primary.argTypes,
};

export const Text: Story = {
    args: {
        ...Primary.args,
        variant: 'text',
        children: 'Text Button',
    },
    argTypes: Primary.argTypes,
};

export const Icon: Story = {
    args: {
        ...Primary.args,
        variant: 'icon',
    },
    argTypes: Primary.argTypes,
};
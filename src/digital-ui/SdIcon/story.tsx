import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SdIcon as component } from './index';
import type { SdIconProps } from './types';
import StoryBlock from '../storybook';

const meta: Meta<SdIconProps> = {
    title: 'Icons/SdIcon',
    decorators: (_, { args }) =>
        args.fullwidth ? (
            <StoryBlock.Block resizable bordered>
                <component.AccountIcon {...args} />
            </StoryBlock.Block>
        ) : (
            <StoryBlock.Block wrap gap={1}>
                {Object.values(component).map((Icon, i) => (
                    <Icon key={i} {...args} />
                ))}
            </StoryBlock.Block>
        ),
};
type Story = StoryObj<typeof meta>;
export default meta;

export const Small: Story = {
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['filled', 'outlined'],
        },
        color: {
            control: { type: 'select' },
            options: ['primary', 'disabled', 'text'],
        },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
        direction: {
            control: { type: 'select' },
            options: ['up', 'down', 'left', 'right'],
        },
        animation: {
            control: { type: 'boolean' },
        },
        fullwidth: {
            control: { type: 'boolean' },
        },
    },
    args: {
        color: 'text',
        variant: 'filled',
        size: 'small',
        direction: 'up',
        animation: false,
        fullwidth: false,
    },
};

export const Medium: Story = {
    args: {
        ...Small.args,
        size: 'medium',
    },
    argTypes: Small.argTypes,
};

export const Large: Story = {
    args: {
        ...Small.args,
        size: 'large',
    },
    argTypes: Small.argTypes,
};

export const FullWidth: Story = {
    args: {
        ...Small.args,
        fullwidth: true,
    },
    argTypes: Small.argTypes,
};

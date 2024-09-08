import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Component, { type SdAvatarProps } from './SdAvatar';
import StoryBlock from '../storybook';

const meta: Meta<SdAvatarProps> = {
    title: 'Images/SdAvatar',
    decorators: (_, { args }) =>
        args.fullwidth ? (
            <StoryBlock.Block resizable bordered>
                <Component {...args} />
            </StoryBlock.Block>
        ) : (
            <Component {...args} onClick={() => console.log('lol')} />
        ),
};
type Story = StoryObj<typeof meta>;
export default meta;

export const Small: Story = {
    argTypes: {
        color: {
            control: { type: 'select' },
            options: ['primary', 'disabled', 'text'],
        },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
        fullwidth: {
            control: { type: 'boolean' },
        },
        src: {
            control: { type: 'text' },
        },
    },
    args: {
        color: 'text',
        size: 'small',
        fullwidth: false,
        src: '',
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

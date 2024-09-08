import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SdButtonUser, { type SdButtonUserProps } from './SdButtonUser';

const meta: Meta<SdButtonUserProps> = {
    title: 'Inputs/SdButtonUser',
    component: SdButtonUser,
    decorators: (Story, { args }) => {
        const handleClick = (userId: string) => console.log(`Clicked:${userId}`);
        return <Story {...args} onClick={handleClick} />;
    },
};
type Story = StoryObj<typeof meta>;
export default meta;

export const Primary: Story = {
    argTypes: {
        username: {
            control: { type: 'text' },
        },
        id: {
            control: { type: 'text' },
        },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
    },
    args: {
        username: 'John Doe',
        id: '1',
        size: 'small',
    },
};

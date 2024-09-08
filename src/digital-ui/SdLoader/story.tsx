import type { Meta, StoryObj } from '@storybook/react';
import component from './SdLoader';

const meta: Meta = { title: 'Loaders/SdLoader', component };
type Story = StoryObj<typeof meta>;
export default meta;

export const Primary: Story = {
    argTypes: {
        color: {
            control: { type: 'select' },
            options: ['primary', 'text', 'disabled'],
        },
        size: {
            control: { type: 'select' },
            options: ['small', 'large', 'medium'],
        },
    },
    args: {
        color: undefined,
        size: undefined,
    },
};

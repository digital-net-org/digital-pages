import type { Meta, StoryObj } from '@storybook/react';
import component, { type SdTextProps } from './SdText';

const meta: Meta<SdTextProps> = {
    title: 'Text/SdText',
    component,
};
type Story = StoryObj<typeof meta>;
export default meta;

export const Primary: Story = {
    argTypes: {
        children: {
            control: { type: 'text' },
        },
        bold: {
            control: { type: 'boolean' },
        },
        italic: {
            control: { type: 'boolean' },
        },
        variant: {
            control: { type: 'select' },
            options: ['h1', 'h2', 'h3', 'text', 'caption'],
        },
    },
    args: {
        children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        bold: false,
        italic: false,
        variant: 'text',
    },
};

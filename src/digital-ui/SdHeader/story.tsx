import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SdHeader, { type SdHeaderProps } from './SdHeader';
import StoryBlock from '../storybook';

const meta: Meta<SdHeaderProps> = {
    title: 'Layout/SdHeader',
    component: SdHeader,
    decorators: _ => {
        return (
            <StoryBlock.Page>
                <SdHeader>
                    <StoryBlock.Block bordered>Content</StoryBlock.Block>
                    <StoryBlock.Block bordered>Content</StoryBlock.Block>
                    <StoryBlock.Block bordered>Content</StoryBlock.Block>
                </SdHeader>
            </StoryBlock.Page>
        );
    },
    argTypes: {},
};
type Story = StoryObj<typeof meta>;
export default meta;

export const Primary: Story = {};

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SdPopOver, { type SdPopOverProps } from './SdPopOver';
import StoryBlock from '../storybook';
import { SdButton } from '@/digital-ui';

const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const meta: Meta<SdPopOverProps> = {
    title: 'Layout/SdPopOver',
    component: SdPopOver,
    decorators: (Story, { args }) => {
        const [open, setOpen] = React.useState(false); // eslint-disable-line react-hooks/rules-of-hooks
        const [direction, setDirection] = React.useState<'left' | 'right'>('left'); // eslint-disable-line react-hooks/rules-of-hooks
        const [includeButton, setIncludeButton] = React.useState(false); // eslint-disable-line react-hooks/rules-of-hooks
        const [backgroundColor, setBackgroundColor] = React.useState(getRandomColor()); // eslint-disable-line react-hooks/rules-of-hooks

        const ref = React.useRef(null); // eslint-disable-line react-hooks/rules-of-hooks
        return (
            <StoryBlock.Page>
                <StoryBlock.Block full centerContent flexDir="column" gap={5} color={backgroundColor}>
                    <StoryBlock.Block gap={2}>
                        <SdButton onClick={() => setDirection(direction === 'left' ? 'right' : 'left')}>
                            Change direction
                        </SdButton>
                        <SdButton onClick={() => setIncludeButton(includeButton => !includeButton)}>
                            Include anchor
                        </SdButton>
                    </StoryBlock.Block>
                    <StoryBlock.Block>
                        <SdButton ref={ref} onClick={() => setOpen(!open)}>
                            Toggle
                        </SdButton>
                    </StoryBlock.Block>
                </StoryBlock.Block>
                <SdPopOver
                    anchor={ref.current}
                    includeAnchor={includeButton}
                    open={open}
                    onOpen={() => setBackgroundColor(getRandomColor())}
                    onClose={() => setOpen(!open)}
                    direction={direction}>
                    <div>Some cool content</div>
                </SdPopOver>
            </StoryBlock.Page>
        );
    },
};

type Story = StoryObj<typeof meta>;
export default meta;

export const Primary: Story = {};

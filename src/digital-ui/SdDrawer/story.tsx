import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SdDrawer, { type SdDrawerProps } from './SdDrawer';
import { SdLogo } from '../SdLogo';
import StoryBlock from '../storybook';

const meta: Meta<SdDrawerProps> = {
    title: 'Layout/SdDrawer',
    component: SdDrawer,
    decorators: _ => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [title, setTitle] = React.useState(true);
        const handleTitle = () => setTitle(!title);

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [direction, setDirection] = React.useState('left');
        const handleDirection = () => setDirection(direction === 'left' ? 'right' : 'left');

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [open, setOpen] = React.useState(true);
        const onClose = () => setOpen(!open);

        // eslint-disable-next-line react-hooks/rules-of-hooks
        React.useEffect(() => {
            !open ? setTimeout(() => setOpen(true), 2000) : null;
        }, [open]);

        return (
            <StoryBlock.Page>
                <SdDrawer
                    direction={direction as 'left' | 'right'}
                    open={open}
                    onClose={onClose}
                    renderHeader={() => (title ? <SdLogo /> : <div>Text title</div>)}>
                    <StoryBlock.List>
                        <StoryBlock.List.Row>
                            Change direction: <button onClick={handleDirection}>{direction}</button>
                        </StoryBlock.List.Row>
                        <StoryBlock.List.Row>
                            Change title: <button onClick={handleTitle}>{title ? 'Logo' : 'Text'}</button>
                        </StoryBlock.List.Row>
                    </StoryBlock.List>
                </SdDrawer>
            </StoryBlock.Page>
        );
    },
    argTypes: {},
};
type Story = StoryObj<typeof meta>;
export default meta;

export const ActionsTest: Story = {
    args: {
        direction: 'left',
        open: true,
    },
};

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import component, { type SdSwitchProps } from './SdSwitch';

const meta: Meta<SdSwitchProps> = {
    title: 'Inputs/SdSwitch',
    component,
    decorators: Story => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [value, setValue] = React.useState(false);
        const onChange = (checked: boolean) => setValue(checked);
        return (
            <div>
                <Story value={value} onChange={onChange} />
            </div>
        );
    },
    argTypes: {
        name: {
            control: { type: 'text' },
        },
    },
};
type Story = StoryObj<typeof meta>;
export default meta;

export const Primary: Story = {
    args: {
        name: 'switch',
    },
};

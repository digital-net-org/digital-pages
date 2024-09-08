import type { Meta, StoryObj } from '@storybook/react';
import SdForm, { type SdFormProps } from './SdForm';

const meta: Meta<SdFormProps> = {
    title: 'Inputs/SdForm',
    component: SdForm,
    decorators: (_, { args }) => {
        const handleSubmit = (data: any) => {
            console.log('data', data);
        };
        return (
            <SdForm
                onSubmit={handleSubmit}
                inputFields={[
                    { defaultValue: '', name: 'Required', type: 'text', required: true },
                    { defaultValue: '', name: 'Optional', type: 'text' },
                    { defaultValue: '', name: 'Password', type: 'password' },
                    { defaultValue: '', name: 'Email', type: 'email' },
                    {
                        defaultValue: '',
                        name: 'Pattern',
                        pattern: '^[A-Za-z]+$',
                        patternMessage: 'Only letters are allowed',
                    },
                    { defaultValue: true, name: 'switch', type: 'switch' },
                ]}
            />
        );
    },
};
type Story = StoryObj<typeof meta>;
export default meta;

export const Primary: Story = {
    argTypes: {},
    args: {},
};

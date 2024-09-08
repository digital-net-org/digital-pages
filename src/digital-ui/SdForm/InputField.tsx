import React from 'react';
import { SdSwitch } from '../SdSwitch';
import { SdTextInput, type SdTextInputProps } from '../SdTextInput';

export type FormFieldValue = string | number | boolean | undefined;

export interface FieldProps extends FormField {
    onChange: (value: any) => void;
}

export interface FormField extends Omit<SdTextInputProps, 'value' | 'type' | 'onChange'> {
    value: FormFieldValue;
    name: string;
    label?: string;
    type?: SdTextInputProps['type'] | 'switch';
}

export default function InputField({ value, onChange, label, type, ...props }: FieldProps) {
    if (type === 'switch') {
        return <SdSwitch value={value as any} onChange={onChange as any} {...props} />;
    }

    return (
        <React.Fragment>
            <label className="SdForm-label">{label || props.name}</label>
            <SdTextInput {...props} type={type} value={value as any} onChange={onChange as any} />
        </React.Fragment>
    );
}

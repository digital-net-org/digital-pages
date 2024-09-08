import React from 'react';
import { useClassName } from '@/utils';
import { SdButton } from '../SdButton';
import InputField, { type FormField, type FormFieldValue } from './InputField';
import './styles.css';
import { useFormState } from './useFormState';

export interface SdFormProps {
    onSubmit: (data: Record<string, FormFieldValue>) => void;
    inputFields: Array<Omit<{ defaultValue: FormFieldValue } & FormField, 'value'>>;
    loading?: boolean | undefined;
}

export default function SdForm(props: SdFormProps) {
    const [state, setState] = useFormState(props.inputFields);
    const className = useClassName(props, 'SdForm');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSubmit(state);
    };

    return (
        <form className={className} onSubmit={handleSubmit}>
            {props.inputFields.map(field => (
                <div key={field.name} className="SdForm-row">
                    <InputField
                        {...field}
                        onChange={v => setState(field.name, v)}
                        value={state[field.name]}
                        loading={props.loading}
                    />
                </div>
            ))}
            <div className="SdForm-actions">
                <SdButton loading={props.loading} type="submit">
                    Submit
                </SdButton>
            </div>
        </form>
    );
}

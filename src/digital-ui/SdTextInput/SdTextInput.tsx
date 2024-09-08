import React from 'react';
import { useClassName } from '@/utils';
import './styles.css';

export interface SdTextInputProps {
    value: string;
    onChange: (value: string) => void;
    pattern?: string;
    patternMessage?: string;
    type?: 'text' | 'password' | 'email';
    required?: boolean | undefined;
    loading?: boolean | undefined;
    disabled?: boolean | undefined;
    fullwidth?: boolean | undefined;
}

export default function SdTextInput({ type = 'text', patternMessage, ...props }: SdTextInputProps) {
    const [hasError, setHasError] = React.useState(false);
    const [selected, setSelected] = React.useState(false);
    const className = useClassName({ ...props, error: hasError, selected }, 'SdTextInput');

    const testValue = React.useCallback(
        (value: string) => !props.pattern || new RegExp(props.pattern).test(value),
        [props.pattern],
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (props.loading) return;
        const isValid = e.target.value === '' || testValue(e.target.value);
        setHasError(!isValid);
        handlePattern(e, !isValid);
        props.onChange(e.target.value);
    };

    const handlePattern = (e: React.ChangeEvent<HTMLInputElement>, error: boolean) => {
        if (error) {
            e.target.setCustomValidity(patternMessage ?? 'Invalid input');
        } else {
            e.target.setCustomValidity('');
        }
    };

    const handleSelect = () => setSelected(true);
    const handleBlur = () => setSelected(false);

    return (
        <div className={className}>
            <input
                pattern={props.pattern}
                disabled={props.disabled}
                type={type}
                onChange={handleChange}
                onSelect={handleSelect}
                onBlur={handleBlur}
            />
        </div>
    );
}

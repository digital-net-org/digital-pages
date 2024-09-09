import React from 'react';
import './styles.css';

export interface SdSwitchProps {
    name?: string;
    value: boolean;
    onChange: (checked: boolean) => void;
}

export default function SdSwitch(props: SdSwitchProps) {
    return (
        <label className="SdSwitch-label" htmlFor={props.name}>
            <input
                {...props}
                className="SdSwitch-input"
                type="checkbox"
                id={props.name}
                name={props.name}
                value={JSON.stringify(props.value)}
                checked={props.value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e.target.checked)}
            />
            <span className="SdSwitch-slider"></span>
        </label>
    );
}

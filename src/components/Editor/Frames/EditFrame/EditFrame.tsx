import React from 'react';
import { type Data, Puck } from '@measured/puck';
import { useClassName } from '@/utils';
import './styles.css';

interface EditProps {
    disabled?: boolean;
    data?: Data | undefined;
}

export default function EditFrame(props: EditProps) {
    const disabled = React.useMemo(() => props.disabled || !props.data, [props.disabled, props.data]);
    const className = useClassName({ disabled }, 'Editor-edit');
    return <div className={className}>{disabled ? null : <Puck.Fields />}</div>;
}

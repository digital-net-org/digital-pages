import { type Data, Puck } from '@measured/puck';
import { useClassName } from '@safari-digital/digital-ui';
import './RenderFrame.styles.css';
import React from 'react';

interface RenderProps {
    disabled?: boolean;
    data?: Data | undefined;
}

export default function RenderFrame(props: RenderProps) {
    const disabled = React.useMemo(() => props.disabled || !props.data, [props.disabled, props.data]);
    const className = useClassName({ disabled }, 'PageEditor-frame-render');

    return <div className={className}>{disabled ? null : <Puck.Preview />}</div>;
}

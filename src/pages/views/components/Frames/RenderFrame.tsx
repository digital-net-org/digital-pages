import { useEditor } from '@/puck';
import { type Data, Puck } from '@measured/puck';
import { useClassName } from '@safari-digital/digital-ui';
import React from 'react';
import './RenderFrame.styles.css';

interface RenderProps {
    disabled?: boolean;
    data?: Data | undefined;
}

export default function RenderFrame(props: RenderProps) {
    const { activeTool } = useEditor();
    const disabled = React.useMemo(
        () => props.disabled || !props.data || activeTool?.key === 'views',
        [props, activeTool?.key],
    );
    const className = useClassName({ disabled }, 'PageEditor-frame-render');
    return <div className={className}>{disabled ? null : <Puck.Preview />}</div>;
}

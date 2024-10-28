import { useEditor } from '@/puck';
import { type Data, Puck } from '@measured/puck';
import { useClassName } from '@safari-digital/digital-ui';
import React from 'react';
import './EditFrame.styles.css';

interface EditProps {
    disabled?: boolean;
    data?: Data | undefined;
}

export default function EditFrame(props: EditProps) {
    const { activeTool } = useEditor();
    const disabled = React.useMemo(
        () => props.disabled || !props.data || activeTool?.key === 'views',
        [props, activeTool?.key],
    );
    const className = useClassName({ disabled }, 'PageEditor-frame-edit');
    return <div className={className}>{disabled ? null : <Puck.Fields />}</div>;
}

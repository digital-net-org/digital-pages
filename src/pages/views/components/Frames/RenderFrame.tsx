import { useEditor } from '@/editor';
import { type Data, Puck } from '@measured/puck';
import { useClassName } from '@safari-digital/digital-ui';
import React from 'react';
import './RenderFrame.styles.css';

interface RenderProps {
    toolKey: string;
    disabled?: boolean;
    data?: Data | undefined;
}

export default function RenderFrame(props: RenderProps) {
    const { activeTool } = useEditor();
    const disabled = React.useMemo(
        () => props.disabled || !props.data || activeTool?.key !== props.toolKey,
        [props, activeTool?.key],
    );
    const className = useClassName({ disabled }, 'PageEditor-frame-render');

    React.useEffect(() => {
        console.log('disabled', disabled);
        console.log('props', props.toolKey);
        console.log('activeTool', activeTool?.key);
    }, [disabled, props]);

    return <div className={className}>{disabled ? null : <Puck.Preview />}</div>;
}

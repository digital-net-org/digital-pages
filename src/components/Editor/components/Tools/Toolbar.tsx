import React from 'react';
import { SdButton } from '@/digital-ui';
import { useClassName } from '@/utils';
import useTool from './useTool';
import './styles.css';

interface ToolbarProps {
    disabled?: boolean;
}

export default function Toolbar(props: ToolbarProps) {
    const className = useClassName(props, 'Editor-toolbar');
    const { tools, activeTool, setActiveTool } = useTool();

    return (
        <React.Fragment>
            <div className={className}>
                {tools.map(tool => (
                    <SdButton
                        variant="icon"
                        key={tool.key}
                        selected={tool.key === activeTool?.key}
                        onClick={() => setActiveTool(tool.key)}>
                        {React.createElement(tool.icon, { variant: 'filled', size: 'medium' })}
                    </SdButton>
                ))}
            </div>
        </React.Fragment>
    );
}

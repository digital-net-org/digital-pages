import React from 'react';
import { Box, Button } from '@safari-digital/digital-ui';
import { useClassName } from '@/utils';
import useEditor from './useEditor';
import './Toolbar.styles.css';

interface ToolbarProps {
    disabled?: boolean;
}

export default function Toolbar(props: ToolbarProps) {
    const className = useClassName(props, 'Editor-toolbar');
    const { tools, activeTool, setActiveTool } = useEditor();

    return (
        <Box className={className} gap={1} p={1} fullHeight>
            {tools.map(tool => (
                <React.Fragment key={tool.key}>
                    <Button
                        variant="icon"
                        selected={tool.key === activeTool?.key}
                        onClick={() => setActiveTool(tool.key)}
                        disabled={props.disabled && !tool.alwaysEnabled}>
                        {React.createElement(tool.icon, { variant: 'filled', size: 'medium' })}
                    </Button>
                    {tool.separator && <div className="Editor-toolbar-separator" />}
                </React.Fragment>
            ))}
        </Box>
    );
}

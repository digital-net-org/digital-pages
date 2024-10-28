import { Box, Button, useClassName } from '@safari-digital/digital-ui';
import React from 'react';
import useEditor from './useEditor';
import './Toolbar.styles.css';

interface ToolbarProps {
    disabled?: boolean;
}

export default function Toolbar(props: ToolbarProps) {
    const className = useClassName(props, 'Editor-toolbar');
    const { tools, activeTool, setActiveTool } = useEditor();

    React.useEffect(
        () => (tools?.length > 0 && !activeTool ? setActiveTool(tools[0].key) : void 0),
        [tools, activeTool, setActiveTool],
    );

    return (
        <Box className={className} gap={1} p={1} fullHeight>
            {tools.map(tool => (
                <React.Fragment key={tool.key}>
                    <Button
                        variant="icon"
                        selected={tool.key === activeTool?.key}
                        onClick={() => setActiveTool(tool.key)}
                        disabled={props.disabled && !tool.alwaysEnabled}>
                        {React.createElement(tool.icon, { variant: 'filled', size: 'small' })}
                    </Button>
                    {tool.separator && <div className="Editor-toolbar-separator" />}
                </React.Fragment>
            ))}
        </Box>
    );
}

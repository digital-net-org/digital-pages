import { Box, useProps, Button } from '@safari-digital/digital-ui';
import React from 'react';
import { type Tool } from '../types';
import useEditor from '../useEditor';

interface ToolbarProps {
    disabled?: boolean;
}

export default function Toolbar({ disabled }: ToolbarProps) {
    const { mapProps } = useProps({ disabled });
    const { tools, activeTool, setActiveTool } = useEditor();

    React.useEffect(
        () => (!activeTool ? setActiveTool(tools[0]?.key ?? '') : void 0),
        [tools, activeTool, setActiveTool],
    );

    const renderTools = (tools: Tool[]) =>
        mapProps(
            tools.map(tool => (
                <Button
                    variant="icon"
                    selected={tool.key === activeTool?.key}
                    onClick={() => setActiveTool(tool.key)}
                    disabled={disabled}
                    {...tool}>
                    {React.createElement(tool.icon, {
                        variant: 'outlined',
                        size: 'small',
                        color: 'text',
                    })}
                </Button>
            )),
        );

    return (
        <Box className="Editor-toolbar" direction="column" p={1} fullHeight>
            <Box className="Editor-toolbar-tools" direction="column" gap={1} fullHeight>
                {renderTools(tools.slice(0, 1))}
                <Box className="Editor-toolbar-separator" />
                {renderTools(tools.slice(1))}
            </Box>
        </Box>
    );
}

import React from 'react';
import { Box, Button, useProps } from '@safari-digital/digital-ui';
import type { EditorState } from '../../types';
import defaultTools from '../../defaultTools';

export default function Toolbar({ disabled, selectedTool, selectTool, tools }: EditorState) {
    const { mapProps } = useProps({ disabled });

    return (
        <div className="Editor-toolbar Editor-toolbar-yaxis">
            <div className="Editor-toolbar-tools">
                {mapProps(
                    tools.map((tool, i) => (
                        <React.Fragment key={tool.key}>
                            <Button
                                variant="icon"
                                selected={tool.key === selectedTool?.key}
                                onClick={() => selectTool(tool)}
                                disabled={disabled}>
                                {React.createElement(tool.icon, {
                                    variant: 'outlined',
                                    size: 'small',
                                    color: 'text',
                                })}
                            </Button>
                            {i + 1 === defaultTools.length && tools[i + 1] !== undefined ? (
                                <Box className="Editor-toolbar-separator" />
                            ) : null}
                        </React.Fragment>
                    )),
                )}
            </div>
        </div>
    );
}

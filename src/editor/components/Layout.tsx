import { type EditorProps } from '@/puck/editor/Editor';
import { Box, useClassName, useProps } from '@safari-digital/digital-ui';
import React from 'react';
import useEditor from '../useEditor';
import ActionBar from './Actionbar';
import Toolbar from './Toolbar';

export default function Layout({ disabled, children }: Partial<EditorProps>) {
    const className = useClassName({ disabled }, 'Editor');
    const { mapProps } = useProps({ disabled });
    const { renderPreview, activeTool, selected } = useEditor();

    return (
        <Box className={className} direction="row" fullWidth fullHeight>
            {mapProps(<Toolbar />)}
            <Box fullWidth fullHeight>
                {mapProps(<ActionBar />)}
                <Box direction="row" fullWidth fullHeight>
                    {mapProps(
                        activeTool ? (
                            <Box className="Editor-tool" p={2} gap={2} fullHeight>
                                {activeTool.renderTool}
                            </Box>
                        ) : null,
                    )}
                    {renderPreview?.(selected) ?? null}
                    {mapProps(children)}
                </Box>
            </Box>
        </Box>
    );
}

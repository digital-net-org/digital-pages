import React from 'react';
import { type Data, usePuck } from '@measured/puck';
import { Editor } from '@/editor';
import FramePreview from './FramePreview';
import tools from './Tools';

export default function FrameEditor() {
    const { dispatch } = usePuck();
    // TODO: Find the correct way to handle this
    const handleSelect = (data: Data) => dispatch({ type: 'setData', data });

    return (
        <Editor>
            <FramePreview />
            {tools.map(({ tool, component }) => (
                <Editor.ToolRender id={tool.key}>{React.createElement(component)}</Editor.ToolRender>
            ))}
        </Editor>
    );
}

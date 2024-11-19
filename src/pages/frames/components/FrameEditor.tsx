import React from 'react';
import { type Data, usePuck } from '@measured/puck';
import { Editor } from '@/editor';
import FramePreview from './FramePreview';
import FrameEdit from './FrameEdit';
import FrameRender from './FrameRender';

export default function FrameEditor() {
    const { dispatch } = usePuck();
    // TODO: Find the correct way to handle this
    const handleSelect = (data: Data) => dispatch({ type: 'setData', data });

    return (
        <Editor>
            <Editor.Preview>
                <FramePreview />
            </Editor.Preview>
            <Editor.ToolRender id="components">
                <FrameEdit />
            </Editor.ToolRender>
            <Editor.ToolRender id="tree">
                <FrameRender />
            </Editor.ToolRender>
        </Editor>
    );
}

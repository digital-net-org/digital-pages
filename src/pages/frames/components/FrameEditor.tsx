import React from 'react';
import { usePuck } from '@measured/puck';
import { Editor, useEditor } from '@/editor';
import { type FrameModel } from '@/models';
import Preview from './Tools/Preview';
import tools from './Tools';

export default function FrameEditor() {
    const { selectedModel } = useEditor<FrameModel>();
    const { dispatch } = usePuck();

    React.useEffect(() => {
        dispatch({ type: 'setData', data: selectedModel?.data ?? {} });
        console.log('PUCK: setData', selectedModel);
    }, [dispatch, selectedModel]);

    return (
        <Editor>
            <Editor.Preview>
                <Preview />
            </Editor.Preview>
            {tools.map(({ tool, component }) => (
                <Editor.ToolRender id={tool.key}>{React.createElement(component)}</Editor.ToolRender>
            ))}
        </Editor>
    );
}

import React from 'react';
import { usePuck } from '@measured/puck';
import { Editor, useEditor } from '@/editor';
import { type FrameModel } from '@/models';
import Preview from './Tools/Preview';
import tools from './Tools';

export default function FrameEditor() {
    const { selectedModel, set } = useEditor<FrameModel>();
    const { dispatch, appState } = usePuck();

    React.useEffect(() => {
        dispatch({ type: 'setData', data: selectedModel?.data ?? {} });
    }, [dispatch, selectedModel]);

    React.useEffect(
        () =>
            selectedModel
                ? set({
                      ...selectedModel,
                      data: appState.data,
                  })
                : void 0,
        [appState, selectedModel, set],
    );

    return (
        <Editor>
            <Editor.Preview>
                <Preview />
            </Editor.Preview>
            {tools.map(({ tool, component }) => (
                <Editor.ToolRender key={tool.key} id={tool.key}>
                    {React.createElement(component)}
                </Editor.ToolRender>
            ))}
        </Editor>
    );
}

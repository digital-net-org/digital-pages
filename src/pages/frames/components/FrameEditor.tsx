import React from 'react';
import { usePuck } from '@measured/puck';
import { Editor, useEditor } from '@/editor';
import { type FrameModel } from '@/models';
import Preview from './Tools/Preview';
import tools from './Tools';
import { useUrlState } from '@/router';

export default function FrameEditor() {
    const [selectedModelId, setSelectedModelId] = useUrlState('model');

    const { selectedModel, set } = useEditor<FrameModel>();
    const { dispatch, appState } = usePuck();

    React.useEffect(() => {
        dispatch({ type: 'setData', data: selectedModel?.data ?? {} });
    }, [dispatch, selectedModel]);

    // React.useEffect(
    //     () => appState.data ? set({ data: appState.data }) : void 0, [appState, selectedModelId, set],
    // );

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

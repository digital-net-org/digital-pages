import React from 'react';
import { useUrlParams } from '@/router';
import { type EntityBase } from '@/models';
import useEditor from '../useEditor';

/*
    TODO: Remove that shitty stuff and implements url stored state that works instead
    - Handle that state in the EditorContext instead of the Editor component
    - Rework useUrlParams to not spread the new state but override it
 */

export default function useDefaultStates() {
    const { params, setParams } = useUrlParams<{ id: string; tool: string }>();
    const editorState = useEditor<EntityBase>();

    // Tools defaults
    React.useEffect(
        () =>
            editorState.selectedTool ? setParams({ ...params, tool: editorState.selectedTool.key }) : void 0,
        [params, editorState.selectTool, editorState.selectedTool, setParams, editorState.tools],
    );

    React.useEffect(
        () =>
            params.tool !== editorState.selectedTool?.key
                ? editorState.selectTool(editorState.tools.find(t => t.key === params.tool))
                : void 0,
        [editorState.selectedTool, editorState.selectTool, params.tool, editorState.tools],
    );

    React.useEffect(
        () =>
            !editorState.selectedTool && !params.tool ? editorState.selectTool(editorState.tools[0]) : void 0,
        [editorState.selectedTool, editorState.selectTool, editorState.tools, params.tool, editorState],
    );

    // Models defaults
    React.useEffect(() => {
        if (
            editorState.isLoading ||
            (!editorState.selectedModel && !params.id) ||
            String(editorState?.selectedModel?.id) === params.id
        ) {
            console.log(String(editorState?.selectedModel?.id) === params.id);
            return;
        }
        if (!editorState.selectedModel && params.id) {
            const match = editorState.models.find(m => String(m.id) === params.id);
            if (match) editorState.selectModel(match);
            else setParams({ ...params, id: undefined });
            return;
        }
        if (editorState.selectedModel && !params.id) {
            setParams({ ...params, id: String(editorState.selectedModel.id) });
            return;
        }

        if (String(editorState?.selectedModel?.id) !== params.id) {
            editorState.selectModel(editorState.models.find(m => String(m.id) === params.id));
            return;
        }
    }, [editorState, params, setParams]);
}

import React from 'react';
import { EditorContext, type EditorContextState } from './EditorContext';
import useTool from './useTool';

export default function useEditor<T, TRaw = T>() {
    const context: EditorContextState<T, TRaw> = React.useContext(EditorContext);
    const { activeTool, setActiveTool } = useTool(context.tools);
    return {
        activeTool,
        setActiveTool,
        ...context,
    };
}

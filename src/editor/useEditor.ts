import React from 'react';
import { EditorContext, type EditorContextState } from './context';

export default function useEditor<T, TRaw = T>() {
    const context: EditorContextState<T, TRaw> = React.useContext(EditorContext);
    return context;
}

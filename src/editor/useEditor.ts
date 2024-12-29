import React from 'react';
import type { Entity } from '@/models';
import { EditorContext, type EditorContextState } from './context';

export default function useEditor<T extends Entity>() {
    const context: EditorContextState<T> = React.useContext(EditorContext);
    return context;
}

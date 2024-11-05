import React from 'react';
import type { EntityBase } from '@/models';
import { EditorContext, type EditorContextState } from './context';

export default function useEditor<T extends EntityBase, TRaw = T>() {
    const context: EditorContextState<T, TRaw> = React.useContext(EditorContext);
    return context;
}

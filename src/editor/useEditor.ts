import React from 'react';
import type { Entity } from '@digital-net/core';
import { EditorContext, type EditorContextState } from './context';

export default function useEditor<T extends Entity>() {
    const context: EditorContextState<T> = React.useContext(EditorContext);
    return context;
}

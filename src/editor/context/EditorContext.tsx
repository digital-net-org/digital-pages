import React from 'react';
import { type CrudApiState } from '@/api';
import type { DefaultEditorConfiguration, Tool } from '../types';

export interface EditorContextState<T, TRaw = T>
    extends DefaultEditorConfiguration<T, TRaw>,
        CrudApiState<T, TRaw> {
    selectedModel?: T;
    selectModel: (value?: T) => void;
    selectedTool?: Tool;
    selectTool: (value?: Tool) => void;
}

export const defaultValues: EditorContextState<any> = {
    // configuration
    api: '',
    tools: [],
    actions: [],
    disabled: false,
    // state
    selectedModel: undefined,
    selectModel: () => void 0,
    selectedTool: undefined,
    selectTool: () => void 0,
    // api
    models: [],
    patch: () => void 0,
    create: () => void 0,
    refetchQuery: async () => void 0,
    isPatching: false,
    isCreating: false,
    isQuerying: false,
    isLoading: false,
};

export const EditorContext = React.createContext<EditorContextState<any>>(defaultValues);

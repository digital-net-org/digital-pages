import React, { type PropsWithChildren } from 'react';
import { type ViewModel } from '@/models';
import { type Tool } from './types';

interface EditorContextState {
    tools: Array<Tool>;
    views: Array<ViewModel>;
    loading: boolean;
}

const defaultValues: EditorContextState = {
    tools: [],
    views: [],
    loading: false,
};

export interface ContextProps extends PropsWithChildren {
    views: Array<ViewModel>;
    tools: Array<Tool>;
    loading: boolean;
}

export const EditorContext = React.createContext<EditorContextState>(defaultValues);

export function EditorProvider({ children, ...props }: ContextProps) {
    return <EditorContext.Provider value={props}>{children}</EditorContext.Provider>;
}

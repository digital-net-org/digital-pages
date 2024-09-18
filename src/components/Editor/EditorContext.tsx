import React, { type PropsWithChildren } from 'react';
import { type Tool } from './types';

interface EditorContextState {
    tools: Array<Tool>;
    loading: boolean;
}

const defaultValues: EditorContextState = {
    tools: [],
    loading: false,
};

export interface EditorContextProps extends PropsWithChildren {
    tools: Array<Tool>;
    loading: boolean;
}

export const EditorContext = React.createContext<EditorContextState>(defaultValues);

export function EditorProvider({ children, ...props }: EditorContextProps) {
    return <EditorContext.Provider value={{ ...props }}>{children}</EditorContext.Provider>;
}

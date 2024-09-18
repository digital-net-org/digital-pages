import React, { type PropsWithChildren } from 'react';
import { type Tool } from './types';

interface EditorContextState {
    tools: Array<Tool>;
    loading: boolean;
    disabled?: boolean;
}

const defaultValues: EditorContextState = {
    tools: [],
    loading: false,
    disabled: false,
};

export interface EditorContextProps extends PropsWithChildren {
    tools: Array<Tool>;
    loading: boolean;
    disabled?: boolean;
}

export const EditorContext = React.createContext<EditorContextState>(defaultValues);

export function EditorProvider({ children, ...props }: EditorContextProps) {
    return <EditorContext.Provider value={{ ...props }}>{children}</EditorContext.Provider>;
}

import React, { type PropsWithChildren } from 'react';
import { type Tool, type Action } from './types';

interface EditorContextState {
    tools: Array<Tool>;
    actions?: Array<Action>;
    loading: boolean;
    disabled?: boolean;
}

const defaultValues: EditorContextState = {
    tools: [],
    actions: [],
    loading: false,
    disabled: false,
};

export type EditorContextProps = PropsWithChildren & EditorContextState;

export const EditorContext = React.createContext<EditorContextState>(defaultValues);

export function EditorProvider({ children, ...props }: EditorContextProps) {
    return <EditorContext.Provider value={{ ...props }}>{children}</EditorContext.Provider>;
}

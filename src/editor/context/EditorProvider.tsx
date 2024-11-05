import React, { type PropsWithChildren } from 'react';
import { useCrud } from '@/api';
import { defaultValues, EditorContext } from './EditorContext';
import defaultActions from './defaultActions';
import defaultTools from './defaultTools';
import type { EditorConfiguration, Tool } from '../types';

export default function EditorProvider<T, TRaw>({
    children,
    actions,
    tools,
    ...props
}: PropsWithChildren<EditorConfiguration<T, TRaw>>) {
    const api = useCrud({ endpoint: props.api, modelConverter: props.onQuery });
    const [selectedModel, selectModel] = React.useState<T | undefined>(undefined);
    const [selectedTool, selectTool] = React.useState<Tool | undefined>(undefined);

    return (
        <EditorContext.Provider
            value={{
                ...defaultValues,
                selectedModel,
                selectModel,
                selectedTool,
                selectTool,
                actions: [...defaultActions, ...(actions ?? [])],
                tools: [...defaultTools, ...(tools ?? [])],
                ...props,
                ...api,
            }}>
            {children}
        </EditorContext.Provider>
    );
}

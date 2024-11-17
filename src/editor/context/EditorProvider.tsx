import React, { type PropsWithChildren } from 'react';
import { useCrud } from '@/api';
import { useUrlState } from '@/router';
import { type EntityBase, EntityBaseHelper } from '@/models';
import { defaultValues, EditorContext } from './EditorContext';
import defaultActions from './defaultActions';
import defaultTools from './defaultTools';
import type { EditorConfiguration, Tool } from '../types';

export default function EditorProvider<T extends EntityBase, TRaw>({
    children,
    actions: propsActions,
    tools: propsTools,
    ...props
}: PropsWithChildren<EditorConfiguration<T, TRaw>>) {
    const api = useCrud({ endpoint: props.api, modelConverter: props.onQuery });
    const actions = React.useMemo(() => [...defaultActions, ...(propsActions ?? [])], [propsActions]);
    const tools = React.useMemo(() => [...defaultTools, ...(propsTools ?? [])], [propsTools]);

    const [selectedToolId, setSelectedToolId] = useUrlState('tool');
    const [selectedModelId, setSelectedModelId] = useUrlState('model');

    const selectedModel = React.useMemo(
        () =>
            EntityBaseHelper.getById(api.models, selectedModelId) ??
            EntityBaseHelper.getNewest(api.models) ??
            api.models[0],
        [api.models, selectedModelId],
    );

    const selectedTool = React.useMemo(
        () => tools.find(tool => tool.key === selectedToolId),
        [selectedToolId, tools],
    );

    const selectModel = React.useCallback(
        (id?: string | number) =>
            setSelectedModelId(selectedModel?.id === id ? undefined : api.models.find(e => e.id === id)?.id),
        [api.models, selectedModel, setSelectedModelId],
    );
    const selectTool = React.useCallback((tool: Tool) => setSelectedToolId(tool.key), [setSelectedToolId]);

    return (
        <EditorContext.Provider
            value={{
                ...defaultValues,
                selectedModel,
                selectModel,
                selectedTool,
                selectTool,
                actions,
                tools,
                ...props,
                ...api,
            }}>
            {children}
        </EditorContext.Provider>
    );
}

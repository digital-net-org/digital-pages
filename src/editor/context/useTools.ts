import React from 'react';
import { type EntityBase } from '@/models';
import { useUrlState } from '@/router';
import defaultTools from './defaultTools';
import { type EditorConfiguration, type Tool } from '../types';

interface Props<T extends EntityBase, TRaw = T> {
    tools: EditorConfiguration<T, TRaw>['tools'];
}

export default function useTools<T extends EntityBase, TRaw = T>({ tools }: Props<T, TRaw>) {
    const resolved = React.useMemo(() => [...defaultTools, ...(tools ?? [])], [tools]);

    const [selectedToolId, setSelectedToolId] = useUrlState('tool');

    const selectedTool = React.useMemo(
        () => resolved.find(tool => tool.key === selectedToolId),
        [selectedToolId, resolved],
    );

    const selectTool = React.useCallback((tool: Tool) => setSelectedToolId(tool.key), [setSelectedToolId]);

    return { tools: resolved, selectedTool, selectTool };
}

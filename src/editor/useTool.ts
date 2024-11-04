import { useUrlParams } from '@/router';
import React from 'react';
import { type Tool } from './types';

export default function useTool(tools: Array<Tool>) {
    const { params, setParams } = useUrlParams<{ tool: string }>();

    const activeTool = React.useMemo(
        () => tools.find(t => t.key === params.tool),
        [params.tool, tools],
    ) as Tool;

    const setActiveTool = (key: string) => setParams({ tool: key });

    return { activeTool, setActiveTool };
}

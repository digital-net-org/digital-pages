import React from 'react';
import { EditorContext } from './EditorContext';
import { useUrlParams } from '@/utils';

export default function useEditor() {
    const { params, setParams } = useUrlParams<{ tool: string }>();
    const { tools, loading } = React.useContext(EditorContext);

    const activeTool = React.useMemo(
        () => tools.find(({ key }) => key === params.tool),
        [params.tool, tools],
    );

    const setActiveTool = (key: (typeof tools)[number]['key']) => setParams({ tool: key });

    return { tools, activeTool, setActiveTool, loading };
}

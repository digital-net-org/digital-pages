import React from 'react';
import { EditorContext } from './EditorContext';
import { useUrlParams } from '@/router';

export default function useEditor() {
    const [params, setParams] = useUrlParams();
    const { tools, ...contextProps } = React.useContext(EditorContext);

    const activeTool = React.useMemo(
        () => tools.find(({ key }) => key === params.tool),
        [params.tool, tools],
    );

    const setActiveTool = (key: (typeof tools)[number]['key']) => setParams(prev => ({ ...prev, tool: key }));

    return { tools, activeTool, setActiveTool, ...contextProps };
}

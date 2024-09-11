import React from 'react';

export default function useToolbar<T extends object>(tools: T) {
    const keys: Array<keyof T> = React.useMemo(() => Object.keys(tools) as Array<keyof T>, [tools]);

    const mapTools = (callback: (toolKey: keyof T, toolValue: T[keyof T]) => React.ReactNode) =>
        keys.map(toolKey => callback(toolKey as keyof T, tools[toolKey]));

    const getTool = (toolKey: keyof T) => tools[toolKey];

    return { mapTools, getTool, keys };
}

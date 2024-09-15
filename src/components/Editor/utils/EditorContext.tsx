import React, { type PropsWithChildren } from 'react';
import { type ViewModel } from '@/models';

interface EditorContextState {
    views: Array<ViewModel>;
    setViews: (views: Array<ViewModel>) => void;
}

const defaultValues: EditorContextState = {
    views: [],
    setViews: (views: Array<ViewModel>) => void 0,
};

export const EditorContext = React.createContext<EditorContextState>(defaultValues);

export default function EditorProvider(props: PropsWithChildren) {
    const [views, setViews] = React.useState<Array<ViewModel>>([]);
    return <EditorContext.Provider value={{ views, setViews }} {...props} />;
}

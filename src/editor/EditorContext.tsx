import { useCrud } from '@/api';
import Selector from './components/Selector';
import type { ResultMessage } from '@/models';
import { Icon } from '@safari-digital/digital-ui';
import React, { type PropsWithChildren } from 'react';
import { type Action, type Tool } from './types';

type Api<T, TRaw> = ReturnType<typeof useCrud<T, TRaw>>;

export interface EditorConfiguration<T, TRaw = T> {
    api: string;
    renderPreview?: (value: T) => React.ReactNode;
    renderName?: (value: T) => string;
    onCreate?: (create: Api<T, TRaw>['create']) => void;
    onPatch?: (patch: Api<T, TRaw>['patch'], id: string | number) => void;
    onDelete?: () => void;
    onQuery?: (data: TRaw) => T;
    onError?: (errors: ResultMessage[]) => void;
    tools?: Array<Tool>;
    actions?: Array<Action>;
    disabled?: boolean;
}

export interface EditorContextState<T, TRaw = T>
    extends Omit<EditorConfiguration<T, TRaw>, 'tools' | 'actions'>,
        ReturnType<typeof useCrud<T, TRaw>> {
    actions: Array<Action>;
    tools: Array<Tool>;
    selected?: T;
    setSelected: (value?: T) => void;
}

const defaultValues: EditorContextState<any> = {
    // configuration
    api: '',
    tools: [
        {
            key: 'select',
            icon: Icon.FolderIcon,
            renderTool: <Selector />,
        },
    ],
    actions: [],
    disabled: false,
    // state
    selected: undefined,
    setSelected: () => void 0,
    // api
    models: [],
    patch: () => void 0,
    create: () => void 0,
    refetchQuery: async () => void 0,
    isPatching: false,
    isCreating: false,
    isQuerying: false,
    isLoading: false,
};

export const EditorContext = React.createContext<EditorContextState<any>>(defaultValues);

export function EditorProvider<T, TRaw>({
    children,
    actions,
    tools,
    ...props
}: PropsWithChildren<EditorConfiguration<T, TRaw>>) {
    const api = useCrud({ endpoint: props.api, modelConverter: props.onQuery });
    const [selected, setSelected] = React.useState<T | undefined>(undefined);

    return (
        <EditorContext.Provider
            value={{
                selected,
                setSelected,
                actions: actions ?? [],
                tools: [...defaultValues.tools, ...(tools ?? [])],
                ...props,
                ...api,
            }}>
            {children}
        </EditorContext.Provider>
    );
}

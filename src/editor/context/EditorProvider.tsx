import React, { type PropsWithChildren } from 'react';
import { useCrud } from '@/api';
import { type EntityBase } from '@/models';
import { defaultValues, EditorContext } from './EditorContext';
import defaultActions from '../defaultActions';
import useTools from './useTools';
import useModels from './useModels';
import type { EditorConfiguration } from '../types';

export default function EditorProvider<T extends EntityBase, TRaw>({
    children,
    actions: propsActions,
    tools,
    ...props
}: PropsWithChildren<EditorConfiguration<T, TRaw>>) {
    const api = useCrud({ endpoint: props.api, modelConverter: props.onQuery });
    const actions = React.useMemo(() => [...defaultActions, ...(propsActions ?? [])], [propsActions]);

    return (
        <EditorContext.Provider
            value={{
                ...defaultValues,
                ...useModels({ models: api.models }),
                ...useTools({ tools }),
                actions,
                ...props,
                ...api,
            }}>
            {children}
        </EditorContext.Provider>
    );
}

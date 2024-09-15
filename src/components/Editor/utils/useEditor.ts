import React from 'react';
import { EditorContext } from './EditorContext';
import { useDigitalQuery } from '@/api';
import type { QueryResult, ViewModel } from '@/models';
import { useCreateView } from './viewApi';

export default function useEditor() {
    const { views, setViews } = React.useContext(EditorContext);

    const { data, isLoading: isQueryLoading } = useDigitalQuery<QueryResult<ViewModel>>('view', {
        onSuccess: data => {
            setViews(data.value);
        },
    });

    const { create, isCreating } = useCreateView();

    const loading = React.useMemo(() => isQueryLoading || isCreating, [isCreating, isQueryLoading]);

    return {
        views,
        create,
        loading,
    };
}

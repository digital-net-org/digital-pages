import React from 'react';
import type { Entity } from '@/models';
import type { CrudConfig } from './types';
import usePatch from './usePatch';
import useCreate from './useCreate';
import useGet from './useGet';
import useDelete from './useDelete';
import useIndexedDb from './data/useIndexedDb';

export default function useCrud<T extends Entity>(config: CrudConfig) {
    // TODO: Add the Schema endpoint in the generic controller (backend)
    // TODO: Fix infinite isIndexedDBLoading
    const { isLoading: isIndexedDBLoading, set } = useIndexedDb<T>(config.api, config.endpoint, {
        id: { key: 'id', unique: true },
    });

    const { invalidateQuery, ...query } = useGet(config);
    const create = useCreate<T>({...config, invalidateQuery});
    const patch = usePatch<T>({...config, invalidateQuery});
    const remove = useDelete<T>({...config, invalidateQuery});

    const isLoading = React.useMemo(
        () => query.isQuerying || create.isCreating || patch.isPatching, //|| isIndexedDBLoading,
        [query.isQuerying, create.isCreating, patch.isPatching, isIndexedDBLoading],
    );

    return {
        isLoading,
        ...query,
        ...create,
        ...remove,
        ...patch,
        set,
    };
}

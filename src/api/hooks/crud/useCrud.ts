import React from 'react';
import type { Entity } from '@digital-net/core';
import type { CrudConfig } from './types';
import usePatch from './usePatch';
import useCreate from './useCreate';
import useGet from './useGet';
import useDelete from './useDelete';

export default function useCrud<T extends Entity>(config: CrudConfig) {
    // const { isLoading: isIndexedDBLoading, set } = useIndexedDb<T>({ db: config.api, store: config.endpoint });

    const { invalidateQuery, ...query } = useGet(config);
    const create = useCreate<T>({ ...config, invalidateQuery });
    const patch = usePatch<T>({ ...config, invalidateQuery });
    const remove = useDelete<T>({ ...config, invalidateQuery });

    const isLoading = React.useMemo(
        () => query.isQuerying || create.isCreating || patch.isPatching,
        [query.isQuerying, create.isCreating, patch.isPatching],
    );

    return {
        isLoading,
        ...query,
        ...create,
        ...remove,
        ...patch,
        set: () => {},
    };
}

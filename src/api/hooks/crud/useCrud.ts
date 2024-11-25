import React from 'react';
import type { EntityBase } from '@/models';
import type { CrudConfig } from './types';
import usePatch from './usePatch';
import useCreate from './useCreate';
import useGet from './useGet';
import useDelete from './useDelete';
import useIndexedDb from './data/useIndexedDb';

export default function useCrud<T extends EntityBase, TRaw = T>(config: CrudConfig<T, TRaw>) {
    // TODO: Add the Schema endpoint in the generic controller (backend)
    const { isLoading: isIndexedDBLoading, set } = useIndexedDb<T>(config.api, config.endpoint, {
        id: { key: 'id', unique: true },
    });

    const { invalidateQuery, ...query } = useGet(config);
    const create = useCreate({ ...config, invalidateQuery });
    const patch = usePatch({ ...config, invalidateQuery });
    const remove = useDelete({ ...config, invalidateQuery });

    const isLoading = React.useMemo(
        () => query.isQuerying || create.isCreating || patch.isPatching || isIndexedDBLoading,
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

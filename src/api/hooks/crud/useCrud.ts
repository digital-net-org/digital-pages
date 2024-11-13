import React from 'react';
import type { EntityBase } from '@/models';
import type { CrudConfig } from './types';
import usePatch from './usePatch';
import useCreate from './useCreate';
import useGet from './useGet';
import useDelete from '@/api/hooks/crud/useDelete';

export default function useCrud<T extends EntityBase, TRaw = T>(config: CrudConfig<T, TRaw>) {
    const { invalidateQuery, ...query } = useGet(config);
    const create = useCreate({ ...config, invalidateQuery });
    const patch = usePatch({ ...config, invalidateQuery });
    const remove = useDelete({ ...config, invalidateQuery });

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
    };
}

import usePatch from '@/api/hooks/crud/usePatch';
import React from 'react';
import { type CrudConfig } from './types';
import useCreate from './useCreate';
import useGet from './useGet';

export default function useCrud<T, TRaw = T>(config: CrudConfig<T, TRaw>) {
    const { invalidateQuery, ...query } = useGet(config);
    const create = useCreate({ ...config, invalidateQuery });
    const patch = usePatch({ ...config, invalidateQuery });

    const isLoading = React.useMemo(
        () => query.isQuerying || create.isCreating || patch.isPatching,
        [query.isQuerying, create.isCreating, patch.isPatching],
    );

    return {
        isLoading,
        ...query,
        ...create,
        ...patch,
    };
}

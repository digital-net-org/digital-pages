import React from 'react';
import { type EntityRaw, type Entity, EntityHelper, type QueryResult } from '@digital-net/core';
import { queryClient } from '../../ReactQuery';
import useDigitalQuery from '../useDigitalQuery';
import type { CrudConfig } from './types';

export default function useGet<T extends Entity>(config: CrudConfig) {
    const { data, isLoading: isQuerying, refetch } = useDigitalQuery<QueryResult<EntityRaw>>(config.endpoint);

    const invalidateQuery = React.useCallback(async () => {
        await queryClient.invalidateQueries({
            predicate: query => query.queryKey[0] === config.endpoint,
        });
    }, [config.endpoint]);

    const refetchQuery = React.useCallback(async () => {
        await invalidateQuery();
        await refetch();
    }, [invalidateQuery, refetch]);

    const models: T[] = React.useMemo(() => (data?.value ?? []).map(EntityHelper.build<T>), [data]);

    return {
        models,
        isQuerying,
        invalidateQuery,
        refetchQuery,
    };
}

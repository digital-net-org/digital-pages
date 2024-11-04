import type { QueryResult } from '@/models';
import React from 'react';
import { queryClient } from '../../ReactQuery';
import useDigitalQuery from '../useDigitalQuery';
import { type CrudConfig } from './types';

export default function useGet<T, TRaw>(config: CrudConfig<T, TRaw>) {
    const { data, isLoading: isQuerying, refetch } = useDigitalQuery<QueryResult<TRaw>>(config.endpoint);

    const invalidateQuery = React.useCallback(async () => {
        await queryClient.invalidateQueries({
            predicate: query => query.queryKey[0] === config.endpoint,
        });
    }, [config.endpoint]);

    const refetchQuery = React.useCallback(async () => {
        await invalidateQuery();
        await refetch();
    }, [invalidateQuery, refetch]);

    const models = React.useMemo(
        () => (config.modelConverter ? (data?.value ?? []).map(config.modelConverter) : (data?.value ?? [])),
        [config.modelConverter, data],
    ) as T[];

    return {
        models,
        isQuerying,
        invalidateQuery,
        refetchQuery,
    };
}

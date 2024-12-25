import React from 'react';
import {type Entity, EntityBaseHelper, type QueryResult} from '@/models';
import {queryClient} from '../../ReactQuery';
import useDigitalQuery from '../useDigitalQuery';
import type {CrudConfig} from './types';

export default function useGet<T extends Entity>(config: CrudConfig) {
    const {data, isLoading: isQuerying, refetch} = useDigitalQuery<QueryResult<T>>(config.endpoint);

    const invalidateQuery = React.useCallback(async () => {
        await queryClient.invalidateQueries({
            predicate: query => query.queryKey[0] === config.endpoint,
        });
    }, [config.endpoint]);

    const refetchQuery = React.useCallback(async () => {
        await invalidateQuery();
        await refetch();
    }, [invalidateQuery, refetch]);

    const models: T[] = React.useMemo(() => (data?.value ?? []).map(EntityBaseHelper.build), [data]);

    return {
        models,
        isQuerying,
        invalidateQuery,
        refetchQuery,
    };
}

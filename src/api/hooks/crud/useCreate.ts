import type { Result } from '@/models';
import React from 'react';
import useDigitalMutation from '../useDigitalMutation';
import { type CrudConfig } from './types';

export default function useCreate<T, TRaw>(
    config: CrudConfig<T, TRaw> & { invalidateQuery: () => Promise<void> },
) {
    const { mutate, isPending: isCreating } = useDigitalMutation<Result<TRaw>>(config.endpoint, {
        onSuccess: async () => await config.invalidateQuery(),
    });

    const create = React.useCallback((body: Partial<TRaw>) => mutate({ body }), [mutate]);

    return {
        create,
        isCreating,
    };
}

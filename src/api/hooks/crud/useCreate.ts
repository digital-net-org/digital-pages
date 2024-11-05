import React from 'react';
import type { EntityBase, Result } from '@/models';
import useDigitalMutation from '../useDigitalMutation';
import type { CrudConfig } from './types';

export default function useCreate<T extends EntityBase, TRaw>(
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

import type {Entity, Result} from '@/models';
import useDigitalMutation from '../useDigitalMutation';
import type {CrudConfig} from './types';
import React from 'react';

export default function useDelete<T extends Entity>(
    config: CrudConfig & { invalidateQuery: () => Promise<void> },
) {
    const { mutate, isPending: isDeleting } = useDigitalMutation<Result, { id: string }>(
        ({ id }) => `${config.endpoint}/${id}`,
        {
            method: 'DELETE',
            onSuccess: async () => await config.invalidateQuery(),
        },
    );

    const _delete = React.useCallback(
        (id: string | number) => mutate({ params: { id: String(id) } }),
        [mutate],
    );

    return {
        delete: _delete,
        isDeleting,
    };
}

import React from 'react';
import type { Entity, Result } from '@digital-net/core';
import useDigitalMutation from '../useDigitalMutation';
import { type CrudConfig } from './types';

export default function usePatch<T extends Entity>(config: CrudConfig & { invalidateQuery: () => Promise<void> }) {
    const { mutate, isPending: isPatching } = useDigitalMutation<Result<T>, { id: string }>(
        ({ id }) => `${config.endpoint}/${id}`,
        {
            method: 'PATCH',
            onSuccess: async () => await config.invalidateQuery(),
        },
    );

    const patch = React.useCallback(
        (id: string | number, patch: Partial<T>) =>
            mutate({
                params: { id: String(id) },
                patch: Object.keys(patch).map(key => ({
                    op: 'replace',
                    path: `/${key}`,
                    value: patch[key],
                })),
            }),
        [mutate],
    );

    return {
        patch,
        isPatching,
    };
}

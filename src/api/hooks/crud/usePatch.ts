import type { Result } from '@/models';
import React from 'react';
import useDigitalMutation from '../useDigitalMutation';
import { type CrudConfig } from './types';

export default function usePatch<T, TRaw = T>(
    config: CrudConfig<T, TRaw> & { invalidateQuery: () => Promise<void> },
) {
    const { mutate, isPending: isPatching } = useDigitalMutation<Result<TRaw>, { id: string }>(
        ({ id }) => `${config.endpoint}/${id}`,
        {
            method: 'PATCH',
            onSuccess: async () => await config.invalidateQuery(),
        },
    );

    const patch = React.useCallback(
        (id: string | number, patch: Partial<TRaw>) =>
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

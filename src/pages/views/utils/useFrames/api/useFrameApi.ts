import { useDigitalQuery, useDigitalMutation } from '@/api';
import type { QueryResult, RawFrameModel, Result } from '@/models';
import { type Data } from '@measured/puck';
import React from 'react';
import FrameApi from './FrameApi';

export default function useFrameApi() {
    const { data, isLoading: isQuerying } = useDigitalQuery<QueryResult<RawFrameModel>>(FrameApi.endpoint);
    const frames = React.useMemo(() => FrameApi.toFrameModel(data?.value), [data?.value]);

    const { mutate: create, isPending: isCreating } = useDigitalMutation(FrameApi.endpoint, {
        onSuccess: async () => await FrameApi.invalidateQuery(),
    });

    const { mutate: patch, isPending: isPatching } = useDigitalMutation<
        Result<RawFrameModel>,
        { id: string }
    >(({ id }) => `${FrameApi.endpoint}/${id}`, {
        method: 'PATCH',
        onSuccess: async () => await FrameApi.invalidateQuery(),
    });

    return {
        frames,
        create: async () => create({ ...FrameApi.generateCreatePayload() }),
        patch: async (id: number, frame: { data?: Data; name?: string }) =>
            patch({ params: { id: String(id) }, patch: FrameApi.toPatchModel(frame) }),
        isQuerying,
        isCreating,
        isPatching,
        loading: isCreating || isQuerying || isPatching,
    };
}

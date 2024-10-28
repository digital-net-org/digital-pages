import { useDigitalQuery, useDigitalMutation } from '@/api';
import type { QueryResult, RawFrameModel } from '@/models';
import React from 'react';
import FrameApi from './FrameApi';

export default function useFrameApi() {
    const { data, isLoading: isQuerying } = useDigitalQuery<QueryResult<RawFrameModel>>(FrameApi.endpoint);
    const { mutate, isPending: isCreating } = useDigitalMutation(FrameApi.endpoint, {
        onSuccess: async () => await FrameApi.invalidateQuery(),
    });

    const frames = React.useMemo(() => FrameApi.toFrameModel(data?.value), [data?.value]);

    return {
        frames,
        create: async () => mutate({ ...FrameApi.generateCreatePayload() }),
        isQuerying,
        isCreating,
        loading: isCreating || isQuerying,
    };
}

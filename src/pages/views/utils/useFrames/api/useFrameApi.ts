import { useDigitalQuery, useDigitalMutation } from '@/api';
import type { QueryResult, FrameModel } from '@/models';
import FrameApi from './FrameApi';

export default function useFrameApi() {
    const { data, isLoading: isQuerying } = useDigitalQuery<QueryResult<FrameModel>>(FrameApi.endpoint);
    const { mutate, isPending: isCreating } = useDigitalMutation(FrameApi.endpoint, {
        onSuccess: async () => await FrameApi.invalidateQuery(),
    });

    return {
        frames: data?.value ?? [],
        create: async () => mutate({ ...FrameApi.generateCreatePayload() }),
        isQuerying,
        isCreating,
        loading: isCreating || isQuerying,
    };
}

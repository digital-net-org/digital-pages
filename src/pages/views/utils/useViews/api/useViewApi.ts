import { useDigitalQuery, useDigitalMutation } from '@/api';
import type { QueryResult, ViewModel } from '@/models';
import ViewApi from './ViewApi';

export default function useViewApi() {
    const { data, isLoading: isQuerying } = useDigitalQuery<QueryResult<ViewModel>>(ViewApi.endpoint);
    const { mutate, isPending: isCreating } = useDigitalMutation(ViewApi.endpoint, {
        onSuccess: async () => await ViewApi.invalidateQuery(),
    });

    return {
        views: data?.value ?? [],
        create: async () => mutate({ ...ViewApi.generateCreatePayload() }),
        isQuerying,
        isCreating,
        loading: isCreating || isQuerying,
    };
}

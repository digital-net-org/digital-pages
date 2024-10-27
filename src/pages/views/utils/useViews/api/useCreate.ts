import { useDigitalMutation } from '@/api';
import ViewApi from './ViewApi';

export default function useCreate() {
    const { mutate, isPending: isCreating } = useDigitalMutation(ViewApi.endpoint, {
        onSuccess: async () => await ViewApi.invalidateQuery(),
    });

    const create = async () => mutate({ ...ViewApi.generateCreatePayload() });
    return { create, isCreating };
}

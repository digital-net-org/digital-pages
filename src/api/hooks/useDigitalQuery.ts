import { useQuery } from '@tanstack/react-query';
import { type AxiosError } from 'axios';
import { type DigitalQueryConfig } from './types';
import { DigitalApi } from '../DigitalApi';
import { useQueryClient } from '../ReactQuery';

export default function useDigitalQuery<T, E = unknown>(
    key: string,
    options: DigitalQueryConfig<T, E> = { autoRefetch: true },
) {
    const queryClient = useQueryClient();
    const response = useQuery<T, AxiosError<E>>({
        queryKey: [key],
        queryFn: async () => {
            const { data } = await DigitalApi.get<T>(key, options);
            return data;
        },
        ...options,
    });

    const refetch = async () => {
        await queryClient.invalidateQueries({ queryKey: [key] });
        await response.refetch();
    };

    return { ...response, refetch };
}

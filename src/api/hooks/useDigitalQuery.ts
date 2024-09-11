import { useQuery } from '@tanstack/react-query';
import { type AxiosError } from 'axios';
import { type QueryConfig } from './types';
import { useQueryClient } from '../ReactQuery';
import { axiosInstance } from '../axios';

export default function useDigitalQuery<T, E = unknown>(
    key: string,
    options: QueryConfig<T, E> = { autoRefetch: true },
) {
    const queryClient = useQueryClient();
    const response = useQuery<T, AxiosError<E>>({
        queryKey: [key],
        queryFn: async () => {
            const { data } = await axiosInstance.get<T>(key, options);
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

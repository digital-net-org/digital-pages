import { useMutation } from '@tanstack/react-query';
import { type AxiosError } from 'axios';
import { type MutationConfig, type MutationPayload } from './types';
import { axiosInstance } from '../axios';

export default function useDigitalMutation<T, P = object, E = unknown>(
    key: ((payload: P) => string) | string,
    { method, retry, onError, onSuccess, ...options }: MutationConfig<T, E>,
) {
    return useMutation<T, AxiosError<E, any>, MutationPayload<P>>({
        mutationFn: async payload => {
            const url = key instanceof Function && payload.params ? key(payload.params) : (key as string);
            const { data } = await axiosInstance.request<T>({
                method: method ?? 'POST',
                url,
                data: payload.patch ?? payload.body ?? {},
                ...options,
            });
            return data;
        },
        onError,
        onSuccess,
        retry: retry ?? 0,
    });
}

import { type RequestConfig } from '../axios';

export interface QueryConfig<T, E> extends RequestConfig {
    onSuccess?: SuccessCallback<T>;
    onError?: ErrorCallback<E>;
    autoRefetch?: boolean;
}

export interface MutationConfig<T, E> extends RequestConfig {
    onSuccess?: SuccessCallback<T>;
    onError?: ErrorCallback<E>;
    method?: MutationMethod;
    retry?: number;
}

export interface MutationPayload<T = object> {
    params?: T;
    body?: any;
    patch?: Array<PatchOperation>;
}

export interface PatchOperation {
    op: string;
    path: string;
    value: any;
}

export type MutationMethod = 'POST' | 'PUT' | 'DELETE' | 'PATCH';
export type ErrorCallback<E> = (error: E | any) => void;
export type SuccessCallback<T> = (data: T) => void;

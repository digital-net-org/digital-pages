import { type DigitalRequestConfig } from '../DigitalApi';

export interface DigitalQueryConfig<T, E> extends DigitalRequestConfig {
    onSuccess?: DigitalSuccessCallback<T>;
    onError?: DigitalErrorCallback<E>;
    autoRefetch?: boolean;
}

export interface DigitalMutationConfig<T, E> extends DigitalRequestConfig {
    onSuccess?: DigitalSuccessCallback<T>;
    onError?: DigitalErrorCallback<E>;
    method?: MutationMethod;
    retry?: number;
}

export interface DigitalMutationPayload<T = object> {
    params?: T;
    body?: any;
    patchBody?: Array<PatchOperation>;
}

export interface PatchOperation {
    op: string;
    path: string;
    value: any;
}

export type MutationMethod = 'POST' | 'PUT' | 'DELETE' | 'PATCH';
export type DigitalErrorCallback<E> = (error: E | any) => void;
export type DigitalSuccessCallback<T> = (data: T) => void;

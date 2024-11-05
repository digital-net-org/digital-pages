import type useCrud from './useCrud';

export interface CrudConfig<T, TRaw = T> {
    endpoint: string;
    modelConverter?: (data: TRaw) => T;
}

export type CrudApiState<T = any, TRaw = T> = ReturnType<typeof useCrud<T, TRaw>>;
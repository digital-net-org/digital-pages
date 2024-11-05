import { type EntityBase } from '@/models';
import type useCrud from './useCrud';

export interface CrudConfig<T extends EntityBase, TRaw = T> {
    endpoint: string;
    modelConverter?: (data: TRaw) => T;
}

export type CrudApiState<T extends EntityBase = any, TRaw = T> = ReturnType<typeof useCrud<T, TRaw>>;
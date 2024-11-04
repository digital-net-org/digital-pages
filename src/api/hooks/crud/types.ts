export interface CrudConfig<T, TRaw = T> {
    endpoint: string;
    modelConverter?: (data: TRaw) => T;
}

import type { ResultMessage } from './ResultMessage';

export interface Result<T> {
    value: T;
    hasError: boolean;
    errors: ResultMessage[];
    infos: ResultMessage[];
}

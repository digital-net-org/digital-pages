import type { Data } from '@measured/puck';
import { ObjectMatcher } from '@digital-lib/core';

export default class PuckDataHelper {
    public static readonly default: Data = {
        root: { props: { title: '' } },
        zones: {},
        content: [],
    };

    public static stringify({ id: _, ...data }: Data): string {
        return JSON.stringify(data);
    }

    public static resolve(data: unknown): Data {
        if (typeof data === 'string') {
            return JSON.parse(data);
        }
        if (typeof data === 'object' && data !== null) {
            return data as Data;
        }
        return this.default;
    }

    public static deepEquality(a: Data, b: unknown): boolean {
        return ObjectMatcher.deepEquality(a, PuckDataHelper.resolve(b), ['id']);
    }
}

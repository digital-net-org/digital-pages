import { queryClient } from '@/api';
import { type FrameModel, type RawFrameModel } from '@/models';
import { defaultPuckData } from '@/puck';
import type { Data } from '@measured/puck';
import { safeParse } from '@safari-digital/core';

export default class FrameApi {
    public static endpoint = 'frame';

    public static async invalidateQuery() {
        await queryClient.invalidateQueries({
            predicate: query => query.queryKey[0] === this.endpoint,
        });
    }

    public static toFrameModel(frames: RawFrameModel[] | undefined): FrameModel[] {
        return (frames ?? []).map(f => ({
            ...f,
            data: safeParse(f.data) as Data,
        }));
    }

    public static generateCreatePayload() {
        return {
            body: {
                data: JSON.stringify(defaultPuckData),
                name: 'xxxx-xxxx-xxxx-xxxx'.replace(/[xy]/g, c => {
                    const r = (Math.random() * 16) | 0;
                    const v = c === 'x' ? r : (r & 0x3) | 0x8;
                    return v.toString(16);
                }),
            },
        };
    }
}

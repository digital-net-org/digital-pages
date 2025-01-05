import { type Data } from '@measured/puck';
import type { Entity } from '@digital-net/core';
import { defaultPuckData } from '@digital-net/react-digital-puck/config';

export interface FrameModel extends Entity {
    name: string;
    data: Data;
}

export class FrameModelHelper {
    static getDefaultPayload(): Partial<FrameModel> {
        return {
            data: defaultPuckData,
            name: 'xxxx-xxxx-xxxx-xxxx'.replace(/[xy]/g, (c) => {
                const r = (Math.random() * 16) | 0;
                const v = c === 'x' ? r : (r & 0x3) | 0x8;
                return v.toString(16);
            }),
        };
    }
}

import type { Entity } from '@digital-net/core';
import { PuckData } from '@digital-net/react-digital-puck';

export interface FrameModel extends Entity {
    name: string;
    data: string;
}

export class FrameModelHelper {
    static getDefaultPayload(): Partial<FrameModel> {
        return {
            data: JSON.stringify(PuckData.default),
            name: 'xxxx-xxxx-xxxx-xxxx'.replace(/[xy]/g, (c) => {
                const r = (Math.random() * 16) | 0;
                const v = c === 'x' ? r : (r & 0x3) | 0x8;
                return v.toString(16);
            }),
        };
    }
}

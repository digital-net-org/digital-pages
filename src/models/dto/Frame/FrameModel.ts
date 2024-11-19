import { type Data } from '@measured/puck';
import { type EntityBase } from '../EntityBase';
import { defaultPuckData } from '@/puck';

export interface FrameModel extends EntityBase<number> {
    name: string;
    data: Data;
}

export interface RawFrameModel extends Omit<FrameModel, 'data'> {
    data: string;
}

export class FrameModelHelper {
    static fromRaw(raw: RawFrameModel): FrameModel {
        return {
            ...raw,
            data: JSON.parse(raw.data) as Data,
        };
    }

    static toRaw(frame: FrameModel): RawFrameModel {
        return {
            ...frame,
            data: JSON.stringify(frame.data),
        };
    }

    static getDefaultPayload(): Partial<RawFrameModel> {
        return {
            data: JSON.stringify(defaultPuckData),
            name: 'xxxx-xxxx-xxxx-xxxx'.replace(/[xy]/g, c => {
                const r = (Math.random() * 16) | 0;
                const v = c === 'x' ? r : (r & 0x3) | 0x8;
                return v.toString(16);
            }),
        };
    }
}
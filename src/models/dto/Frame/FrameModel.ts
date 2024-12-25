import {type Data} from '@measured/puck';
import {type Entity} from '../Entity';
import {defaultPuckData} from '@/puck';

export interface FrameModel extends Entity<number> {
    name: string;
    data: Data;
}

export class FrameModelHelper {

    static getDefaultPayload(): Partial<FrameModel> {
        return {
            data: defaultPuckData,
            name: 'xxxx-xxxx-xxxx-xxxx'.replace(/[xy]/g, c => {
                const r = (Math.random() * 16) | 0;
                const v = c === 'x' ? r : (r & 0x3) | 0x8;
                return v.toString(16);
            }),
        };
    }
}
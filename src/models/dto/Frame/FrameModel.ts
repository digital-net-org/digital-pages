import { type Data } from '@measured/puck';
import { type EntityBase } from '../EntityBase';

export interface FrameModel extends Omit<EntityBase, 'id'> {
    id: number;
    name: string;
    data: Data;
}

export interface RawFrameModel extends Omit<FrameModel, 'data'> {
    data: string;
}

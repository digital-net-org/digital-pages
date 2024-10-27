import { type EntityBase } from '../EntityBase';

export interface FrameModel extends Omit<EntityBase, 'id'> {
    id: number;
    name: string;
    data: string;
}

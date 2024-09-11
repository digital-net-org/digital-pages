import { type EntityBase } from '../EntityBase';

export interface ViewFrameModel extends Omit<EntityBase, 'id'> {
    id: number;
    name: string;
    data: string;
}

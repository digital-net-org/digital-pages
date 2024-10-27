import { type EntityBase } from '../EntityBase';
import { type EViewType } from './EViewType';
import { type FrameModel } from '../Frame/FrameModel';

export interface ViewModel extends Omit<EntityBase, 'id'> {
    id: number;
    title: string;
    isPublished: boolean;
    type: EViewType;
    frameId: number;
    frame: FrameModel;
}

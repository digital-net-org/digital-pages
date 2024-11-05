import { type EntityBase } from '../EntityBase';
import { type FrameModel } from '../Frame/FrameModel';
import { type EViewType } from './EViewType';

export interface ViewModel extends EntityBase<number> {
    title: string;
    isPublished: boolean;
    type: EViewType;
    frameId: number;
    frame: FrameModel;
}

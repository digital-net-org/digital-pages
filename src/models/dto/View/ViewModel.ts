import { type Entity } from '../Entity';
import { type FrameModel } from '../Frame/FrameModel';
import { type EViewType } from './EViewType';

export interface ViewModel extends Entity<number> {
    title: string;
    isPublished: boolean;
    type: EViewType;
    frameId: number;
    frame: FrameModel;
}

import { type EntityBase } from '../EntityBase';
import { type EViewType } from './EViewType';
import { type ViewFrameModel } from '../ViewFrame/ViewFrame';

export interface ViewModel extends Omit<EntityBase, 'id'> {
    id: number;
    title: string;
    isPublished: boolean;
    type: EViewType;
    publishedFrameId: number;
    frames: Array<ViewFrameModel>;
}

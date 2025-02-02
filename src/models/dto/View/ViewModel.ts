import type { Entity } from '@digital-lib/core';
import { type FrameModel } from '../Frame/FrameModel';
import { type ViewType } from './ViewType';

export interface ViewModel extends Entity {
    title: string;
    isPublished: boolean;
    type: ViewType;
    frameId: number;
    frame: FrameModel;
}

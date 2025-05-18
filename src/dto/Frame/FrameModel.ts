import type { Entity } from '@digital-lib/dto';

export interface FrameModel extends Entity {
    configId: number;
    name: string;
    data: string;
    version: string;
}

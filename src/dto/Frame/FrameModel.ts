import { StringIdentity } from '@digital-lib/core';
import { PuckDataHelper } from '@/editor';
import type { Entity } from '@digital-lib/dto';

export interface FrameModel extends Entity {
    name: string;
    data: string;
}

export class FrameModelHelper {
    static getDefaultPayload(): Partial<FrameModel> {
        return {
            data: JSON.stringify(PuckDataHelper.default),
            name: StringIdentity.generate(),
        };
    }
}

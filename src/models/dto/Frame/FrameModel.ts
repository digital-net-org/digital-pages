import { type Entity, StringIdentity } from '@digital-lib/core';
import { PuckDataHelper } from '@digital-lib/react-digital-puck';

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

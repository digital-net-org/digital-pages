import { type Entity, StringIdentity } from '@digital-net/core';

import { PuckData } from '@digital-net/react-digital-puck';

export interface FrameModel extends Entity {
    name: string;
    data: string;
}

export class FrameModelHelper {
    static getDefaultPayload(): Partial<FrameModel> {
        return {
            data: JSON.stringify(PuckData.default),
            name: StringIdentity.generate(),
        };
    }
}

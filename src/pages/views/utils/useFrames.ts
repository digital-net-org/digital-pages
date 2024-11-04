import { useCrud } from '@/api';
import { type FrameModel, type RawFrameModel } from '@/models';
import { defaultPuckData } from '@/puck';
import type { Data } from '@measured/puck';
import { safeParse } from '@safari-digital/core';
import React from 'react';

export default function useFrames() {
    const {
        models: frames,
        create,
        ...frameApi
    } = useCrud<FrameModel, RawFrameModel>({
        endpoint: 'frame',
        modelConverter: ({ data, ...frame }) => ({
            ...frame,
            data: safeParse(data) as Data,
        }),
    });

    const [selectedFrame, setSelectedFrame] = React.useState<FrameModel | undefined>(undefined);

    const createFrame = React.useCallback(
        () =>
            create({
                data: JSON.stringify(defaultPuckData),
                name: 'xxxx-xxxx-xxxx-xxxx'.replace(/[xy]/g, c => {
                    const r = (Math.random() * 16) | 0;
                    const v = c === 'x' ? r : (r & 0x3) | 0x8;
                    return v.toString(16);
                }),
            }),
        [create],
    );

    return {
        ...frameApi,
        create: createFrame,
        frames,
        selectedFrame,
        setSelectedFrame,
    };
}

import { type FrameModel } from '@/models';
import React from 'react';
import useFrameApi from './api/useFrameApi';

export default function useFrames() {
    const frameApi = useFrameApi();
    const [selectedFrame, setSelectedFrame] = React.useState<FrameModel | undefined>(undefined);

    return {
        ...frameApi,
        selectedFrame,
        setSelectedFrame,
    };
}

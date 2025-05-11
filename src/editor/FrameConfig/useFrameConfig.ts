import React from 'react';
import { FrameConfigContext } from '@/editor';

export function useFrameConfig() {
    return React.useContext(FrameConfigContext);
}

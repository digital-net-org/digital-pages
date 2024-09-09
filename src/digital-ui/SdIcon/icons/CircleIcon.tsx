import React from 'react';
import type { SdIconProps } from '../types';
import SdBaseIcon from '../SdBaseIcon';

export const CircleIcon = (props: SdIconProps) => (
    <SdBaseIcon {...props}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8" />
        </svg>
    </SdBaseIcon>
);

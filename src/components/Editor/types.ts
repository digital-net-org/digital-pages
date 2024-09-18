import type React from 'react';
import type { ValueOf } from '@/types';
import { type SdIcon } from '@/digital-ui';

export interface Tool {
    key: string;
    icon: ValueOf<typeof SdIcon>;
    render: React.ReactNode;
    separator?: boolean;
    alwaysEnabled?: boolean;
}

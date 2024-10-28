import type { ValueOf } from '@safari-digital/core';
import { type Icon } from '@safari-digital/digital-ui';
import type React from 'react';

export interface Tool {
    key: string;
    icon: ValueOf<typeof Icon>;
    render: React.ReactNode;
    separator?: boolean;
    alwaysEnabled?: boolean;
}

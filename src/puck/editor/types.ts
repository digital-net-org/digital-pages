import type { ValueOf } from '@safari-digital/core';
import { type Icon, type ButtonProps } from '@safari-digital/digital-ui';
import React, { type PropsWithChildren } from 'react';

export interface Tool {
    key: string;
    icon: ValueOf<typeof Icon>;
    render: React.ReactNode;
    separator?: boolean;
    disabled?: boolean;
    alwaysEnabled?: boolean;
}

export interface Action extends Omit<Tool, 'render' | 'icon'>, PropsWithChildren {
    variant?: ButtonProps['variant'];
    onClick: ButtonProps['onClick'];
}

'use client';

import React, { type PropsWithChildren } from 'react';

import { SdButton } from '../../../SdButton';
import { SdIcon } from '../../../SdIcon';
import './styles.css';
import { useClassName } from '@/utils';

interface DrawerBackgroundProps extends PropsWithChildren {
    onClose: () => void;
    position?: 'left' | 'right';
}

export default function DrawerHeader({ children, onClose, ...props }: DrawerBackgroundProps) {
    const className = useClassName(props, 'SdDrawer-header');
    return (
        <div {...props} className={className}>
            <div className="SdDrawer-header-content">{children}</div>
            <div className="SdDrawer-header-close">
                <SdButton variant="icon" onClick={onClose}>
                    <SdIcon.CloseIcon />
                </SdButton>
            </div>
        </div>
    );
}

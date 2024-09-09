import React, { type PropsWithChildren } from 'react';
import { useClassName } from '@/utils';
import DrawerBackground from './components/DrawerBackground/DrawerBackground';
import DrawerHeader from './components/DrawerHeader/DrawerHeader';
import './styles.css';

export interface SdDrawerProps extends PropsWithChildren {
    open: boolean;
    onClose: () => void;
    renderHeader?: () => React.ReactNode;
    direction?: 'left' | 'right';
}

export default function SdDrawer({ children, direction = 'left', renderHeader, ...props }: SdDrawerProps) {
    const className = useClassName({ direction, ...props }, 'SdDrawer');

    return (
        <React.Fragment>
            <DrawerBackground {...props} />
            <dialog {...props} className={className}>
                <DrawerHeader {...props}>{renderHeader && renderHeader()}</DrawerHeader>
                <div className="SdDrawer-content">{children}</div>
            </dialog>
        </React.Fragment>
    );
}

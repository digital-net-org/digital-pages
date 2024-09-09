import React, { type PropsWithChildren } from 'react';
import { useClassName } from '@/utils';
import { useOnOpen } from './useOnOpen';
import { useAnchor } from './useAnchor';
import './styles.css';

export interface SdPopOverProps extends PropsWithChildren {
    anchor: HTMLElement | null;
    open: boolean;
    direction?: 'left' | 'right';
    includeAnchor?: boolean;
    onClose: () => void;
    onOpen?: () => void;
}

export default function SdPopOver({ children, anchor, onOpen, onClose, ...props }: SdPopOverProps) {
    const className = useClassName({ ...props }, 'SdPopOver');
    const dialogRef = React.useRef(null);
    const placeHolderRef = React.useRef(null);

    useOnOpen(props.open, onOpen);
    useAnchor(anchor, placeHolderRef.current, dialogRef.current, props);

    const handleOnClose = React.useCallback(() => onClose(), [onClose]);

    return (
        <dialog {...props} ref={dialogRef} className={className} onClose={handleOnClose}>
            <div ref={placeHolderRef} className="SdPopOver-placeholder" />
            <div className="SdPopOver-content">{children}</div>
        </dialog>
    );
}

import React, { type PropsWithChildren } from 'react';
import { useClassName, useProps } from '@/utils';
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

export default function SdPopOver({ children, anchor, open, onOpen, onClose, ...props }: SdPopOverProps) {
    const className = useClassName({ ...props }, 'SdPopOver');
    const { htmlProps } = useProps(props);

    const dialogRef = React.useRef(null);
    const placeHolderRef = React.useRef(null);
    const backgroundRef = React.useRef(null);

    useOnOpen(open, onOpen);
    useAnchor(anchor, placeHolderRef.current, dialogRef.current, props);

    return (
        <React.Fragment>
            <dialog {...htmlProps} ref={dialogRef} open={open} className={className}>
                <div ref={placeHolderRef} className="SdPopOver-placeholder" />
                <div className="SdPopOver-content">{children}</div>
            </dialog>
            {open ? <div ref={backgroundRef} className="SdPopOver-background" onClick={onClose} /> : null}
        </React.Fragment>
    );
}

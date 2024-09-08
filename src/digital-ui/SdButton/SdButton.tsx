'use client';

import React from 'react';
import { useClassName } from '@/utils';
import SdLoader from '../SdLoader/SdLoader';
import './styles.css';

export interface SdButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
    variant?: SnButtonVariant | undefined;
    loading?: boolean | undefined;
    disabled?: boolean | undefined;
    fullwidth?: boolean | undefined;
    selected?: boolean | undefined;
    href?: string | undefined;
}

export type SnButtonVariant = 'primary' | 'secondary' | 'text' | 'icon';

export default function SdButton({ children, variant = 'primary', ...props }: SdButtonProps) {
    const className = useClassName({ ...props, variant }, 'SdButton');
    return React.createElement(props.href ? 'a' : 'button', {
        ...props,
        className,
        variant,
        children: (
            <SdButtonContent variant={variant} {...props}>
                {children}
            </SdButtonContent>
        ),
    });
}

function SdButtonContent({ children, loading, disabled }: SdButtonProps) {
    return (
        <React.Fragment>
            {loading && <SdLoader color={disabled ? 'disabled' : 'text'} size="small" />}
            <span className="SdButton-content">{children}</span>
        </React.Fragment>
    );
}
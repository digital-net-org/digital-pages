'use client';

import React, { type PropsWithChildren } from 'react';
import './styles.css';
import { useClassName } from '@/utils';

export interface SdTextProps extends PropsWithChildren {
    bold?: boolean;
    italic?: boolean;
    variant?: 'h1' | 'h2' | 'h3' | 'text' | 'caption';
}

export default function SdText(props: SdTextProps) {
    const className = useClassName(props, 'SdText');
    const tag = React.useMemo(() => {
        if (props.variant === 'text' || props.variant === undefined) return 'p';
        if (props.variant === 'caption') return 'span';
        return props.variant;
    }, [props.variant]);

    return React.createElement(tag, { ...props, className }, props.children);
}

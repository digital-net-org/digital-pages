import type React from 'react';
import { useClassName, useProps } from '@/utils';
import type { SdIconProps } from './types';
import './styles.css';

interface Props extends SdIconProps {
    children: React.ReactNode;
}

export default function SdBaseIcon({
    variant = 'filled',
    color = 'text',
    size = 'small',
    direction = 'up',
    animation = true,
    ...props
}: Props) {
    const className = useClassName({ ...props, variant, color, size, direction, animation }, 'SdIcon');
    const resolved = useProps({ ...props, variant, color, size, direction, animation, className });
    return resolved.mapProps();
}

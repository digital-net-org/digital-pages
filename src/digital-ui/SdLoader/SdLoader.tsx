import React from 'react';
import { useClassName } from '@/utils';
import './styles.css';

export interface SdLoaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
    color?: 'primary' | 'text' | 'disabled';
    size?: 'small' | 'medium' | 'large';
}

export default function SdLoader({ color = 'text', size = 'medium', ...props }: SdLoaderProps) {
    const className = useClassName({ ...props, color, size }, 'SdLoader');

    return (
        <div className={className}>
            {Array(4)
                .fill(null)
                .map((_, i) => (
                    <div key={i} />
                ))}
        </div>
    );
}

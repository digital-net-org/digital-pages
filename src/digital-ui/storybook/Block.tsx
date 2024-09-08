import React from 'react';

interface Props {
    children: React.ReactNode;
    resizable?: boolean;
    bordered?: boolean;
    wrap?: boolean;
    gap?: number;
}

export default function Block({ children, ...props }: Props) {
    return (
        <div
            style={{
                display: 'flex',
                flexWrap: props.wrap ? 'wrap' : 'initial',
                gap: props.gap ? `${props.gap}rem` : 'initial',
                border: props.bordered ? '1px solid red' : 'unset',
                ...(() => {
                    if (props.resizable) {
                        return {
                            width: '100px',
                            height: '100px',
                            resize: 'both',
                            overflow: 'hidden',
                        };
                    }
                    return {};
                })(),
            }}>
            {children}
        </div>
    );
}

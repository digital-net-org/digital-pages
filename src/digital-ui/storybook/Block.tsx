import React from 'react';

interface Props {
    children: React.ReactNode;
    resizable?: boolean;
    bordered?: boolean;
    wrap?: boolean;
    gap?: number;
    full?: boolean;
    centerContent?: boolean;
    color?: string;
    flexDir?: 'row' | 'column';
}

export default function Block({ children, ...props }: Props) {
    return (
        <div
            style={{
                backgroundColor: props.color,
                width: props.full ? '100%' : 'initial',
                height: props.full ? '100%' : 'initial',
                display: 'flex',
                flexDirection: props.flexDir || 'row',
                justifyContent: props.centerContent ? 'center' : 'initial',
                alignItems: props.centerContent ? 'center' : 'initial',
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

import React, { type PropsWithChildren } from 'react';

export default function Page({ children }: PropsWithChildren) {
    return (
        <main
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                height: '100vh',
                width: '100vw',
            }}>
            {children}
        </main>
    );
}

import React, { type PropsWithChildren } from 'react';

function List({ children }: PropsWithChildren) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '1rem 0',
                gap: '.5rem',
                height: '100%',
                width: '100%',
            }}>
            {children}
        </div>
    );
}

function Row({ children }: PropsWithChildren) {
    return <div style={{ display: 'flex', justifyContent: 'space-between' }}>{children}</div>;
}

export default Object.assign(List, { Row });

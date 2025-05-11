import React from 'react';
import { DigitalApp } from '@/app/DigitalApp';
import { FrameConfigProvider } from '@/editor';
import '@measured/puck/puck.css';
import './styles.theme.css';
import './styles.puck.css';

export function PagesApp({ children }: React.PropsWithChildren) {
    return (
        <FrameConfigProvider>
            <DigitalApp>{children}</DigitalApp>
        </FrameConfigProvider>
    );
}

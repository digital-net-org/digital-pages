import React from 'react';
import { DigitalApp } from '@/app/DigitalApp';
import { PagesAppProvider } from '@/app/PagesAppContext';
import '@measured/puck/puck.css';
import './styles.theme.css';
import './styles.puck.css';
import '@digital-lib/react-digital/Application/App/alerts/Alerts.styles.css';

export function PagesApp({ children }: React.PropsWithChildren) {
    return (
        <PagesAppProvider>
            <DigitalApp>{children}</DigitalApp>
        </PagesAppProvider>
    );
}

import React from 'react';
import { App, Localization } from '@digital-lib/react-digital';
import { FrameConfigView } from './Settings';
import { useAppAlerts } from './useAppAlerts';

export function DigitalApp({ children }: React.PropsWithChildren) {
    const alerts = useAppAlerts();

    return (
        <App
            settingsViews={{
                views: { frame: <FrameConfigView /> },
                onLabelRender: key => Localization.translate(`settings:${key}.label`),
            }}
            alerts={alerts}
        >
            {children}
        </App>
    );
}

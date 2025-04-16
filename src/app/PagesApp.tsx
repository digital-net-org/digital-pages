import React from 'react';
import { App, Localization } from '@digital-lib/react-digital';
import '@measured/puck/puck.css';
import './styles.theme.css';
import './styles.puck.css';
import { FrameConfigView } from './Settings';

export default function PagesApp({ children }: React.PropsWithChildren) {
    /* TODO: 
        - Add parameter access to Puck schema upload/selection
    */
    return (
        <App
            settingsViews={{
                views: {
                    frame: <FrameConfigView />,
                },
                onLabelRender: key => Localization.translate(`settings:${key}.label`),
            }}
        >
            {children}
        </App>
    );
}

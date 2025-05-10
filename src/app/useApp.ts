import React from 'react';
import { useDigitalApp } from '@digital-lib/react-digital';
import { PagesAppContext } from './PagesAppContext';

export function useApp() {
    const digitalAppState = useDigitalApp();
    const appState = React.useContext(PagesAppContext);

    return {
        ...digitalAppState,
        ...appState,
    };
}

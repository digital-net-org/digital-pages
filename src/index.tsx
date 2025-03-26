import '@measured/puck/puck.css';

import React from 'react';
import { DigitalApp } from '@digital-lib/react-digital';
import { App } from '@digital-lib/react-digital-ui';

DigitalApp.createReactApp((children: React.ReactNode) => <App>{children}</App>, {
    idbConfig: {
        stores: ['frame'],
        name: 'safari-digital',
        version: 1,
    },
});

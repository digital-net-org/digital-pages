import '@measured/puck/puck.css';

import React from 'react';
import { DigitalApp } from '@digital-lib/react-digital';
import { App } from '@digital-lib/react-digital-ui';

DigitalApp.createReactApp((children: React.ReactNode) => <App>{children}</App>, {
    axiosConfig: {
        baseURL: DIGITAL_API_URL,
    },
    idbConfig: {
        stores: ['frame'],
        name: 'safari-digital',
        version: 1,
    },
    router: [{ path: '*', isPublic: false, element: <React.Fragment>'NOT FOUND'</React.Fragment> }],
});

import '@digital-lib/react-digital-ui/assets/digital-net.default.css';
import '@measured/puck/puck.css';
import './fontsources';
import './styles.globals.css';
import './styles.puck.css';
import './styles.theme.css';

import { AppLayout } from '@/app';
import { ReactDigitalApp } from '@digital-lib/react-digital';
import React from 'react';

new ReactDigitalApp({
    axiosConfig: {
        baseURL: DIGITAL_API_URL,
    },
    userApi: {
        refreshToken: '/authentication/user/refresh',
        logout: '/authentication/user/logout',
        login: '/authentication/user/login',
    },
    idbConfig: {
        stores: ['frame'],
        name: 'safari-digital',
        version: 1,
    },
    router: [
        { path: '*', element: <React.Fragment>'NOT FOUND'</React.Fragment> },
    ],
    routerOptions: {
        publicRoutes: [APP_PATH_LOGIN],
        loginRedirect: APP_PATH_HOME,
        logoutRedirect: APP_PATH_LOGIN,
    },
})
    .renderReactTree((children: React.ReactNode) => (
        <AppLayout>{children}</AppLayout>
    ));

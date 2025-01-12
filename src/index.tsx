import '@measured/puck/puck.css';
import '@digital-net/react-digital-ui/assets/digital-net.default.css';
import './styles.globals.css';
import './styles.theme.css';
import './styles.puck.css';
import './fontsources';

import React from 'react';
import { t } from 'i18next';
import { ReactDigitalApp } from '@digital-net/react-digital';
import { AppLayout } from '@/app';

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
    renderDocumentName: current => t(`router:page.title.${current}`) + ` | ${APP_DOCUMENT_NAME}`,
})
    .renderReactTree((children: React.ReactNode) => (
        <AppLayout>{children}</AppLayout>
    ));

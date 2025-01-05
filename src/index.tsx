import '@measured/puck/puck.css';
import '@digital-net/react-digital-ui/assets/digital-net.default.css';
import './styles.globals.css';
import './styles.theme.css';
import './styles.puck.css';
import './fontsources';

import React from 'react';
import { t } from 'i18next';
import { ReactDigitalApp } from '@digital-net/react-digital';
import { DigitalIdbPlugin } from '@digital-net/react-digital-idb';
import { DigitalClientPlugin } from '@digital-net/react-digital-client';
import { DigitalUserPlugin } from '@digital-net/react-digital-user';
import { DigitalLocalizePlugin } from '@digital-net/react-digital-localize';
import { DigitalUiPlugin } from '@digital-net/react-digital-ui';
import { DigitalPuckPlugin } from '@digital-net/react-digital-puck';
import { AppLayout } from '@/app';
import { digitalPuckConfig } from '@/digitalPuckConfig';

new ReactDigitalApp({
    router: [
        { path: '*', element: <React.Fragment>'NOT FOUND'</React.Fragment> },
    ],
    renderDocumentName: current => t(`router:page.title.${current}`) + ` | ${APP_DOCUMENT_NAME}`,
})
    .addPlugin(
        new DigitalIdbPlugin({
            stores: ['frame'],
            name: 'safari-digital',
            version: 1,
        }),
        new DigitalClientPlugin({
            axiosConfig: {
                baseURL: DIGITAL_API_URL,
            },
        }),
        new DigitalUserPlugin({
            routerOptions: {
                publicRoutes: [APP_PATH_LOGIN],
                loginRedirect: APP_PATH_HOME,
                logoutRedirect: APP_PATH_LOGIN,
            },
            userApi: {
                refreshToken: '/authentication/user/refresh',
                logout: '/authentication/user/logout',
                login: '/authentication/user/login',
            },
        }),
        new DigitalPuckPlugin({ config: digitalPuckConfig }),
        new DigitalLocalizePlugin(),
        new DigitalUiPlugin(),
    )
    .renderReactTree((children: React.ReactNode) => (
        <AppLayout>{children}</AppLayout>
    ));

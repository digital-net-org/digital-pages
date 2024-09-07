import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { LoginView } from '@/views';
import { Layout, type LayoutProps } from '@/components';

export const router = createBrowserRouter(
    (
        [
            {
                path: APP_PATH_HOME,
                name: 'HOME',
                children: 'HOME',
                loggedIn: true,
            },
            {
                path: APP_PATH_LOGIN,
                name: 'LOGIN',
                children: <LoginView />,
            },
            {
                path: '*',
                name: 'NOT FOUND',
                children: 'NOT FOUND',
            },
        ] satisfies Array<LayoutProps>
    ).map(({ path, ...props }) => ({ path, element: <Layout path={path} {...props} /> })),
);

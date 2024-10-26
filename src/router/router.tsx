import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { LoginView, Views } from '@/views';
import Page from './components/Page';

export interface AppRoute {
    isPublic?: boolean;
    name: string | undefined;
    path: `/${string}` | '*';
    children: React.ReactNode;
    isNavigable?: boolean;
}

export const appRoutes = [
    {
        path: APP_PATH_HOME,
        name: 'HOME',
        children: 'HOME',
        isPublic: false,
        isNavigable: true,
    },
    {
        path: APP_PATH_LOGIN,
        name: 'LOGIN',
        children: <LoginView />,
        isPublic: true,
        isNavigable: false,
    },
    {
        path: '/views',
        name: 'VIEWS',
        children: <Views />,
        isPublic: false,
        isNavigable: true,
    },
    {
        path: '*',
        name: 'NOT FOUND',
        children: 'NOT FOUND',
        isPublic: true,
        isNavigable: false,
    },
] satisfies Array<AppRoute>;

export const router = createBrowserRouter(
    appRoutes.map(props => ({
        path: props.path,
        element: (
            <React.Fragment>
                <Page {...props} />
            </React.Fragment>
        ),
    })),
);

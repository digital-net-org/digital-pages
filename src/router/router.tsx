import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { LoginView, Views } from '@/views';
import { Layout } from '@/components';
import { type MiddlewareParams } from '@/router/middlewares';
import AuthMiddleware from '@/router/middlewares/authMiddleware';
import DocumentMiddleware from './middlewares/DocumentMiddleware';

export interface AppRoute extends MiddlewareParams {
    children: React.ReactNode;
}

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
                path: 'views',
                name: 'VIEWS',
                children: <Views />,
                loggedIn: true,
            },
            {
                path: '*',
                name: 'NOT FOUND',
                children: 'NOT FOUND',
            },
        ] satisfies Array<AppRoute>
    ).map(({ children, ...props }) => ({
        path: props.path,
        element: (
            <React.Fragment>
                <AuthMiddleware {...props} />
                <DocumentMiddleware {...props} />
                <Layout children={children} />
            </React.Fragment>
        ),
    })),
);

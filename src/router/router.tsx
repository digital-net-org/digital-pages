import * as React from 'react';
import { createBrowserRouter, RouterProvider as Router } from 'react-router-dom';
import BasePage from './components/BasePage';
import RouterBuilder from './utils/RouterBuilder';

export const publicRoutes = [APP_PATH_NOT_FOUND, APP_PATH_LOGIN];

export const router = [{ path: '*', element: <React.Fragment>'NOT FOUND'</React.Fragment> }, ...RouterBuilder.build()];

export default function RouterProvider() {
    return (
        <Router
            router={createBrowserRouter(
                router.map(({ element, path }) => ({
                    path,
                    element: <BasePage isPublic={publicRoutes.includes(path)}>{element}</BasePage>,
                })),
            )}
        />
    );
}

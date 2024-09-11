import React from 'react';
import { Navigate } from 'react-router-dom';
import { type MiddlewareParams } from './types';
import { useApiUser } from '@/api';

export default function AuthMiddleware({ loggedIn, name, path }: MiddlewareParams) {
    const { isLogged } = useApiUser();
    if (loggedIn && !isLogged()) return <Navigate to={APP_PATH_LOGIN} />;
    if (isLogged() && path === APP_PATH_LOGIN) return <Navigate to={APP_PATH_HOME} />;
}

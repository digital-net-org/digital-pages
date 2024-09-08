import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '@/context';
import { type MiddlewareParams } from './types';

export default function AuthMiddleware({ loggedIn, name, path }: MiddlewareParams) {
    const { isLogged } = useUserContext();

    React.useEffect(() => {
        document.title = `${name ?? ''} | Safari-Digital`;
    }, [name]);

    if (loggedIn && !isLogged) return <Navigate to={APP_PATH_LOGIN} />;
    if (isLogged && path === APP_PATH_LOGIN) return <Navigate to={APP_PATH_HOME} />;
}

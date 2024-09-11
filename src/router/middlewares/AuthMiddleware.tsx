import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApiUser } from '@/api';
import { type MiddlewareParams } from './types';

export default function AuthMiddleware({ loggedIn, path }: MiddlewareParams) {
    const navigate = useNavigate();
    const { isLogged } = useApiUser();

    React.useEffect(() => {
        if (!isLogged() && loggedIn) navigate(APP_PATH_LOGIN);
        if (isLogged() && path === APP_PATH_LOGIN) navigate(APP_PATH_HOME);
    }, [isLogged, loggedIn, navigate, path]);

    return null;
}

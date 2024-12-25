import React from 'react';
import {useNavigate} from 'react-router-dom';
import type {Result} from '@/models';
import {type StoredUser, UserContext} from './ApiUserContext';
import {Jwt} from '../utils/Jwt';
import {useDigitalMutation} from '../hooks';

export interface ApiUser extends StoredUser {
    login: (body: Record<string, any>) => void;
    logout: () => void;
    loading: boolean;
    isLogged: () => boolean;
    isExpired: () => boolean;
}

export default function useApiUser(): ApiUser {
    const navigate = useNavigate();
    const { update, remove, ...user } = React.useContext(UserContext);

    const {mutate: login, isPending: loginLoading} = useDigitalMutation('/authentication/user/login', {
        onSuccess: ({value}: Result<string>) => {
            const decoded = Jwt.decode(value);
            if (!decoded) return;
            update({ ...decoded.content, token: decoded.token });
            navigate(APP_PATH_HOME);
        },
        withCredentials: true,
    });
    const {mutate: logout, isPending: logoutLoading} = useDigitalMutation('/authentication/user/logout', {
        onSuccess: () => {
            remove();
            navigate(APP_PATH_HOME);
        },
        withCredentials: true,
    });

    const loading = React.useMemo(() => logoutLoading || loginLoading, [loginLoading, logoutLoading]);

    return {
        ...user,
        login,
        logout: () => logout({}),
        loading,
    };
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Result } from '@/models';
import { Jwt } from '@/utils';
import { UserContext } from './ApiUserContext';
import { useDigitalMutation } from '../hooks';
import { type StoredToken } from './StoredUser';

export interface ApiUser extends StoredToken {
    login: (body: Record<string, any>) => void;
    logout: () => void;
    loading: boolean;
    isLogged: () => boolean;
    isExpired: () => boolean;
}

export default function useApiUser(): ApiUser {
    const navigate = useNavigate();
    const { update, remove, ...user } = React.useContext(UserContext);

    const { mutate: login, isPending: loginLoading } = useDigitalMutation('/authentication/login', {
        onSuccess: ({ value }: Result<{ token: string }>) => {
            const decoded = Jwt.decode(value.token);
            if (!decoded) return;
            update({ ...decoded.content, token: decoded.token });
            navigate(APP_PATH_HOME);
        },
        withCredentials: true,
    });
    const { mutate: logout, isPending: logoutLoading } = useDigitalMutation('/authentication/logout', {
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

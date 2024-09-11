import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Result } from '@/models';
import { Jwt } from '@/utils';
import useDigitalMutation from './useDigitalMutation';
import ApiUser, { type StoredUser } from '../ApiUser';

export default function useApiUser() {
    const navigate = useNavigate();
    const [user, setUser] = React.useState<StoredUser>({
        isLogged: () => false,
        isExpired: () => false,
    });
    React.useLayoutEffect(() => setUser(ApiUser.get()), []);

    const { mutate: login, isPending: loginLoading } = useDigitalMutation('/authentication/login', {
        onSuccess: ({ value }: Result<{ token: string }>) => {
            const decoded = Jwt.decode(value.token);
            if (!decoded) return;
            ApiUser.update({
                ...decoded.content,
                token: value.token,
                exp: decoded.exp,
            });
            navigate(APP_PATH_HOME);
        },
    });
    const { mutate: logout, isPending: logoutLoading } = useDigitalMutation('/authentication/logout', {
        onSuccess: () => {
            ApiUser.remove();
            navigate(APP_PATH_HOME);
        },
    });

    const loading = React.useMemo(() => logoutLoading || loginLoading, [loginLoading, logoutLoading]);

    return {
        ...user,
        login,
        logout: () => logout({}),
        loading,
    };
}

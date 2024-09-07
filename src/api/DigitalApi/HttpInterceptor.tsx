import React, { type PropsWithChildren } from 'react';
import { type Result } from '@/models';
import { useUserContext } from '@/context';
import { Jwt } from '@/utils';
import DigitalApi from './DigitalApi';

export default function HttpInterceptor(props: PropsWithChildren) {
    const { setUser, isLogged, isTokenExpired } = useUserContext();

    React.useEffect(() => {
        DigitalApi.onError(async error => {
            if (!isLogged || !isTokenExpired) return false;

            const { status, data } = await DigitalApi.post<Result<string>>('/authentication/refresh');
            if (status !== 200 || !data.value) return false;

            const decoded = Jwt.decode(data.value);
            setUser({
                id: decoded?.content.id ?? null,
                role: decoded?.content.role ?? 0,
                token: data.value ?? null,
                exp: decoded?.exp ?? 0,
            });
            return true;
        });
    }, [isLogged, isTokenExpired, setUser]);

    return props.children;
}

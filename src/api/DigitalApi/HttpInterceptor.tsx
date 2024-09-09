import React, { type PropsWithChildren } from 'react';
import { type Result } from '@/models';
import { useUserContext } from '@/context';
import { Jwt } from '@/utils';
import DigitalApi from './DigitalApi';

export default function HttpInterceptor(props: PropsWithChildren) {
    const { setUser, isLogged, isTokenExpired } = useUserContext();

    React.useEffect(() => {
        DigitalApi.onError(async () => {
            if (!isLogged || !isTokenExpired) return null;

            const { status, data } = await DigitalApi.mutate<Result<string>>('/authentication/refresh');
            if (status !== 200 || !data.value) return null;

            const decoded = Jwt.decode(data.value);
            if (!decoded) return null;

            setUser({
                id: decoded.content.id,
                role: decoded.content.role,
                token: data.value,
                exp: decoded.exp,
            });
            return data.value;
        });
    }, [isLogged, isTokenExpired, setUser]);

    return props.children;
}

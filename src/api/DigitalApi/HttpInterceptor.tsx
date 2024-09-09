import React, { type PropsWithChildren } from 'react';
import { useUserContext } from '@/context';
import DigitalApi from './DigitalApi';

export default function HttpInterceptor(props: PropsWithChildren) {
    const { setUser, isLogged, isTokenExpired } = useUserContext();

    React.useEffect(() => {
        DigitalApi.onRequest();

        DigitalApi.onError(async () => {
            if (!isLogged || !isTokenExpired) return null;
            const token = await DigitalApi.refreshTokens();
            if (!token?.content || !token?.exp) return null;

            setUser({
                id: token.content?.id,
                role: token.content?.role,
                token: token.value,
                exp: token.exp,
            });
            return token.value;
        });
    }, [isLogged, isTokenExpired, setUser]);

    return props.children;
}

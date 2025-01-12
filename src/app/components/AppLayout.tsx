import React, { type PropsWithChildren } from 'react';
import { useDigitalUser } from '@digital-net/react-digital-user';
import { useDigitalRouter } from '@digital-net/react-digital';
import AppHeader from './AppHeader';

export default function AppLayout({ children }: PropsWithChildren) {
    const { current } = useDigitalRouter();
    const { isLogged, isRoutePublic } = useDigitalUser();
    return (
        <main className="Page">
            {isLogged && !isRoutePublic(current) ? <AppHeader /> : null}
            {children}
        </main>
    );
}

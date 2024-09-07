import './styles.css';
import React, { type PropsWithChildren } from 'react';
import { useUserContext } from '@/context';
import { Navigate } from 'react-router-dom';

export interface LayoutProps extends PropsWithChildren {
    loggedIn?: boolean;
    name: string | undefined;
    path: string;
}

export default function Layout({ children, loggedIn = false, name, path }: LayoutProps) {
    const { isLogged } = useUserContext();

    React.useEffect(() => {
        document.title = `${name ?? ''} | Safari-Digital`;
    }, [name]);

    if (loggedIn && !isLogged) return <Navigate to={APP_PATH_LOGIN} />;
    if (isLogged && path === APP_PATH_LOGIN) return <Navigate to={APP_PATH_HOME} />;

    return <main className="Page">{children}</main>;
}

import './styles.css';
import React, { type PropsWithChildren } from 'react';
import { useUserContext } from '@/context';
import { Navigate } from 'react-router-dom';

export interface PageProps extends PropsWithChildren {
    loggedIn?: boolean;
    name: string | undefined;
    path: string;
}

export default function Layout({ children, loggedIn, name, path }: PageProps) {
    const { isLogged } = useUserContext();

    React.useEffect(
        () =>
            console.log({
                loggedIn,
                isLogged,
                name,
                path,
                shouldRedirectToLogin: loggedIn === true && !isLogged,
                shouldRedirectToHome: isLogged && path === APP_PATH_LOGIN,
            }),
        [isLogged, loggedIn, name, path],
    );

    React.useEffect(() => {
        document.title = `${name ?? ''} | Safari-Digital`;
    }, [name]);

    if (loggedIn === true && !isLogged) return <Navigate to={APP_PATH_LOGIN} />;
    if (isLogged && path === APP_PATH_LOGIN) return <Navigate to={APP_PATH_HOME} />;

    return <main className="Page">{children}</main>;
}

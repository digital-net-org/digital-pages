import React, { type PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApiUser } from '@/api';
import { AppHeader } from '@/app';
import useRouter from '../useRouter';
import './Page.styles.css';

export interface PageProps extends PropsWithChildren {
    isPublic?: boolean;
}

export default function Page({ children, isPublic = false }: PageProps) {
    const navigate = useNavigate();
    const { current } = useRouter();
    const { isLogged } = useApiUser();

    React.useEffect(() => {
        if (!isLogged() && !isPublic) navigate(APP_PATH_LOGIN);
        if (isLogged() && current?.path === APP_PATH_LOGIN) navigate(APP_PATH_HOME);
    }, [isLogged, isPublic, navigate, current?.path]);

    React.useEffect(() => {
        const suffix = current?.label ? `${APP_DOCUMENT_NAME_SEPARATOR}${current?.label}` : '';
        document.title = `${APP_DOCUMENT_NAME}${suffix}`;
    }, [current?.label]);

    return (
        <main className="Page">
            {isLogged() && !isPublic ? <AppHeader /> : null}
            {children}
        </main>
    );
}

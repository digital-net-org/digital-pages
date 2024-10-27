import React, { type PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApiUser } from '@/api';
import { AppHeader } from '@/app';
import useRouter from '../useRouter';
import './BasePage.styles.css';

export interface PageProps extends PropsWithChildren {
    isPublic?: boolean;
}

export default function BasePage({ children, isPublic = false }: PageProps) {
    const navigate = useNavigate();
    const { current } = useRouter();
    const { isLogged } = useApiUser();

    const unauthorized = React.useMemo(() => !isLogged() && !isPublic, [isLogged, isPublic]);

    React.useEffect(() => {
        if (unauthorized) navigate(APP_PATH_LOGIN);
        if (isLogged() && current?.path === APP_PATH_LOGIN) navigate(APP_PATH_HOME);
    }, [isLogged, navigate, current?.path, unauthorized]);

    React.useEffect(() => {
        const suffix = current?.label ? `${APP_DOCUMENT_NAME_SEPARATOR}${current?.label}` : '';
        document.title = `${APP_DOCUMENT_NAME}${suffix}`;
    }, [current?.label]);

    return (
        <main className="Page">
            {isLogged() && !isPublic ? <AppHeader /> : null}
            {!unauthorized ? children : null}
        </main>
    );
}

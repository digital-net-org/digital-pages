import React, { type PropsWithChildren } from 'react';
import { SdHeader } from '@/digital-ui';
import { useApiUser } from '@/api';
import { Location, Navigation } from './components';
import Configuration from './components/Configuration/Configuration';
import './styles.css';

export type LayoutProps = PropsWithChildren;

export default function Layout({ children }: LayoutProps) {
    const { isLogged } = useApiUser();

    return (
        <main className="Layout">
            {isLogged() ? (
                <React.Fragment>
                    <SdHeader>
                        <Navigation />
                        <Location />
                        <Configuration />
                    </SdHeader>
                    {children}
                </React.Fragment>
            ) : (
                children
            )}
        </main>
    );
}

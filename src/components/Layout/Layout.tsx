import React, { type PropsWithChildren } from 'react';
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
                    <header className="Layout-header">
                        <Navigation />
                        <Location />
                        <Configuration />
                    </header>
                    {children}
                </React.Fragment>
            ) : (
                children
            )}
        </main>
    );
}

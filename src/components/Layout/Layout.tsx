import React, { type PropsWithChildren } from 'react';
import { useApiUser } from '@/api';
import { SdDrawer, SdHeader, SdLogo } from '@/digital-ui';
import Location from './components/Location';
import Navigation from './components/Navigation';
import Settings from './components/Settings';
import Theme from './components/Theme';
import User from './components/User';
import useDrawer from './utils/useDrawer';
import './styles.css';

export type LayoutProps = PropsWithChildren;

export default function Layout({ children }: LayoutProps) {
    const [drawerState, setDrawerState] = useDrawer();
    const apiUser = useApiUser();

    return (
        <main className="Layout">
            {apiUser.isLogged() ? (
                <React.Fragment>
                    <SdHeader>
                        <Navigation onClick={setDrawerState} />
                        <Location />
                        <div>
                            <User {...apiUser} />
                            <Theme />
                            <Settings />
                        </div>
                    </SdHeader>
                    <SdDrawer
                        open={drawerState}
                        onClose={setDrawerState}
                        renderHeader={() => <SdLogo />}
                        direction="left"
                    />
                    {children}
                </React.Fragment>
            ) : (
                children
            )}
        </main>
    );
}

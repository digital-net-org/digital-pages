import React, { type PropsWithChildren } from 'react';
import { SdDrawer, SdHeader, SdLogo } from '@/digital-ui';
import { useUserContext } from '@/context';
import Location from './components/Location';
import Navigation from './components/Navigation';
import Settings from './components/Settings';
import Theme from './components/Theme';
import User from './components/User';
import './styles.css';
import useDrawer from './utils/useDrawer';

export type LayoutProps = PropsWithChildren;

export default function Layout({ children }: LayoutProps) {
    const { isLogged, user } = useUserContext();
    const [drawerState, setDrawerState] = useDrawer();

    return (
        <main className="Layout">
            {isLogged ? (
                <React.Fragment>
                    <SdHeader>
                        <Navigation onClick={setDrawerState} />
                        <Location />
                        <div>
                            <User {...user} />
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

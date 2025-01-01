import '@measured/puck/puck.css';
import '@digital-net/react-ui/assets/digital-net.default.css';
import './styles.globals.css';
import './styles.theme.css';
import './styles.puck.css';
import './fontsources';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApiProviders } from '@/api';
import { LocaleProvider } from '@/locales';
import { ThemeProvider } from '@/theme';
import { RouterProvider } from '@/router';
import { IdbProvider } from '@digital-net/react-storage';
import { DevToolProvider } from '@digital-net/react-dev-tools';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <IdbProvider stores={['frame']} name="safari-digital" version={1}>
            <DevToolProvider renderContent={() => <div>DevTool</div>} appVersion={APP_VERSION}>
                <ApiProviders>
                    <LocaleProvider>
                        <ThemeProvider>
                            <RouterProvider />
                        </ThemeProvider>
                    </LocaleProvider>
                </ApiProviders>
            </DevToolProvider>
        </IdbProvider>
    </React.StrictMode>,
);

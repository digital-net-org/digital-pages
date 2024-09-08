import './fontsources';
import './styles.globals.css';
import '@measured/puck/puck.css';
import '@safari-node/core';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeContextProvider, UserContextProvider } from '@/context';
import { HttpInterceptor } from '@/api';
import App from './App';
import RtkProvider from './api/ReactQuery/RtkProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeContextProvider>
            <UserContextProvider>
                <RtkProvider>
                    <HttpInterceptor>
                        <App />
                    </HttpInterceptor>
                </RtkProvider>
            </UserContextProvider>
        </ThemeContextProvider>
    </React.StrictMode>,
);

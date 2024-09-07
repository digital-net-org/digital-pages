import './fontsources';
import './styles.globals.css';
import '@measured/puck/puck.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeContextProvider, UserContextProvider } from '@/context';
import { HttpInterceptor } from '@/api';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeContextProvider>
            <UserContextProvider>
                <HttpInterceptor>
                    <App />
                </HttpInterceptor>
            </UserContextProvider>
        </ThemeContextProvider>
    </React.StrictMode>,
);

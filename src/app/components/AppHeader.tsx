import React from 'react';
import AppConfig from './AppConfig';
import AppLocation from './AppLocation';
import AppNavigation from './AppNavigation';
import './AppHeader.styles.css';

export default function AppHeader() {
    return (
        <header className="App-header">
            <AppNavigation />
            <AppLocation />
            <AppConfig />
        </header>
    );
}

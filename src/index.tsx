import '@measured/puck/puck.css';
import { DigitalApp } from '@digital-lib/react-digital';
import { PagesApp } from './app';

DigitalApp.create(PagesApp, {
    idbConfig: {
        stores: ['frame'],
        name: 'safari-digital',
        version: 1,
    },
});

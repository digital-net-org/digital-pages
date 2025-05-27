/// <reference types="vitest" />
/// <reference types="vite/client" />

import { resolve } from 'path';
import ViteBuilder from './packages/digital-lib/vite/ViteBuilder';

export default ViteBuilder.buildConfig({
    port: 3045,
    alias: {
        '@digital-net': resolve(__dirname, 'packages/digital-lib/packages/'),
    },
    assets: {
        'favicon.ico': resolve(__dirname, 'assets/favicon.ico'),
    },
});

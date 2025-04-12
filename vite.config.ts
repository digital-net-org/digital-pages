/// <reference types="vitest" />
/// <reference types="vite/client" />

import { resolve } from 'path';
import ViteBuilder from './packages/digital-lib/vite/ViteBuilder';
import { constants } from './vite.constants';

export default ViteBuilder.buildConfig({
    constants,
    port: 3045,
    alias: {
        '@': resolve(__dirname, 'src/'),
        '@digital-lib': resolve(__dirname, 'packages/digital-lib/packages/'),
    },
    assets: {
        'favicon.ico': resolve(__dirname, 'assets/favicon.ico'),
    },
});

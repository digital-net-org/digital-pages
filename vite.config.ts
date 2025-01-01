/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import { build } from './config/build';
import { resolveConstants } from './config/constant';

export default defineConfig({
    define: {
        global: 'globalThis',
        ...resolveConstants(),
    },
    server: {
        port: 3045,
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src/'),
            '@digital-net/core': resolve(__dirname, 'packages/digital-net/packages/core/'),
            '@digital-net/react-dev-tools': resolve(__dirname, 'packages/digital-net/packages/react-dev-tools/'),
            '@digital-net/react-elements': resolve(__dirname, 'packages/digital-net/packages/react-elements/'),
            '@digital-net/react-storage': resolve(__dirname, 'packages/digital-net/packages/react-storage/'),
            '@digital-net/react-ui': resolve(__dirname, 'packages/digital-net/packages/react-ui/'),
        },
    },
    build,
    test: {
        globals: true,
        environment: 'jsdom',
    },
    plugins: [react(), checker({ typescript: true })],
});

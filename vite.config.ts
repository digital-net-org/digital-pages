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
            '@digital-net': resolve(__dirname, 'packages/digital-net/packages/'),
        },
    },
    build,
    test: {
        globals: true,
        environment: 'jsdom',
    },
    plugins: [react(), checker({ typescript: true })],
});

/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { resolveConstants } from './config/constant';
import { build } from './config/build';
import { test } from './config/test';

export default defineConfig({
    define: {
        global: 'globalThis',
        ...resolveConstants(),
    },
    server: {
        port: 3000,
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src/'),
        },
    },
    build,
    test,
    plugins: [react()],
});

/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig({
    define: {
        global: 'globalThis',
        APP_VERSION: JSON.stringify(process.env.npm_package_version),
        APP_PATH_HOME: JSON.stringify('/'),
        APP_PATH_LOGIN: JSON.stringify('/login'),
        APP_LS_KEY_USER: JSON.stringify('user'),
        DIGITAL_API_URL: JSON.stringify(loadEnv('', process.cwd(), '').DIGITAL_API_URL),
    },
    server: {
        port: 3000,
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src/'),
        },
    },
    build: {
        outDir: 'dist/backoffice',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                lib: resolve(__dirname, 'src/index.tsx'),
            },
            output: {
                compact: true,
                strict: true,
                format: 'es',
                sourcemap: false,
                entryFileNames: '[hash].js',
                chunkFileNames: 'lib/[hash].js',
            },
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
    },
    plugins: [react()],
});

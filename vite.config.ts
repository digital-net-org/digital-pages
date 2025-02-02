/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import { resolveConstants } from './vite.constants';

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
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, '..', 'index.html'),
                lib: resolve(__dirname, '..', 'src/index.tsx'),
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
    plugins: [react(), checker({ typescript: true })],
});

/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    define: {
        global: 'globalThis',
        APP_VERSION: JSON.stringify(process.env.npm_package_version),
    },
    server: {
        port: 3000,
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@lib': resolve(__dirname, 'src/lib'),
            '@components': resolve(__dirname, 'src/components'),
            '@views': resolve(__dirname, 'src/views'),
            '@locales': resolve(__dirname, 'src/locales'),
        },
    },
    build: {
        outDir: 'dist/backoffice',
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
    plugins: [react()],
});

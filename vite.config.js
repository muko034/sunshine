import { defineConfig } from 'vite'

export default defineConfig({
    base: './',
    root: 'src',
    build: {
        outDir: '../dist'
    },
    server: {
        port: 3000,
        open: true
    },
    publicDir: '../public'
})

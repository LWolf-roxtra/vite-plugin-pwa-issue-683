import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/my/app/",
    plugins: [
        react(),
        VitePWA({
            strategies: "injectManifest",
            injectRegister: false,
            registerType: "autoUpdate",
            srcDir: "src/serviceworker",
            filename: "sw.ts",
            manifest: {
                name: "App",
            },
            injectManifest: {
                globPatterns: ["**/*.{js,css,html,svg,woff,woff2}"],
                globIgnores: [],
                maximumFileSizeToCacheInBytes: 20 * 1024 * 1024,
            },
            devOptions: {
                enabled: true,
                type: "module",
                navigateFallback: "index.html",
            },
        })
    ],
})

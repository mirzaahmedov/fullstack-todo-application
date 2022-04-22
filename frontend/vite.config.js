import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: "build",
    },
    server: {
        port: 4000,
        proxy: {
            "/api": "http://localhost:5000",
        },
    },
    resolve: {
        alias: {
            "@views": path.resolve(__dirname, "src/views"),
            "@components": path.resolve(__dirname, "src/components"),
            "@assets": path.resolve(__dirname, "src/assets"),
            "@utils": path.resolve(__dirname, "src/utils"),
            "@hooks": path.resolve(__dirname, "src/hooks"),
            "@context": path.resolve(__dirname, "src/context"),
            "@http": path.resolve(__dirname, "src/http"),
        },
    },
})

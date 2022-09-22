import { resolve } from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import UnoCSS from "@unocss/vite";
import { dirResolver, DirResolverHelper } from "vite-auto-import-resolvers";

export default defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src")
        }
    },
    plugins: [
        Vue({
            include: [/\.vue$/],
            template: {
                compilerOptions: {
                    isCustomElement: (tag: string) => tag.startsWith("i-")
                }
            }
        }),
        UnoCSS(),
        Components({
            deep: false
        }),
        DirResolverHelper(),
        AutoImport({
            imports: [
                "vue",
                "@vueuse/core"
            ],
            resolvers: [dirResolver()]
        })
    ],
    server: {
        fs: {
            allow: [".."]
        },
        host: true
    }
});

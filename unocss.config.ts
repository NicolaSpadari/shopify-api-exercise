import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTagify,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup
} from "unocss";

export default defineConfig({
    shortcuts: [
        ["crate", "container max-w-5xl mx-auto px-5 md:px-7 lg:px-10"],
        ["disabled", "opacity-60 cursor-not-allowed"],
        ["pointer", "cursor-pointer"],
        ["size-full", "w-full h-full"]
    ],
    presets: [
        presetUno(),
        presetTagify(),
        presetAttributify(),
        presetIcons({
            extraProperties: {
                "display": "inline-block",
                "vertical-align": "middle"
            }
        }),
        presetTypography(),
        presetWebFonts({
            fonts: {
                heading: {
                    name: "Montserrat",
                    weights: ["400", "500", "700"]
                },
                sans: {
                    name: "DM Sans",
                    weights: ["400", "500", "700"]
                }
            }
        })
    ],
    theme: {
        breakpoints: {
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
            xxl: "1400px",
            uw: "2000px"
        }
    },
    transformers: [
        transformerDirectives(),
        transformerVariantGroup()
    ]
});

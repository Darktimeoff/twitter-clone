// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";

export default defineNuxtConfig({
  routeRules: {
    '/': {prerender: true}
  },
  devtools: {
    enabled: true
  },
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL || "http://0.0.0.0:8000",
    }
  },
  srcDir: "src/",
  alias: {
    "~": path.resolve(__dirname, "src"),
    "@": path.resolve(__dirname, "src"),
    "@public": path.resolve(__dirname, "src/public"),
  },
  css: [
    "@/assets/style/main.scss",
    // "@/assets/icons_font/accomplishrs-icons.css",
  ],
  modules: [
    "@pinia/nuxt",
    "@invictus.codes/nuxt-vuetify",
    "@nuxtjs/google-fonts",
    '@vueuse/nuxt'
  ],
  googleFonts: {
    families: {
      Roboto: {
        wght: [400, 500, 700]
      }
    },
    display: 'swap'
  },
  vuetify: {
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },
    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true,
      useIconCDN: true,
      styles: true,
      autoImport: true,
    }
  },
  imports: {
    dirs: ["stores", "@types", "api"]
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/style/_variables.scss";
            @import "@/assets/style/_animation.scss";
          `,
        },
      },
    },
  },
  app: {
    head: {
      title: "Twitter ",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
      ],
    }
  },
  experimental: {
    typedPages: true
  }
})

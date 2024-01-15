// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      link: [
        {
          href: "https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css",
          rel: "stylesheet",
        },
      ],
    },
  },
  nitro: { experimental: { openAPI: true } },
});

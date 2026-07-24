// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@vueuse/nuxt", "@nuxt/fonts"],
  css: ["~/assets/css/main.css"],
  fonts: {
    families: [
      // Khai báo đủ các weight đang dùng (medium→extrabold) để tránh browser tự giả lập độ đậm
      { name: "Inter", provider: "google", weights: [400, 500, 600, 700, 800] },
      { name: "Merriweather", provider: "google", weights: [400, 700, 800] },
    ],
  },
  app: {
    head: {
      title: "Phục hồi tài sản",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/images/logo.png",
        },
      ],
    },
  },
});

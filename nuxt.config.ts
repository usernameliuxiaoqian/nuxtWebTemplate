export default defineNuxtConfig({
  compatibilityDate: "2025-05-25",
  runtimeConfig: {
    public: {
      baseURL: process.env.ZONI_BASE_URL,
    },
  },
  devtools: { enabled: true },
  devServer: {
    port: 3100,
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      htmlAttrs: {
        lang: "zh-CN",
      },
      viewport: "width=device-width, initial-scale=1, minimum-scale=1",
      title: "zoni8",
      meta: [
        { name: "description", content: "zoni8" },
        { name: "keywords", content: "zoni8" },
        { name: "author", content: "zoni8" },
        {
          name: "google-site-verification",
          content: process.env.GOOGLE_CONSOLE,
        },
        { name: "msvalidate.01", content: process.env.BING_CONSOLE },
        { name: "google-adsense-account", content: process.env.GOOGLE_AD },
        // { name: 'sogou_site_verification', content: process.env.SOUGO_CONSOLE },
        // { "http-equiv": 'Content-Type', content: process.env.SOUGO_CONSOLE_TYPE },
        {
          name: "360-site-verification",
          content: process.env.QIHOO360_CONSOLE,
        },
        { name: "baidu-site-verification", content: process.env.BAIDU_CONSOLE },
        { name: "renderer", content: "webkit|ie-comp|ie-stand" },
        { name: "baidu_union_verify", content: process.env.BAIDU_UNION },
      ],
      // script: [
      //   {src: `https://hm.baidu.com/hm.js?${process.env.BAIDU_TONGJI}`, async: true }
      // ],
      style: [],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  modules: [
    // '@pinia/nuxt'
    "@element-plus/nuxt",
    "@nuxt/image",
  ],
  // plugins: [
  //   "@/plugins/union-ad-vue.client.js"
  // ],
  css: [
    "@/assets/css/style.scss",
    "@/assets/css/preview.scss",
    "@/assets/css/monokai.css",
    "@/assets/css/reset.css",
  ],
});

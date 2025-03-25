// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  typescript: {
    shim: false,
    typeCheck: true,
    strict: false, // strict mode 해제
  },
  modules: [
    'nuxt-quasar-ui'
  ],
  quasar: {
     /* */ 
  },
  imports: {
    presets: [
      {
        from: 'vue-i18n',
        imports: ['useI18n'],
      },
    ],
  },
});

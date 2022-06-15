import '@nordhealth/css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', () => {
    import('@nordhealth/components')
 })
})

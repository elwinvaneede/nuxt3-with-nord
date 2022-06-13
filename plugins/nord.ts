import '@nordhealth/css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    import('@nordhealth/components')
 })
})

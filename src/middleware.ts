import { paraglideMiddleware } from './paraglide/server'
import { defineMiddleware } from 'astro:middleware'

export const onRequest = defineMiddleware((context, next) => {
  return paraglideMiddleware(context.request, () => {
    const url = new URL(context.request.url)

    if (url.pathname === '/') {
      return context.redirect('/en')
    }

    // Pass the original request (with locale prefix) to Astro's router
    // so [lang]/... route params are correctly populated.
    // Paraglide still sets the locale in AsyncLocalStorage via its middleware context.
    return next()
  })
})

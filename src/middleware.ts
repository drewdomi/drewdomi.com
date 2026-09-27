import { paraglideMiddleware } from './paraglide/server'
import { defineMiddleware } from 'astro:middleware'

export const onRequest = defineMiddleware((context, next) =>
  paraglideMiddleware(context.request, () => next()),
)

import type { APIRoute } from 'astro'
import { redirectToCVLink } from '@/utils/redirect-cv-link'

export const GET = (async () => {
  return redirectToCVLink()
}) satisfies APIRoute

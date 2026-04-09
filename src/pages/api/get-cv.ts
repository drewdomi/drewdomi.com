import type { APIRoute } from 'astro'
import { redirectToCvLink } from '@/utils/redirect-cv-link'

export const GET = (async () => {
  return redirectToCvLink()
}) satisfies APIRoute

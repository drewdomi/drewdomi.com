import type { APIRoute } from 'astro'
import { redirectToResume } from '@/utils/redirect-resume-link'

export const GET = (async () => {
  return redirectToResume()
}) satisfies APIRoute

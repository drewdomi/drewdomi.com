import type { APIRoute } from 'astro'
import { downloadVCard } from '@/utils/download-vcard'

export const GET: APIRoute = async () => {
  return downloadVCard()
}

import type { APIRoute } from 'astro'
import vcardContent from './assets/drewdomi_vcard.vcf?raw'

export const GET: APIRoute = async () => {
  return new Response(vcardContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': 'inline; filename="drewdomi_vcard.vcf"',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}

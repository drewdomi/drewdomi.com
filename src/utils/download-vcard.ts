// @ts-ignore
import vcardContent from '/vcard.vcf?url&raw'

export function downloadVCard() {
  return new Response(vcardContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': 'attachment; filename="drewdomi_vcard.vcf"',
      'Cache-Control': 'no-store',
    },
  })
}

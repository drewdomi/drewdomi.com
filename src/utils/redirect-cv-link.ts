import * as m from '@/paraglide/messages'

export async function redirectToCVLink() {
  const CVLink = m.aboutCvLink()

  return Response.redirect(CVLink, 302)
}

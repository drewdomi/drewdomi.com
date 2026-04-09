import * as m from '@/paraglide/messages'

export async function redirectToCvLink() {
  const curriculumLink = m.aboutCvLink()

  return Response.redirect(curriculumLink, 302)
}

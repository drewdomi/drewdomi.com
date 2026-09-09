import { m } from '@/paraglide/messages'

export async function redirectToResume() {
  const ResumeLink = m.aboutResumeLink()

  return Response.redirect(ResumeLink, 302)
}

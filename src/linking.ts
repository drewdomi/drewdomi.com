import type { Locale } from './paraglide/runtime.js'

type AbsolutePathname = `/${string}` | string

const pathnames: Record<AbsolutePathname, Record<Locale, AbsolutePathname>> = {
  '/': {
    en: '/en',
    'pt-br': '/pt-br',
  },
  '/projects': {
    en: '/en/projects',
    'pt-br': '/pt-br/projects',
  },
  '/#contact': {
    en: '/en#contact',
    'pt-br': '/pt-br#contact',
  },
  '/api/get-cv': {
    en: '/en/api/get-cv',
    'pt-br': '/pt-br/api/get-cv',
  },
  '/api/resume': {
    en: '/en/api/resume',
    'pt-br': '/pt-br/api/resume',
  },
}

export function localizePathname(pathname: AbsolutePathname, locale: Locale) {
  if (pathnames[pathname]) {
    return pathnames[pathname][locale]
  }
  return pathname
}

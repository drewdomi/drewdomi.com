import type { AvailableLanguageTag } from './paraglide/runtime.js'

type AbsolutePathname = `/${string}`

const pathnames: Record<
  AbsolutePathname,
  Record<AvailableLanguageTag, AbsolutePathname>
> = {
  '/': {
    en: '/',
    'pt-br': '/pt-br',
  },
  '/projects': {
    en: '/projects',
    'pt-br': '/pt-br/projects',
  },
  '/blog': {
    en: '/blog',
    'pt-br': '/pt-br/blog',
  },
  '/contact': {
    en: '/#contact',
    'pt-br': '/pt-br#contact',
  },
}

export function localizePathname(
  pathname: AbsolutePathname,
  locale: AvailableLanguageTag,
) {
  if (pathnames[pathname]) {
    return pathnames[pathname][locale]
  }
  return pathname
}

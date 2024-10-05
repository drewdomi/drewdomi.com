import type { AvailableLanguageTag } from './paraglide/runtime.js'

type AbsolutePathname = `/${string}`

const pathnames: Record<
  AbsolutePathname,
  Record<AvailableLanguageTag, AbsolutePathname>
> = {
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

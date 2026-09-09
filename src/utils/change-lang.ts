/**
 * Swaps the locale prefix in the current URL and navigates to the new URL.
 * Replaces only the first path segment (the locale prefix) to avoid
 * accidentally replacing locale strings that appear in slugs or other segments.
 *
 * Example: /en/projects/my-project → /pt-br/projects/my-project
 */
export function changeLang(currentLang: string, newLang: string): void {
  const url = new URL(window.location.href)

  // Split on '/' → ['', 'en', 'projects', ...rest]
  const segments = url.pathname.split('/')

  // segments[0] is always '' (leading slash), segments[1] is the locale prefix
  if (segments[1] === currentLang) {
    segments[1] = newLang
  }

  url.pathname = segments.join('/')
  window.location.href = url.href
}

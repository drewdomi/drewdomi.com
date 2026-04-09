export function onRequest(context, next) {
  const url = new URL(context.request.url)

  if (url.pathname !== '/' && url.pathname !== '') {
    return next()
  }

  const acceptLang: string =
    context.request.headers.get('accept-language') ?? ''

  const firstLang = acceptLang.split(',')[0].trim().toLowerCase()

  if (firstLang.startsWith('pt')) {
    return context.redirect('/pt-br')
  } else {
    return context.redirect('/en')
  }
}

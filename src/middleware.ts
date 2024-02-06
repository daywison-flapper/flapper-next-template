import createMiddleware from 'next-intl/middleware'
import { pathnames, locales, localePrefix } from './i18n.config'

export default createMiddleware({
    defaultLocale: 'pt-BR',
    locales,
    pathnames,
    localePrefix,
    localeDetection: false,
})

export const config = {
    matcher: ['/', '/(en-US|pt-BR|es-ES)/:path*'],
}

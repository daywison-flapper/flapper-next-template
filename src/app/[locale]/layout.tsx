import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
import { unstable_setRequestLocale } from 'next-intl/server'
import { NextIntlClientProvider, useMessages } from 'next-intl'

export const metadata: Metadata = {
  title: 'Flapper',
  description: 'Flapper 3.0 - Rent or Buy Aircraft - Shared Flights',
}

interface RootLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  unstable_setRequestLocale(params.locale)

  const messages = useMessages()
  return (
    <html lang={params.locale}>
      <body className={`${inter.variable} font-sans`}>
        <NextIntlClientProvider
          messages={messages}
          locale={params.locale}
        >
          {children}
          <div data-portal="checkout"></div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

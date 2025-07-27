import Footer from '@/components/footer'
import Header from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'
import { absoluteUrl, ogUrl } from '@/lib/utils'
import '@/styles/index.css'
import { Metadata } from 'next'
import 'katex/dist/katex.min.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.web30.my.id'),
  title: {
    default: 'Web3IDN',
    template: '%s | W3IDN'
  },
  description:
    'Advancing blockchain education, research, resources and development Web3 Indonesia.',
  openGraph: {
    title: 'Web3IDN',
    description:
      'Advancing blockchain education, research, resources and development Web3 Indonesia.',
    url: absoluteUrl('/'),
    siteName: 'www.web30.my.id',
    images: [
      {
        url: ogUrl('Web3IDN'),
        width: 1200,
        height: 630
      }
    ],
    locale: 'id_ID',
    type: 'website'
  },
  icons: {
    icon: [{ url: '/favicon/favicon-32x32.png' }],
    apple: [{ url: '/favicon/apple-touch-icon.png' }]
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="relative pb-56 md:pb-36 min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="relative max-w-6xl mx-auto px-5 h-full pt-8 md:py-24">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

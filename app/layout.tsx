import AppFooter from '@/components/app-footer'
import AppHeader from '@/components/app-header'
import '@/styles/app.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tech Breeze',
  icons: {
    icon: '/brand.svg',
  },
  description: 'We craft tech that feels human. Tools for smoother work, smarter systems, better results.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="text-eerie-black font-sans antialiased select-none">
        <AppHeader />
        <main className="flex flex-col gap-y-5 sm:gap-y-10">{children}</main>
        <AppFooter />

        <script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "b93635209025499d9cf2842c53e529e5"}' />
      </body>
    </html>
  )
}

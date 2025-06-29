import AppFooter from '@/components/app-footer'
import AppHeader from '@/components/app-header'
import type { Metadata } from 'next'
import '../styles/app.css'
import '../styles/fonts.css'

export const metadata: Metadata = {
  title: 'Tech Breeze',
  // description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-neue-june antialiased select-none">
        <AppHeader />
        <main className="flex flex-col gap-10">{children}</main>
        <AppFooter />
      </body>
    </html>
  )
}

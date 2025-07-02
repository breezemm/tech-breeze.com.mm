import AppFooter from '@/components/app-footer'
import AppHeader from '@/components/app-header'
import type { Metadata } from 'next'
import '../styles/app.css'
import '../styles/fonts.css'

export const metadata: Metadata = {
  title: 'Tech Breeze',
  icons: {
    icon: '/breeze.svg',
  },
  // description: '',
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
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import '@mantine/core/styles.css'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import { Header } from '@/components/header'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '500', '700'],
})

export const metadata: Metadata = {
  title: 'REST Countries',
  description: 'A simple REST Countries App',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider
          theme={{
            fontFamily: poppins.style.fontFamily,
            headings: { fontFamily: poppins.style.fontFamily },
          }}
        >
          <Header />
          {children}
        </MantineProvider>
      </body>
    </html>
  )
}

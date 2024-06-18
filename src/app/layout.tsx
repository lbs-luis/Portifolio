import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: '@luis',
  description: 'Frontend developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`relative  ${roboto.className}`}>{children}</body>
    </html>
  )
}

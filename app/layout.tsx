import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bautista Casañas',
  description: 'Personal website of Bautista Casañas',
  generator: 'Bautista Casañas',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

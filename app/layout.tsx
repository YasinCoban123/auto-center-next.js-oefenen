import { Footer, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


export const metadata: Metadata = {
  title: 'Auto verhuur',
  description: 'Ontdek de beste wagens in de wereld!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className= "relative">
        <Navbar />
        {children}
      <Footer />
      </body>
    </html>
  )
}

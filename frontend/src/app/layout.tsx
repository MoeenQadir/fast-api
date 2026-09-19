import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://metropulse.vercel.app'),
  title: 'MetroPulse — City & People Data Platform',
  description:
    'MetroPulse is a modern city and people data management platform built with Next.js, TypeScript and Tailwind CSS. Track cities, populations and residents from a single urban data dashboard.',
  keywords: [
    'MetroPulse',
    'city data',
    'people data',
    'urban dashboard',
    'civic data platform',
    'Next.js',
    'FastAPI',
    'TypeScript',
  ],
  authors: [{ name: 'Muhammad Moeen Ul Qadir' }],
  openGraph: {
    title: 'MetroPulse — City & People Data Platform',
    description:
      'A modern urban data dashboard for managing cities and people, built with Next.js, TypeScript and Tailwind CSS.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MetroPulse — City & People Data Platform',
    description:
      'A modern urban data dashboard for managing cities and people.',
  },
}

export const viewport: Viewport = {
  themeColor: '#0d0a20',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} ${inter.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
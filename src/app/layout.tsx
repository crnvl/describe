import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'describe. - alt text generator',
  description: 'describe. makes it easy to include alt text in your social media posts, blogs or articles.',
  keywords: 'describe, alt text, accessibility, seo, social media, twitter, facebook, instagram, linkedin, blog, article, image, generator', 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

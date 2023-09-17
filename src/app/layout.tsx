import './globals.css'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'], weight: ["400", "500","700"] })

export const metadata: Metadata = {
  title: 'commment',
  description: 'interactive commment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={rubik.className}>{children}</body>
    </html>
  )
}

import { Inter } from 'next/font/google'
import './ui/globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Next.js Admin Dashboard',
  description: 'Next.js Admin Dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}
      </body>
    </html>
  )
}

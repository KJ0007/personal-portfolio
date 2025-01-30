import type { Metadata } from 'next'
import { ThemeProvider } from './context/ThemeContext'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kisan Jadhav - Portfolio',
  description: 'Software Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
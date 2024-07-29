import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lacruz-ora.com/'),
  title: 'Estamos para orar con vos | Hace tu pedido de oracion',
  description: 'Página de La Cruz Buenos Aires dedicada a recibir testimonios y pedidos de oración',
  icons: [{ rel: 'Shortcut icon', type: 'image/x-icon', url: '/icon-cruz.webp' }],
  openGraph: { images: '/igle-background-mobile.jpg' }
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      <Toaster/>

        </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Estamos para orar por vos | Hace tu pedido de oracion',
  description: 'Pagina de La Cruz Buenos Aires dedicada a recibir los pedidos de oracion o agradecimient de la gente'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

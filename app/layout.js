import { Inter } from 'next/font/google'
import './global.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Perseguição e Censura aos Quadrinhos (SNCT)',
  description: 'Site feito para a semana nacional de ciência e tecnologia do IF Goiano - Campus Trindade.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

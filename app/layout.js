import './globals.css'
import { Inter } from 'next/font/google'
import Header from './layout/Header/Header'
import Footer from './layout/Footer/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dev.to Cloning',
  description: 'Dev.to cloning by Nikhil Chandra Roy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

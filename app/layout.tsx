import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from './components/Navigation'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col ">
          <Header />
          <div className="flex flex-row">
            <div className='xs:hidden md:w-1/6 '>
              <Nav />
            </div>
            <div className='md:w-5/6 py-9 px-4'>
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
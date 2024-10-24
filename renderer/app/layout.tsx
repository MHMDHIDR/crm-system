import './globals.css'
import { Providers } from '@/providers'
import Footer from '@/components/custom/footer'
import Nav from '@/components/custom/nav'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta
          content='width=device-width, initial-scale=1, maximum-scale=1'
          name='viewport'
        />
      </head>
      <body
        className='font-sans antialiased overflow-x-clip dark:border-gray-950'
        suppressHydrationWarning
      >
        <Providers>
          <Nav />
          {children}
          <Footer withThemeToggler />
        </Providers>
      </body>
    </html>
  )
}

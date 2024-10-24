import React from 'react'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <meta
          content='width=device-width, initial-scale=1 maximum-scale=1'
          name='viewport'
        />
      </head>
      <body className='min-h-screen font-sans antialiased overflow-x-clip dark:border-gray-950'>
        {children}
      </body>
    </html>
  )
}

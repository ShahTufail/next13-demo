import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav style={{margin:'2rem', 
          display: 'grid',
          alignContent: 'center'}}>
          <h1>My Next 13 App</h1>
        </nav>
        {children}
      </body>
    </html>
  )
}

export const metadata = {
  title: 'LORENET',
  description: 'AI archaeology for the internet'
}

import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
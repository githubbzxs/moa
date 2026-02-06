import './globals.css'

export const metadata = {
  title: 'Moa Web',
  description: 'Moa Web Application'
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}

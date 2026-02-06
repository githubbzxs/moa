import "./globals.css"

export const metadata = {
  title: "ChatGPT Clone",
  description: "ChatGPT 风格聊天界面（Next.js）"
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
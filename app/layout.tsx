import type React from "react"
import type { Metadata } from "next"
import './globals.css'
import localFont from 'next/font/local'
import "./globals.css"
import GoogleTagManager from "./components/GoogleTagManager"
const GTM_ID = "GTM-NC7GGZBX"; // Substitua pelo seu GTM ID

// const teramo = localFont({
//   src: '../public/fonts/Teramo.ttf',
//   variable: '--font-teramo',
// })

export const metadata: Metadata = {
  title: "O Resgate dos Otimistas - Diagnóstico de Dependência Emocional",
  description:
    "Faça seu diagnóstico de dependência emocional gratuito e descubra como aumentar seu nível de permissão.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="pt-BR">
        {/* <head>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
            <link rel="apple-touch-icon" href="/apple-icon.svg" type="image/svg+xml" />
        </head> */}
      <body className={`teramo`}>
        <GoogleTagManager />
        {children}
      </body>
    </html>
  )
}

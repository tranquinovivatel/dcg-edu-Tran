import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Faculty_Glyphic } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _facultyGlyphic = Faculty_Glyphic({ subsets: ["latin"], weight: ["400"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://dcgedu.com"),
  title: {
    default: "DCG EDU - Liderança em Educação e Tecnologia em Angola",
    template: "%s | DCG EDU",
  },
  description:
    "DCG EDU é uma holding estratégica líder em Angola, focada na gestão, representação e expansão de marcas inovadoras nos setores de educação e tecnologia.",
  keywords: [
    "DCG EDU",
    "Educação Angola",
    "Tecnologia Angola",
    "Holding Angola",
    "Gestão Estratégica",
    "Vivatel",
    "7Smiles",
    "Inovação Educacional",
    "Transformação Digital",
    "Angola Business",
  ],
  authors: [{ name: "DCG EDU" }],
  creator: "DCG EDU",
  publisher: "DCG EDU",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_AO",
    url: "https://dcgedu.com",
    title: "DCG EDU - Liderança em Educação e Tecnologia em Angola",
    description:
      "Holding estratégica responsável pela gestão e expansão de marcas líderes em educação e tecnologia no mercado angolano.",
    siteName: "DCG EDU",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DCG EDU - Liderança em Educação e Tecnologia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DCG EDU - Liderança em Educação e Tecnologia em Angola",
    description:
      "Holding estratégica responsável pela gestão e expansão de marcas líderes em educação e tecnologia no mercado angolano.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={`font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DCG EDU",
              "url": "https://dcgedu.com",
              "logo": "https://dcgedu.com/logo-lettering.png",
              "description":
                "Holding estratégica líder em Angola, focada na gestão e expansão de marcas nos setores de educação e tecnologia.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "AO",
              },
              "sameAs": [
                // Adicionar links de redes sociais se existirem
              ],
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

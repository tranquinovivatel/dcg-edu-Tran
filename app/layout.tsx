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
    default: "DCG EDU - Liderança em Educação e Tecnologia",
    template: "%s | DCG EDU",
  },
  description:
    "Holding estratégica em Angola, especializada na gestão operacional e expansão de marcas líderes em educação e tecnologia. Impulsionando a inovação e o crescimento sustentável.",
  keywords: ["Educação", "Tecnologia", "Angola", "Gestão Estratégica", "DCG EDU", "Inovação", "Liderança", "Holding", "Transformação Digital"],
  authors: [{ name: "DCG EDU" }],
  creator: "DCG EDU",
  publisher: "DCG EDU",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DCG EDU - Liderança em Educação e Tecnologia",
    description: "Holding estratégica em Angola focada na gestão e expansão de marcas líderes nos sectores de educação e tecnologia.",
    url: "https://dcgedu.com",
    siteName: "DCG EDU",
    locale: "pt_PT",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DCG EDU - Strategic Leadership",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DCG EDU - Liderança em Educação e Tecnologia",
    description: "Holding estratégica em Angola focada na gestão e expansão de marcas líderes nos sectores de educação e tecnologia.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/icon-light-32x32.png",
        sizes: "32x32",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        sizes: "32x32",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
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
  themeColor: "#1a4d3a",
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
              "image": "https://dcgedu.com/og-image.png",
              "description": "Holding estratégica em Angola, especializada na gestão operacional e expansão de marcas líderes em educação e tecnologia.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Luanda",
                "addressCountry": "AO"
              }
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

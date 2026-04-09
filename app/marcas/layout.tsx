import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nossas Marcas",
  description: "Conheça as marcas líderes em educação e tecnologia que fazem parte do ecossistema DCG EDU em Angola.",
  openGraph: {
    title: "Nossas Marcas | DCG EDU",
    description: "Inovação, educação e tecnologia unidas para transformar Angola através das nossas marcas especializadas.",
    images: ["/og-image.png"],
  },
}

export default function MarcasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

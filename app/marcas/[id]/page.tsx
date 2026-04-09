import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { BrandDetail } from "@/components/brand-detail"
import { MainLayout } from "@/components/main-layout"
import { PROJECTS, getProjectById } from "@/lib/project-data"

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    return {
      title: "Página não encontrada",
    }
  }

  return {
    title: project.title,
    description: project.overview.content.substring(0, 160),
    openGraph: {
      title: `${project.title} | DCG EDU`,
      description: project.overview.content.substring(0, 160),
      images: [
        {
          url: project.heroImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | DCG EDU`,
      description: project.overview.content.substring(0, 160),
      images: [project.heroImage],
    },
  }
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }))
}

export default async function BrandPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    notFound()
  }

  return (
    <MainLayout>
      <BrandDetail project={project} />
    </MainLayout>
  )
}

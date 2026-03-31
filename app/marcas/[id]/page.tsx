import { notFound } from "next/navigation"
import { BrandDetail } from "@/components/brand-detail"
import { MainLayout } from "@/components/main-layout"
import { PROJECTS, getProjectById } from "@/lib/project-data"

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

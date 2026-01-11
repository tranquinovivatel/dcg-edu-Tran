"use client"

import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { MainLayout } from "@/components/main-layout"
import { PROJECTS } from "@/lib/project-data"

export default function BrandsPage() {
  const brands = PROJECTS.filter((p) => ["7smiles", "vivatel", "vivatel-labs", "vivatel-academy"].includes(p.id))

  return (
    <MainLayout>
                  <Link
          href="/"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 bg-[#1a4d3a] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#153d2e] transition-colors"
          aria-label="Voltar ao início"
        >
          <ArrowLeft className="w-5 h-5 hover:rotate-90 transition" />
        </Link>

      <div id="content" className="flex-1 overflow-y-auto p-6 md:p-8 bg-[#fafafa]">
        <div className="max-w-[1200px] mx-auto space-y-6">
          <motion.div
            className="mb-12 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">Nossas Marcas</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-[800px] leading-relaxed">
              Descubra as empresas que fazem parte do ecossistema DCG EDU. 
              Inovação, educação e tecnologia unidas para transformar Angola.
            </p>
          </motion.div>

          {brands.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={`/marcas/${project.id}#content`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow relative"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.heroImage || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a4d3a] via-[#1a4d3a]/40 to-transparent transition-opacity duration-500" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex items-end justify-between transition-opacity duration-500">
                    <div className="flex items-center gap-2 text-white">
                      <span className="text-xl md:text-2xl font-medium">{project.title}</span>
                      <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:-rotate-45" />
                    </div>
                    <div className="flex flex-wrap justify-end gap-2 text-white/80 text-sm group-hover:opacity-100 sm:opacity-0">
                      {project.services.slice(0, 3).map((service) => (
                        <span key={service} className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
          
           <motion.div
            className="w-full pt-12 pb-12 flex justify-center items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
          >
            <div className="text-[80px] md:text-[120px] font-bold text-black tracking-tighter select-none">DCG EDU</div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  )
}

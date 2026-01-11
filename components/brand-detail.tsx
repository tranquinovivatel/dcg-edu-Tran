"use client"
import { ArrowLeft } from "lucide-react"
import type React from "react"

import { motion } from "framer-motion"
import {
  ArrowRight,
  Home,
  Building2,
  Users,
  TrendingUp,
  Award,
  ExternalLink,
  Sparkles,
  Zap,
  Target,
} from "lucide-react"
import Link from "next/link"
import { getNextProject } from "@/lib/project-data"
import { ContactSection } from "./contact-section"

interface ProjectData {
  id: string
  title: string
  year: string
  brandColor: string
  services: string[]
  linkText: string
  linkUrl: string
  overview: { title: string; content: string }
  direction: { title: string; content: string }
  outcome: { title: string; content: string }
  heroImage: string
  galleryImages: string[]
  stats?: { label: string; value: string }[]
  highlights?: string[]
  nextProject: string
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" },
}

export function BrandDetail({ project }: { project: ProjectData }) {
  const nextProject = getNextProject(project.id)

  const handleNextProject = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <div id="content" className="bg-white min-h-screen">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-6 sm:mb-8 text-sm text-[#595959] hover:text-black transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao Início
        </Link>

        <Link
          href="/"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 bg-[#1a4d3a] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#153d2e] transition-colors"
          aria-label="Voltar ao início"
        >
          <Home className="w-5 h-5" />
        </Link>

        <motion.header className="mb-8 sm:mb-12" {...fadeInUp}>
          <h1 className="text-3xl sm:text-[42px] font-bold text-black mb-4">{project.title}</h1>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 sm:gap-x-12 sm:gap-y-4 text-sm mb-6">
            <div>
              <span className="text-[#999999] block mb-1">Fundação</span>
              <span className="text-black font-medium">{project.year}</span>
            </div>

            <div>
              <span className="text-[#999999] block mb-1">Áreas de Actuação</span>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="px-3 py-1 text-black text-xs rounded-full font-medium"
                    style={{
                      backgroundColor: `${project.brandColor}15`,
                      borderColor: `${project.brandColor}30`,
                      borderWidth: "1px",
                    }}
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <div className="sm:ml-auto">
              <span className="text-[#999999] block mb-1">Website</span>
              <a
                href={project.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline font-medium inline-flex items-center gap-1"
                style={{ color: project.brandColor }}
              >
                Visitar Site
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.header>

        <motion.div className="mb-12 sm:mb-16 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg" {...fadeInUp}>
          <img
            src={project.heroImage || "/placeholder.svg"}
            alt={`${project.title} hero`}
            className="w-full aspect-video object-cover"
          />
        </motion.div>

        {project.stats && (
          <motion.section className="mb-12 sm:mb-16" {...fadeInUp}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {project.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#f5f5f5] to-[#e8e8e8] p-4 sm:p-6 rounded-xl border"
                  style={{ borderColor: `${project.brandColor}20` }}
                >
                  <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: project.brandColor }}>
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-[#595959] font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        <motion.section className="mb-10 sm:mb-12" {...fadeInUp}>
          <div className="bg-white border border-neutral-200 rounded-xl sm:rounded-2xl p-6 sm:p-8">
            <div className="flex items-start gap-3 sm:gap-4 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: project.brandColor }}
              >
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-black mb-3">{project.overview.title}</h2>
                <p className="text-sm sm:text-base text-[#333] leading-relaxed">{project.overview.content}</p>
              </div>
            </div>
          </div>
        </motion.section>

        {project.highlights && (
          <motion.section className="mb-10 sm:mb-12" {...fadeInUp}>
            <h3 className="text-lg sm:text-xl font-semibold text-black mb-4 sm:mb-6">Destaques e Diferenciais</h3>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {project.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-[#f9f9f9] p-4 rounded-xl border border-neutral-100"
                >
                  <Award className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: project.brandColor }} />
                  <span className="text-sm text-[#333] font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        <motion.section className="mb-10 sm:mb-12" {...fadeInUp}>
          <h3 className="text-lg sm:text-xl font-semibold text-black mb-4 sm:mb-6">Galeria</h3>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {project.galleryImages.slice(0, 4).map((src, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-md">
                <img
                  src={src || "/placeholder.svg"}
                  alt={`${project.title} gallery ${index + 1}`}
                  className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section className="mb-10 sm:mb-12" {...fadeInUp}>
          <div
            className="bg-white border-2 rounded-xl sm:rounded-2xl p-6 sm:p-8"
            style={{ borderColor: `${project.brandColor}20` }}
          >
            <div className="flex items-start gap-3 sm:gap-4 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: project.brandColor }}
              >
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-black mb-3">{project.direction.title}</h2>
                <p className="text-sm sm:text-base text-[#333] leading-relaxed">{project.direction.content}</p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section className="mb-12 sm:mb-16" {...fadeInUp}>
          <div
            className="bg-white border-2 rounded-xl sm:rounded-2xl p-6 sm:p-8"
            style={{ borderColor: `${project.brandColor}20` }}
          >
            <div className="flex items-start gap-3 sm:gap-4 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: project.brandColor }}
              >
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-black mb-3">{project.outcome.title}</h2>
                <p className="text-sm sm:text-base text-[#333] leading-relaxed">{project.outcome.content}</p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section className="mb-8 sm:mb-1 relative overflow-hidden" {...fadeInUp}>
          <div className="relative">
            {/* Services Title - Always visible */}
            <h3 className="text-xl sm:text-2xl font-semibold text-black mb-6 flex items-center gap-3 pointer-events-none">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: project.brandColor }}
              >
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              Serviços Exclusivos
            </h3>

            {/* Scrollable content container with max height */}
            <div className="relative max-h-[400px] overflow-hidden">
              {/* Content that gets hidden */}
              <div className="space-y-6 pb-40">
                {/* Horizontal scrolling cards */}
                <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                  <div className="flex gap-4 min-w-max">
                    {[
                      { icon: Zap, title: "Soluções Premium", desc: "Serviços personalizados para sua empresa" },
                      { icon: Target, title: "Consultoria Estratégica", desc: "Expertise para seus desafios" },
                      { icon: Award, title: "Suporte Dedicado", desc: "Acompanhamento 24/7 especializado" },
                      { icon: Sparkles, title: "Inovação Contínua", desc: "Tecnologias de ponta" },
                      { icon: TrendingUp, title: "ROI Garantido", desc: "Resultados mensuráveis" },
                    ].map((service, idx) => (
                      <div
                        key={idx}
                        className="flex-shrink-0 w-64 sm:w-72 p-6 rounded-xl border-2 shadow-lg bg-white hover:shadow-xl transition-all"
                        style={{
                          borderColor: `${project.brandColor}30`,
                          background: `linear-gradient(135deg, white 0%, ${project.brandColor}05 100%)`,
                        }}
                      >
                        <div
                          className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                          style={{ backgroundColor: project.brandColor }}
                        >
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-semibold text-black mb-2">{service.title}</h4>
                        <p className="text-sm text-[#595959] leading-relaxed">{service.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="absolute top-0 mt-20 left-0 right-0 h-full flex flex-col z-10"
                style={{
                  background: `linear-gradient(to top, 
                    white 0%, 
                    rgba(255,255,255,0.98) 15%,
                    rgba(255,255,255,0.95) 30%,
                    rgba(255,255,255,0.85) 50%,
                    rgba(255,255,255,0.6) 90%,
                    transparent 100%)`,
                  backdropFilter: "blur(0.5px)",
                }}
              >
                <div className="relative pt-16 pb-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 z-20">
                  <a
                    href={project.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-white rounded-full text-sm sm:text-base font-medium transition-all shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto justify-center text-center"
                    style={{ backgroundColor: project.brandColor }}
                  >
                    {project.linkText}
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>

                  <Link
                    href={`/marcas/${nextProject.id}#content`}
                    onClick={handleNextProject}
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#1a4d3a] text-white rounded-full text-sm sm:text-base font-medium hover:bg-[#153d2e] transition-all shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto justify-center text-center"
                  >
                    Conhecer Próximo: {nextProject.title}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </div>

                {/* Teaser text above buttons */}
                <div className="text-center px-4">
                  <p className="text-sm text-[#333] font-medium mb-1">Descubra todo o potencial da {project.title}</p>
                  <p className="text-xs text-[#999] italic">
                    Soluções completas • Suporte dedicado • Resultados garantidos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <ContactSection />

        <motion.div
          className="w-full pt-16 sm:pt-24 pb-8 sm:pb-12 flex justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-[60px] sm:text-[80px] md:text-[120px] font-bold text-black tracking-tighter select-none text-center">
            DCG EDU
          </div>
        </motion.div>
      </div>
    </div>
  )
}

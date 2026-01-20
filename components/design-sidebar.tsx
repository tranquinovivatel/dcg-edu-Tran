"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRightCircle } from "lucide-react"
import { AboutModal } from "./about-modal"

const PORTFOLIO_BRANDS = [
  { name: "7Smiles", icon: "7S" },
  { name: "Vivatel", icon: "VTL" },
  { name: "Production", icon: "STD" },
  { name: "Vivatel Labs", icon: "LABS" },
  { name: "Vivatel Academy", icon: "ACAD" },
]

const TESTIMONIALS = [
  {
    quote:
      "A DCG Edu transformou a nossa visão em realidade. Gestão estratégica impecável que impulsionou o crescimento da nossa marca em todo o país.",
    author: "Maria Silva",
    role: "Directora Executiva",
  },
  {
    quote:
      "Parceria excecional que trouxe inovação e excelência operacional. A DCG Edu compreende profundamente o mercado angolano de educação e tecnologia.",
    author: "João Santos",
    role: "Fundador",
  },
  {
    quote:
      "Profissionalismo e visão estratégica de classe mundial. A DCG Edu é o parceiro ideal para quem busca crescimento sustentável e impacto real.",
    author: "Ana Costa",
    role: "Directora de Inovação",
  },
]

const TickerItem = ({ item }: { item: (typeof PORTFOLIO_BRANDS)[0] }) => (
  <div className="flex items-center justify-center h-8 px-6 whitespace-nowrap text-sm font-bold tracking-tight text-neutral-400">
    {item.icon} <span className="ml-2 font-normal opacity-60 uppercase text-[10px] tracking-widest">{item.name}</span>
  </div>
)

export const DesignSidebar = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <nav className="flex flex-col justify-between w-full h-full bg-[#f5f5f5] p-9 pr-12 overflow-hidden font-sans select-none">
      {/* Top Content */}
      <div className="flex flex-col gap-6 w-full">
        <div className="w-auto h-10 flex items-center justify-start cursor-pointer hover:scale-105 transition-transform">
          <a href="/#topo">
            <div id="#topo" className="text-3xl font-bold tracking-tight text-[#0f0f12]">DCG EDU</div>
          </a>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-[38px] leading-[44px] text-[#0f0f12] text-balance font-semibold tracking-[-0.04em]">
              Liderança estratégica em educação e tecnologia para Angola.
            </h1>
            <p className="text-[16px] leading-[22.4px] text-[#0f0f12] opacity-80 font-normal tracking-[-0.4px] text-balance">
              A DCG Edu representa e gere marcas de excelência, impulsionando crescimento sustentável e transformação
              digital em todo o país.
            </p>
          </div>

          <div className="flex flex-col xl:flex-row items-start gap-3">
            <Link
              href="/marcas#content"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1a4d3a] text-white shadow-[inset_0_4px_16px_1px_rgba(255,255,255,0.15),0_2px_12px_0_rgba(0,0,0,0.25)] hover:bg-[#153d2e] transition-all cursor-pointer group"
              style={{
                borderRadius: "42px",
              }}
            >
              <span className="text-lg tracking-[-0.6px] font-medium font-display whitespace-nowrap">
                Explorar Marcas
              </span>
              <ArrowRightCircle size={20} className="transition-transform duration-300 group-hover:-rotate-45" />
            </Link>
            <AboutModal />
          </div>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="flex flex-col gap-10 w-full mt-auto pt-10">
        <div className="flex flex-col gap-2">
          <h3 className="text-[24px] leading-[28.8px] font-normal text-[#0f0f12] tracking-[-0.01em]">
            As Nossas Marcas de Referência.
          </h3>

          <div className="relative h-8 w-full overflow-hidden mt-2">
            <motion.div
              className="flex absolute left-0 top-0 h-full"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              {[...PORTFOLIO_BRANDS, ...PORTFOLIO_BRANDS].map((company, idx) => (
                <TickerItem key={`${company.name}-${idx}`} item={company} />
              ))}
            </motion.div>
            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#f5f5f5] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#f5f5f5] to-transparent z-10" />
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="h-28 w-full max-w-[288px] relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonialIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col gap-2"
            >
              <p className="text-[13px] leading-[16.8px] text-black font-normal tracking-[-0.2px] text-balance italic">
                {TESTIMONIALS[testimonialIndex].quote}
              </p>
              <p className="text-[13px] leading-[16.8px] text-[#595959] font-normal tracking-[-0.2px]">
                {TESTIMONIALS[testimonialIndex].author} — {TESTIMONIALS[testimonialIndex].role}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-1 mt-4">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestimonialIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i === testimonialIndex ? "bg-black w-3" : "bg-neutral-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

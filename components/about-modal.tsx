"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Drawer, DrawerContent } from "@/components/ui/drawer"
import { useMediaQuery } from "@/hooks/use-mobile"
import { X } from "lucide-react"

// Internal component to prevent re-renders losing scroll state
const AboutContent = ({ onClose, isDesktop }: { onClose: () => void; isDesktop: boolean }) => (
  <div className="flex flex-col gap-6 p-6 sm:p-8 md:p-10 max-h-[85vh] overflow-y-auto">
    {/* Close button for mobile */}
    {!isDesktop && (
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-100 transition-colors"
        aria-label="Fechar"
      >
        <X className="w-5 h-5 text-[#595959]" />
      </button>
    )}

    <div className="w-12 h-12 flex items-center justify-center bg-[#1a4d3a] rounded-xl flex-shrink-0">
      <span className="text-white text-xl font-bold">DCG</span>
    </div>

    <h2 className="text-2xl sm:text-[28px] md:text-[32px] leading-tight sm:leading-[36px] md:leading-[40px] font-medium text-[#0f0f12] tracking-[-0.02em] text-balance">
      Representação estratégica de marcas que transformam Angola.
    </h2>

    <div className="flex flex-col gap-4 text-sm sm:text-[15px] md:text-[16px] leading-relaxed sm:leading-[24px] text-[#0f0f12] tracking-[-0.01em]">
      <p>
        A <strong>DCG Edu</strong> é uma holding estratégica especializada na representação e gestão de empresas nos
        sectores de educação e tecnologia em Angola. Actuamos como parceiros de crescimento, oferecendo gestão
        operacional, estratégia de mercado e expansão sustentável.
      </p>
      <p>
        Através do nosso portfólio diversificado - que inclui a <strong>7Smiles</strong>, líder em ensino de línguas,
        e o ecossistema
        <strong> Vivatel</strong> de soluções tecnológicas - impulsionamos a transformação digital e educacional do
        país.
      </p>
      <p>
        Com foco em excelência operacional e visão de longo prazo, criamos valor para as nossas marcas e para a
        sociedade angolana, formando talentos, conectando pessoas e desenvolvendo soluções inovadoras que preparam
        Angola para o futuro.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-neutral-200">
      <div>
        <h3 className="text-sm font-semibold text-[#0f0f12] mb-2">Nossa Missão</h3>
        <p className="text-sm text-[#595959] leading-relaxed">
          Acelerar o crescimento das marcas que representamos através de gestão estratégica e operacional de
          excelência, criando impacto positivo na sociedade angolana.
        </p>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-[#0f0f12] mb-2">Nossa Visão</h3>
        <p className="text-sm text-[#595959] leading-relaxed">
          Ser a holding de referência em educação e tecnologia em Angola, reconhecida pela qualidade, inovação e
          impacto transformador das nossas marcas.
        </p>
      </div>
    </div>

    <div className="pt-4 border-t border-neutral-200">
      <h3 className="text-sm font-semibold text-[#0f0f12] mb-3">Nossos Valores</h3>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-[#f5f5f5] px-3 py-2 rounded-lg">
          <p className="text-xs font-medium text-[#1a4d3a]">Excelência</p>
        </div>
        <div className="bg-[#f5f5f5] px-3 py-2 rounded-lg">
          <p className="text-xs font-medium text-[#1a4d3a]">Inovação</p>
        </div>
        <div className="bg-[#f5f5f5] px-3 py-2 rounded-lg">
          <p className="text-xs font-medium text-[#1a4d3a]">Integridade</p>
        </div>
        <div className="bg-[#f5f5f5] px-3 py-2 rounded-lg">
          <p className="text-xs font-medium text-[#1a4d3a]">Impacto Social</p>
        </div>
      </div>
    </div>
  </div>
)

export const AboutModal = () => {
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="w-full sm:w-auto px-6 py-3.5 bg-[#595959] text-white hover:bg-[#4a4a4a] transition-all cursor-pointer"
          style={{
            borderRadius: "42px",
          }}
        >
          <span className="text-lg tracking-[-0.6px] font-medium font-display">Sobre Nós</span>
        </button>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-[90vw] sm:max-w-[620px] p-0 bg-white rounded-[20px] sm:rounded-[24px] border-0 max-h-[90vh] overflow-hidden">
            <AboutContent onClose={() => setOpen(false)} isDesktop={isDesktop} />
          </DialogContent>
        </Dialog>
      </>
    )
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full sm:w-auto px-6 py-3.5 bg-[#595959] text-white hover:bg-[#4a4a4a] transition-all cursor-pointer"
        style={{
          borderRadius: "42px",
        }}
      >
        <span className="text-lg tracking-[-0.6px] font-medium font-display">Sobre Nós</span>
      </button>

      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent className="bg-white rounded-t-[20px] sm:rounded-t-[24px] border-0 max-h-[90vh]">
          <AboutContent onClose={() => setOpen(false)} isDesktop={isDesktop} />
        </DrawerContent>
      </Drawer>
    </>
  )
}

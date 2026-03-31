"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { MainLayout } from "@/components/main-layout"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <MainLayout>
      <div className="flex-1 flex items-center justify-center p-6 bg-[#fafafa] min-h-[calc(100vh-6rem)]">
        <motion.div 
          className="text-center space-y-6 max-w-md"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[120px] font-bold text-[#1a4d3a] leading-none tracking-tighter">404</h1>
          <h2 className="text-2xl font-bold text-black">Página Não Encontrada</h2>
          <p className="text-neutral-500">
            A página que procura não existe ou foi movida.
          </p>
          
          <div className="pt-6">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a4d3a] text-white rounded-full hover:bg-[#153d2e] transition-all hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Início
            </Link>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  )
}

"use client"

import { useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { MainLayout } from "@/components/main-layout"
import { RotateCcw, Home } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <MainLayout>
      <div className="flex-1 flex items-center justify-center p-6 bg-[#fafafa] min-h-[calc(100vh-6rem)]">
        <motion.div 
          className="text-center space-y-6 max-w-md"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
             <span className="text-4xl font-bold text-red-600">!</span>
          </div>
          
          <h2 className="text-2xl font-bold text-black">Algo correu mal!</h2>
          <p className="text-neutral-500">
            Pedimos desculpa, mas ocorreu um erro inesperado ao processar o seu pedido.
          </p>
          
          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => reset()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1a4d3a] text-white rounded-full hover:bg-[#153d2e] transition-all hover:scale-105"
            >
              <RotateCcw className="w-4 h-4" />
              Tentar Novamente
            </button>
            
            <Link 
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-neutral-200 text-black rounded-full hover:bg-neutral-50 transition-all hover:scale-105"
            >
              <Home className="w-4 h-4" />
              Voltar ao Início
            </Link>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  )
}

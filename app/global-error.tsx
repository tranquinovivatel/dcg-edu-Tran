"use client"

import "./globals.css"
import { useEffect } from "react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html lang="pt">
      <body className="font-sans antialiased bg-[#fafafa] text-black">
        <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl font-bold text-red-600">!</span>
            </div>
            <h1 className="text-3xl font-bold mb-4">Erro Crítico</h1>
            <p className="text-neutral-500 mb-8 max-w-md">
                Ocorreu um erro irrecuperável na aplicação. Por favor, recarregue a página.
            </p>
            <button
            onClick={() => reset()}
            className="px-6 py-3 bg-[#1a4d3a] text-white rounded-full hover:bg-[#153d2e] transition-all hover:scale-105"
            >
            Recarregar Aplicação
            </button>
        </div>
      </body>
    </html>
  )
}

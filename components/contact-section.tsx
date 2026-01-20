"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react"

export function ContactSection() {
  return (
    <motion.div
      className="bg-white rounded-2xl p-8 md:p-12 shadow-sm space-y-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Entre em Contacto</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Estamos prontos para ajudar a transformar os seus desafios em oportunidades. Entre em contacto connosco e
          descubra como podemos apoiar o seu crescimento.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium text-foreground">Email</p>
              <a href="mailto:info@dcgedu.com" className="text-muted-foreground hover:text-primary transition-colors">
                info@dcgedu.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium text-foreground">Telefone</p>
              <a href="tel:+244923456789" className="text-muted-foreground hover:text-primary transition-colors">
                +244 923 456 789
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium text-foreground">Localização</p>
              <p className="text-muted-foreground">Luanda, Angola</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Globe className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium text-foreground">Website</p>
              <a
                href="https://dcgedu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                www.dcgedu.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Linkedin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium text-foreground">LinkedIn</p>
              <a
                href="https://linkedin.com/company/dcgedu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                linkedin.com/company/dcgedu
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-border">
        <p className="text-sm text-muted-foreground text-center">
          DCG EDU © {new Date().getFullYear()} - Representação estratégica em educação e tecnologia
        </p>
        <p className="text-sm text-muted-foreground text-center opacity-40">
          Desenvolvido por <a
                href="https://evandroferreira.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
Evandro Ferreira
              </a>
        </p>
      </div>
    </motion.div>
  )
}

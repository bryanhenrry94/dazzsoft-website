"use client";

import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Mercy Zambrano",
      role: "Jefe de Aplicaciones, Generali Ecuador",
      content:
        "Estamos encantados con el apoyo brindado al área de aplicaciones. La comunicación constante y el enfoque ágil del equipo marcaron la diferencia en el éxito de nuestros proyectos.",
      rating: 5,
    },
    {
      name: "Johnny Anchundia",
      role: "CEO, Fundisel",
      content:
        "El equipo demostró un nivel excepcional de profesionalismo y expertise técnico. Entregaron nuestro sistema a tiempo y superaron todas nuestras expectativas.",
      rating: 5,
    },
    {
      name: "Sebastián Holzapfel",
      role: "Gerente de Sistemas, EDEHSA S.A.",
      content:
        "Encontramos un aliado estratégico perfecto para nuestro ERP. Su metodología ágil, soporte constante y desarrollos a medida nos han permitido optimizar procesos y avanzar con total confianza.",
      rating: 5,
    },
    {
      name: "Luis Tufiño",
      role: "Ingeniero de Datos y Automatización, Generali Ecuador",
      content:
        "La colaboración ha sido fundamental para optimizar nuestros procesos internos. Su enfoque especializado en RPA ha mejorado significativamente nuestra eficiencia operativa.",
      rating: 5,
    },
    {
      name: "Peter Celleri",
      role: "Jefe de TI, Ecuare",
      content:
        "Han sido un socio clave en nuestra transformación digital. Su experiencia en DevOps, migración de servidores y despliegues con Docker nos permitió modernizar completamente nuestra infraestructura tecnológica.",
      rating: 5,
    },
    {
      name: "Wernery Sambo",
      role: "CEO, Centraal Inning Onderneming",
      content:
        "El equipo de Dazzsoft ha sido fundamental para el éxito de nuestra plataforma de cobranzas. Su enfoque ágil, comunicación efectiva y soporte continuo nos han permitido ofrecer un servicio excepcional a nuestros clientes.",
      rating: 5,
    },
  ];

  return (
    <section
      className="py-16 px-4 lg:px-8"
      style={{ backgroundColor: "#0d1117" }}
    >
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
        >
          Lo que dicen nuestros clientes
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-gray-600 transition-all duration-300 h-full"
            >
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-medium text-sm">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()}
                  </span>
                </div>
                <div className="min-w-0">
                  <h4 className="font-medium text-white text-sm truncate">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-400 truncate">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

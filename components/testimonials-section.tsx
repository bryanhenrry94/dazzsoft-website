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
        "DAZZSOFT transformó completamente nuestra plataforma. Su enfoque ágil y comunicación constante hicieron que el proyecto fuera un éxito total.",
      rating: 5,
    },
    {
      name: "Johnny Anchundia",
      role: "Gerente General, Fundisel",
      content:
        "El equipo demostró un nivel excepcional de profesionalismo y expertise técnico. Entregaron nuestro sistema a tiempo y superaron expectativas.",
      rating: 5,
    },
    {
      name: "Sebastián Holzapfel",
      role: "Gerente TI, EDEHSA S.A.",
      content:
        "Trabajar con DAZZSOFT fue una experiencia increíble. Su metodología ágil nos permitió ver avances constantes y hacer ajustes en tiempo real.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-6 bg-gray-800 border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 h-full">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-cyan-400 mb-2" />
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 mr-4 bg-cyan-400 rounded-full flex items-center justify-center">
                    <span className="text-gray-900 font-bold text-lg">
                      {testimonial.name.substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

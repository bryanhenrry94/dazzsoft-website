"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles, Star } from "lucide-react";

export function HeroSection() {
  const stats = [
    { value: "8+", label: "Empresas confían en nosotros" },
    { value: "9", label: "Especialistas en el equipo" },
    { value: "5.0", label: "Calificación promedio" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 bg-slate-950 overflow-hidden"
    >
      {/* Background glow blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-econtia/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-sky-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10 py-24 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-econtia opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-econtia" />
              </span>
              <span className="text-slate-300 text-xs font-medium tracking-wide">
                Disponibles para nuevos proyectos
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight text-balance">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-econtia block">
                Innovación Digital
              </span>
              que Impulsa tu Negocio
            </h1>

            {/* Subtitle */}
            <p className="text-base text-slate-400 max-w-xl leading-relaxed">
              Te ayudamos a transformar tus procesos con soluciones web a
              medida que mejoran tu eficiencia y potencian tu crecimiento.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                size="lg"
                className="bg-econtia hover:bg-econtia-dark text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-econtia/25"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Comenzar Proyecto
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-700 bg-transparent text-white hover:bg-slate-800 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
                onClick={() => {
                  document.getElementById("services")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Ver Servicios
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-6 border-t border-slate-800">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Laptop mockup with custom web system */}
              <div className="relative bg-slate-900 rounded-lg p-4 shadow-2xl shadow-econtia/10 border border-slate-800">
                <div className="bg-slate-950 rounded-md p-6 min-h-[400px]">
                  {/* Browser bar */}
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-slate-900 rounded px-3 py-1 text-xs text-slate-400 ml-4">
                      https://tu-aplicacion-web.com
                    </div>
                  </div>

                  {/* Dashboard content */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-white font-semibold">
                        Dashboard Personalizado
                      </h3>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 bg-econtia rounded-full"></div>
                        <div className="w-8 h-8 bg-sky-500 rounded-full"></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-gradient-to-r from-econtia to-sky-500 rounded-lg p-3 text-white">
                        <div className="text-2xl font-bold">234</div>
                        <div className="text-xs opacity-80">Usuarios</div>
                      </div>
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-3 text-white">
                        <div className="text-2xl font-bold">1.2k</div>
                        <div className="text-xs opacity-80">Ventas</div>
                      </div>
                      <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg p-3 text-white">
                        <div className="text-2xl font-bold">98%</div>
                        <div className="text-xs opacity-80">Uptime</div>
                      </div>
                    </div>

                    <div className="bg-slate-900 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-3 h-3 bg-econtia rounded-full"></div>
                        <span className="text-slate-300 text-sm">
                          Sistema en Funcionamiento
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-econtia rounded-full w-3/4"></div>
                        </div>
                        <div className="flex justify-between text-xs text-slate-400">
                          <span>Progreso del Proyecto</span>
                          <span>75%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-econtia rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">Web</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xs font-bold">API</span>
              </div>
              <div className="absolute top-1/2 -right-6 hidden md:flex items-center gap-1 px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl shadow-lg">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-white text-xs font-semibold">
                  5.0 de calificación
                </span>
              </div>
              <div className="absolute -top-6 left-8 hidden md:flex items-center gap-1 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-econtia" />
                <span className="text-white text-xs font-semibold">
                  Metodología Ágil
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              <span className="text-cyan-400 text-sm font-medium">DESARROLLO WEB</span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Construye tu
              <span className="text-cyan-400 block">Aplicación Web</span>
              Personalizada
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-300 max-w-xl">
              Desarrollamos sistemas web a medida que impulsan tu negocio. 
              Desde simples landing pages hasta complejas plataformas empresariales.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/25"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                Comenzar Proyecto
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                Ver Servicios
              </Button>
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
              <div className="relative bg-gray-800 rounded-lg p-4 shadow-2xl border border-gray-700">
                <div className="bg-gray-900 rounded-md p-6 min-h-[400px]">
                  {/* Browser bar */}
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-gray-800 rounded px-3 py-1 text-xs text-gray-400 ml-4">
                      https://tu-aplicacion-web.com
                    </div>
                  </div>
                  
                  {/* Dashboard content */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-white font-semibold">Dashboard Personalizado</h3>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 bg-cyan-500 rounded-full"></div>
                        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-3 text-white">
                        <div className="text-2xl font-bold">234</div>
                        <div className="text-xs opacity-80">Usuarios</div>
                      </div>
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-3 text-white">
                        <div className="text-2xl font-bold">1.2k</div>
                        <div className="text-xs opacity-80">Ventas</div>
                      </div>
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg p-3 text-white">
                        <div className="text-2xl font-bold">98%</div>
                        <div className="text-xs opacity-80">Uptime</div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">Sistema en Funcionamiento</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-cyan-500 rounded-full w-3/4"></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-400">
                          <span>Progreso del Proyecto</span>
                          <span>75%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">Web</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xs font-bold">API</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]"></div>
      </div>
    </section>
  );
}

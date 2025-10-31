"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-cyan-400 leading-tight">
            Desarrollo de Software a Medida
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transformamos tus ideas en soluciones digitales innovadoras
          </p>

          {/* CTA Button */}
          <div className="pt-8">
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/25"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              Agendar reunión
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

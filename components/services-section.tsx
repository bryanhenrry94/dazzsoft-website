"use client";
import { Card } from "@/components/ui/card";
import { Code, Zap, Globe, Shield, Bot, Palette } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Desarrollo de Software a Medida",
      description:
        "Soluciones personalizadas que se adaptan perfectamente a tu negocio.",
    },
    {
      icon: Zap,
      title: "Consultoría Tecnológica",
      description:
        "Asesoría en transformación digital y arquitectura de software.",
    },
    {
      icon: Globe,
      title: "Desarrollo Web",
      description:
        "Aplicaciones web modernas y responsivas con las últimas tecnologías.",
    },
    {
      icon: Shield,
      title: "Ciberseguridad",
      description:
        "Protege tus datos y sistemas con nuestras soluciones de seguridad.",
    },
    {
      icon: Bot,
      title: "Aplicaciones RPA",
      description:
        "Automatiza procesos repetitivos y optimiza la eficiencia operacional de tu empresa.",
    },
    {
      icon: Palette,
      title: "Diseño UI/UX",
      description:
        "Interfaces intuitivas y experiencias de usuario excepcionales que conectan con tu audiencia.",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 lg:py-24 px-4 lg:px-8"
      style={{ backgroundColor: "#0b0b0b" }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-400 mb-3 uppercase tracking-wider">
            Servicios
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Nuestros Servicios
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Impulsamos tu negocio con software innovador y automatizaciones
            inteligentes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 bg-gray-900 border border-cyan-900/30 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="text-center flex flex-col flex-grow">
                <div className="flex justify-center mb-4">
                  <service.icon className="w-12 h-12 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                  {service.description}
                </p>
                <button
                  className="w-full px-4 py-2 bg-transparent border border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white rounded-lg font-medium transition-colors mt-auto"
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Solicitar cotización
                </button>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <h3 className="text-lg font-semibold mb-2 text-white">
            ¿Tienes un proyecto en mente?
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Cotiza tu proyecto de software a medida y transforma tu idea en
            realidad
          </p>
          <button
            className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full font-medium transition-colors"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Cotizar Proyecto
          </button>
        </div>
      </div>
    </section>
  );
}

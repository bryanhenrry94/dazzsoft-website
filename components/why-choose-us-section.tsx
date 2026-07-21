"use client";
import { Card } from "@/components/ui/card";
import {
  Search,
  Zap,
  Globe,
  Shield,
  Settings,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Search,
      title: "Enfoque Estratégico",
      description:
        "Analizamos cada proyecto en detalle para ofrecer soluciones alineadas con tus objetivos de negocio.",
    },
    {
      icon: Zap,
      title: "Ejecución Ágil",
      description:
        "Desarrollamos con metodologías ágiles para entregar resultados rápidos y de alta calidad.",
    },
    {
      icon: Shield,
      title: "Calidad Garantizada",
      description:
        "Cada entrega pasa por estrictas pruebas para asegurar fiabilidad y rendimiento.",
    },
    {
      icon: Settings,
      title: "Soporte Continuo",
      description:
        "Acompañamos tu crecimiento con mantenimiento, seguridad y actualizaciones constantes.",
    },
    {
      icon: TrendingUp,
      title: "Crecimiento Escalable",
      description:
        "Diseñamos soluciones que evolucionan contigo, optimizando cada recurso.",
    },
    {
      icon: Globe,
      title: "Presencia Digital Sólida",
      description:
        "Potenciamos tu marca en línea con estrategias SEO y marketing efectivas.",
    },
  ];

  return (
    <section
      id="reasons"
      className="relative py-12 lg:py-16 px-4 lg:px-8 overflow-hidden bg-gray-50"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 leading-tight">
            ¿Por qué <span className="text-econtia">elegirnos</span>?
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto leading-relaxed">
            Descubre las razones por las que somos el socio ideal para llevar tu
            proyecto al siguiente nivel.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="group relative p-6 bg-white border border-gray-200 hover:border-econtia/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl overflow-hidden"
            >
              <div className="relative z-10">
                {/* Icon container */}
                <div className="relative mb-4">
                  <div className="w-14 h-14 bg-econtia-light rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <reason.icon className="w-7 h-7 text-econtia" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-3 text-gray-900 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 transition-colors duration-300">
                  {reason.description}
                </p>

                {/* Arrow indicator */}
                <div
                  className="flex items-center text-econtia opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2 cursor-pointer"
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  <span className="text-xs font-medium mr-2">Conocer más</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 lg:mt-12">
          <div
            className="inline-flex items-center gap-2 text-econtia group cursor-pointer"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <span className="text-base font-medium">
              ¿Listo para comenzar tu proyecto?
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}

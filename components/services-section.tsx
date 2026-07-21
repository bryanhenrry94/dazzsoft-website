"use client";
import { Card } from "@/components/ui/card";
import {
  Code,
  Zap,
  Globe,
  Shield,
  Bot,
  Palette,
  Receipt,
  ExternalLink,
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Receipt,
      title: "Econtia · Facturación y Contabilidad",
      description:
        "Sistema de facturación electrónica y contabilidad en la nube, desarrollado por DAZZSOFT para simplificar la gestión financiera de tu empresa.",
      badge: "Producto Propio",
      link: "https://www.econtia.com",
      cta: "Conocer Econtia",
    },
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
    <section id="services" className="py-16 lg:py-24 px-4 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Nuestros Servicios
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios de desarrollo de software
            diseñados para impulsar tu negocio hacia el éxito digital.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="relative p-6 bg-white border border-gray-200 hover:border-econtia hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
            >
              {service.badge && (
                <span className="absolute top-4 right-4 px-2 py-1 rounded-full bg-econtia-light border border-econtia/30 text-econtia text-[10px] font-semibold uppercase tracking-wider">
                  {service.badge}
                </span>
              )}
              <div className="text-center flex flex-col flex-grow">
                <div className="flex justify-center mb-4">
                  <service.icon className="w-12 h-12 text-econtia" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {service.description}
                </p>
                {service.link ? (
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-transparent border border-econtia text-econtia hover:bg-econtia hover:text-white rounded-lg font-medium transition-colors mt-auto"
                  >
                    {service.cta}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    className="w-full px-4 py-2 bg-transparent border border-econtia text-econtia hover:bg-econtia hover:text-white rounded-lg font-medium transition-colors mt-auto"
                    onClick={() => {
                      document.getElementById("contact")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    Solicitar cotización
                  </button>
                )}
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <h3 className="text-lg font-semibold mb-2 text-gray-900">
            ¿Tienes un proyecto en mente?
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Cotiza tu proyecto de software a medida y transforma tu idea en
            realidad
          </p>
          <button
            className="px-8 py-3 bg-econtia hover:bg-econtia-dark text-white rounded-full font-medium transition-colors"
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

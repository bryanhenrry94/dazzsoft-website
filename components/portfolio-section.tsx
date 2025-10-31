"use client";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";

export function PortfolioSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const successCases = [
    {
      id: 1,
      title: "Centraal Inning Platform",
      client: "CIO",
      description:
        "Plataforma web para la gestión de cobranzas y pagos en línea para una cadena de retail.",
      image: "/images/projects/centraalinning.png",
      imageAlt: "Centraal Inning platform dashboard",
      link: "https://centraalinning.com",
    },
    {
      id: 2,
      title: "CIO Website",
      client: "CIO",
      description:
        "Aplicación móvil para la administración de cobranzas y seguimiento de pagos para pequeñas empresas.",
      image: "/images/projects/portalci.png",
      imageAlt: "Centraal Inning Onderneming mobile app",
      link: "https://portalci.net",
    },
    {
      id: 3,
      title: "Vsynergy ERP",
      client: "EDEHSA S.A.",
      description:
        "Solución ERP integral para la gestión empresarial, incluyendo módulos de finanzas, inventario y ventas.",
      image: "/images/projects/vsynergy.png",
      imageAlt: "Vsynergy ERP dashboard",
      link: "https://edehsa.com/",
    },
    {
      id: 4,
      title: "Fundisel Website",
      client: "Fundisel",
      description:
        "Desarrollo del sitio web corporativo para una fundación dedicada a la educación y el desarrollo social.",
      image: "/images/projects/fundisel.png",
      imageAlt: "Fundisel foundation website",
      link: "https://fundisel.com",
    },
    {
      id: 5,
      title: "Urbano Acceso System",
      client: "UrbanoAcceso",
      description:
        "Sistema de gestión de accesos y seguridad para edificios residenciales y comerciales.",
      image: "/images/projects/urbanoacceso-system.png",
      imageAlt: "Urbano Acceso interface",
      link: "https://urban-web-swart.vercel.app/auth/signin",
    },
    {
      id: 6,
      title: "Urbano Acceso Website",
      client: "UrbanoAcceso",
      description:
        "Sitio web informativo para una empresa de soluciones de acceso y seguridad urbana.",
      image: "/images/projects/urbanoacceso-website.png",
      imageAlt: "Urbano Acceso interface",
      link: "https://urbanoacceso.com",
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 lg:px-8 bg-gray-900 relative">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Portafolio
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Proyectos que transforman ideas en soluciones digitales exitosas
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successCases.map((project) => (
            <Card
              key={project.id}
              className="group relative overflow-hidden bg-gray-800 border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-80 overflow-hidden">
                {/* Project Image */}
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  onError={(
                    e: React.SyntheticEvent<HTMLImageElement, Event>
                  ) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                  }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/70" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <h3 className="text-xl font-bold mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    Cliente: {project.client}
                  </p>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    {project.description}
                  </p>

                  {/* Ver más button with fade effect */}
                  <button
                    className={`self-start px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-all duration-300 transform ${
                      hoveredProject === project.id
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    Ver más
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto p-8 bg-gray-800 rounded-2xl border border-gray-700 shadow-lg">
            <p className="text-xl text-gray-300 mb-6">
              ¿Tienes un proyecto en mente?
            </p>
            <button
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Trabajemos Juntos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

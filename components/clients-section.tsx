"use client";
import Image from "next/image";

export function ClientsSection() {
  const clients = [
    { name: "Generali", logo: "/images/customers/cliente1.png" },
    { name: "Edehsa", logo: "/images/customers/cliente2.png" },
    { name: "Fundisel", logo: "/images/customers/cliente3.png" },
    { name: "Medistep", logo: "/images/customers/cliente4.png" },
    { name: "Comunica Digital", logo: "/images/customers/cliente5.png" },
    { name: "CIO", logo: "/images/customers/cliente6.png" },
    { name: "Centrallinning", logo: "/images/customers/cliente7.png" },
    { name: "Ecuare", logo: "/images/customers/cliente8.png" },
  ];

  return (
    <section
      className="py-16 lg:py-24 px-4 lg:px-8"
      style={{ backgroundColor: "#0b0b0b" }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-400 mb-2 uppercase tracking-widest font-medium">
            Empresas que confían en nosotros
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Nuestros Clientes
          </h2>
        </div>
        <div className="overflow-hidden">
          <div className="flex animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="group flex items-center justify-center p-6 rounded-lg border border-gray-800 bg-gray-900/50 hover:bg-gray-800/50 hover:border-cyan-500/50 transition-all duration-500 ease-in-out transform hover:scale-105 flex-shrink-0 w-48 mx-4"
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={120}
                  height={60}
                  className="h-12 md:h-16 w-auto max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:brightness-110"
                  priority={index < 3}
                />
              </div>
            ))}
          </div>
          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              animation: scroll 20s linear infinite;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}

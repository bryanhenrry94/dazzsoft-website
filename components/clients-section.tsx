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
    <section className="py-4 lg:py-12 px-4 lg:px-8 border-y border-gray-200 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-6">
          <p className="text-xs text-gray-500 mb-1 uppercase tracking-wider font-medium">
            Empresas que confían en nosotros
          </p>
        </div>
        <div className="overflow-hidden">
          <div className="flex animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="group flex items-center justify-center p-3 rounded border border-gray-200 bg-white hover:border-econtia/50 hover:shadow-sm transition-all duration-300 ease-in-out hover:scale-105 flex-shrink-0 w-36 mx-2"
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={100}
                  height={50}
                  className="h-8 md:h-10 w-auto max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:brightness-110"
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

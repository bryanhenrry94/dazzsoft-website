import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "DAZZSOFT - Desarrollo de Software a Medida | Aplicaciones Web Personalizadas",
  description:
    "Empresa especializada en desarrollo de software a medida y aplicaciones web personalizadas. Creamos soluciones de software personalizado con metodologías ágiles Scrum. Servicios de diseño UI/UX, DevOps y automatizaciones RPA para empresas globales.",
  keywords: [
    "desarrollo de software a medida",
    "desarrollo de software",
    "aplicaciones web personalizadas",
    "software personalizado",
    "desarrollo ágil",
    "Scrum",
    "desarrollo web",
    "empresa de software",
    "soluciones de software",
    "DevOps",
    "automatización RPA",
    "desarrollo de software Ecuador",
    "software Ecuador",
  ],
  generator: "v0.app",
  openGraph: {
    title: "DAZZSOFT - Desarrollo de Software a Medida",
    description:
      "Soluciones de software personalizadas con metodologías ágiles para empresas globales",
    type: "website",
  },
};
// </CHANGE>

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark bg-[#0d1117] text-[#e2e8f0]">
      <body className={`${inter.className} font-sans antialiased`}>
        <main className="pb-16">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}

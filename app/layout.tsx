import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dazzsoft.com"),
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
    url: "https://www.dazzsoft.com",
    siteName: "DAZZSOFT",
    locale: "es_EC",
  },
  twitter: {
    card: "summary_large_image",
    title: "DAZZSOFT - Desarrollo de Software a Medida",
    description:
      "Soluciones de software personalizadas con metodologías ágiles para empresas globales",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="bg-white text-gray-900">
      <body className={`${inter.className} font-sans antialiased`}>
        <main className="pb-16">{children}</main>
        <Toaster
          theme="light"
          position="bottom-right"
          richColors
          toastOptions={{
            classNames: {
              toast: "bg-white border border-gray-200 text-gray-900 shadow-lg",
              description: "text-gray-500",
            },
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}

import Link from "next/link";
import { ExternalLink, Globe, Mail, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-cyan-900/30 bg-[#050505]">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4 text-gray-200">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#inicio"
                  className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="#servicios"
                  className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="#portafolio"
                  className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Portafolio
                </Link>
              </li>
              <li>
                <Link
                  href="#quienes-somos"
                  className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-200">Redes Sociales</h3>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/dazzsoft"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 text-gray-400 flex items-center justify-center hover:bg-cyan-600 hover:text-white transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href="https://dazzsoft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 text-gray-400 flex items-center justify-center hover:bg-cyan-600 hover:text-white transition-colors"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-200">Contacto</h3>
            <div className="space-y-2">
              <a
                href="mailto:info@dazzsoft.com"
                className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@dazzsoft.com
              </a>
              <a
                href="tel:+593123456789"
                className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +593 12 345 6789
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-cyan-900/30 text-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} DazzSoft. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

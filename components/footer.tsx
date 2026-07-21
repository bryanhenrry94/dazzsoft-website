import Link from "next/link";
import {
  ExternalLink,
  Mail,
  Phone,
  Instagram,
  Linkedin,
  Receipt,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className="text-sm text-gray-600 hover:text-econtia transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-sm text-gray-600 hover:text-econtia transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="text-sm text-gray-600 hover:text-econtia transition-colors"
                >
                  Portafolio
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-sm text-gray-600 hover:text-econtia transition-colors"
                >
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-900">
              Nuestros Productos
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.econtia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-econtia transition-colors"
                >
                  <Receipt className="w-4 h-4" />
                  Econtia · Facturación y Contabilidad
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-900">
              Redes Sociales
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/bryan-navarrete-2a8590228"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-100 text-gray-500 flex items-center justify-center hover:bg-econtia hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/dazzsoft?igsh=eGhscHVlZmcyZ3dy&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-100 text-gray-500 flex items-center justify-center hover:bg-econtia hover:text-white transition-colors"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@dazzsoft?_r=1&_t=ZM-910C14mnhfv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-100 text-gray-500 flex items-center justify-center hover:bg-econtia hover:text-white transition-colors"
                title="TikTok"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Contacto</h3>
            <div className="space-y-2">
              <a
                href="mailto:info@dazzsoft.com"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-econtia transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@dazzsoft.com
              </a>
              <a
                href="tel:+593969437708"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-econtia transition-colors"
              >
                <Phone className="w-4 h-4" />
                +593 96 943 7708
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} DazzSoft. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

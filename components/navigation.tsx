"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Inicio" },
    { href: "#services", label: "Servicios" },
    { href: "#portfolio", label: "Portafolio" },
    { href: "#about", label: "Nosotros" },
    { href: "#contact", label: "Contacto" },
  ];

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-[#0d1117]/80 backdrop-blur-lg shadow-lg border-b border-gray-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/dazzsoft-logo-white.png"
              alt="DAZZSOFT Logo"
              width={150}
              height={40}
              // className="hidden md:block"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-cyan-400 text-black hover:bg-cyan-300"
            >
              <Link href="#contact">Contáctanos</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-gray-800">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                asChild
                className="w-full bg-cyan-400 text-black hover:bg-cyan-300"
              >
                <Link href="#contact" onClick={() => setIsOpen(false)}>
                  Contáctanos
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

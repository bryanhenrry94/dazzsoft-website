"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo es requerido";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Ingresa un correo válido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", formData);
      // Reset form after successful submission
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "+593969437708"; // Replace with actual WhatsApp number
    const message =
      "Hola, me gustaría agendar una llamada para hablar sobre un proyecto.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "info@dazzsoft.com",
      link: "mailto:info@dazzsoft.com",
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+593 96 943 7708",
      link: "tel:+593969437708",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Guayaquil, Ecuador",
      link: null,
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 px-4 lg:px-8 relative overflow-hidden bg-gray-900"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            ¿Listo para impulsar tu negocio?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos
            digitales
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="p-6 bg-gray-800/50 border-cyan-500/30 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-white"
                    >
                      Nombre completo
                    </label>
                    <Input
                      id="name"
                      placeholder="Juan Pérez"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: "" });
                      }}
                      className={`bg-gray-800/50 border-cyan-500 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/50 transition-colors ${
                        errors.name ? "border-red-500" : ""
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs">{errors.name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-white"
                    >
                      Correo electrónico
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="juan@empresa.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: "" });
                      }}
                      className={`bg-gray-800/50 border-cyan-500 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/50 transition-colors ${
                        errors.email ? "border-red-500" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-white"
                  >
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos sobre tu proyecto..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: "" });
                    }}
                    className={`bg-gray-800/50 border-cyan-500 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/50 transition-colors resize-none ${
                      errors.message ? "border-red-500" : ""
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs">{errors.message}</p>
                  )}
                </div>
                <div className="space-y-4">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full group bg-cyan-500 hover:bg-cyan-400 text-white font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensaje
                        <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>

                  <div className="flex items-center justify-center">
                    <div className="flex-1 border-t border-gray-600"></div>
                    <span className="px-4 text-gray-400 text-sm">o</span>
                    <div className="flex-1 border-t border-gray-600"></div>
                  </div>

                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={handleWhatsAppClick}
                    className="w-full group border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 transition-all duration-200"
                  >
                    <MessageCircle className="mr-2 w-4 h-4" />O agenda una
                    llamada por WhatsApp
                  </Button>
                </div>
              </form>
            </Card>
          </div>
          <div className="space-y-4 mt-10 lg:mt-0">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={info.title}
                  className="group p-4 bg-gray-800/60 border-cyan-500/30 backdrop-blur-sm hover:bg-gray-800/80 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02] cursor-pointer"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex items-center gap-4">
                    {/* Icon Section - Left */}
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-lg group-hover:from-cyan-500/30 group-hover:to-cyan-600/30 transition-all duration-300 group-hover:scale-110">
                        <Icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Content Section - Right */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-semibold text-base mb-1 group-hover:text-cyan-100 transition-colors duration-300">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium text-sm group-hover:text-cyan-300 inline-flex items-center gap-1 break-all"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {info.value}
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                            →
                          </span>
                        </a>
                      ) : (
                        <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 font-medium text-sm">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

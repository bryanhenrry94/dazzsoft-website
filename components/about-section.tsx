import { Card } from "@/components/ui/card";
import { Heart, Shield, Lightbulb } from "lucide-react";

export function AboutSection() {
  const team = [
    {
      name: "Bryan Navarrete",
      role: "CEO & Founder",
      avatar: "BN",
      description:
        "Encabeza la visión de Dazzsoft, impulsando la innovación y liderando la estrategia de crecimiento.",
    },
    {
      name: "Erick Gilbert",
      role: "UX/UI Designer",
      avatar: "EG",
      description:
        "Crea experiencias visuales intuitivas que optimizan la interacción del usuario con nuestras plataformas.",
    },
    {
      name: "Mateo Párraga",
      role: "Web Developer Senior",
      avatar: "MP",
      description:
        "Desarrolla soluciones web robustas y escalables, enfocándose en el rendimiento y la seguridad.",
    },
    {
      name: "Israel Toala",
      role: "Web Developer Senior",
      avatar: "IT",
      description:
        "Desarrolla soluciones web robustas y escalables, enfocándose en el rendimiento y la seguridad.",
    },
    {
      name: "David Morocho",
      role: "RPA Developer Senior",
      avatar: "DM",
      description:
        "Especialista en automatización de procesos, optimizando flujos de trabajo mediante tecnologías RPA.",
    },
    {
      name: "Catalina Rivas",
      role: "Digital Marketing Specialist",
      avatar: "CR",
      description:
        "Experta en estrategias de marketing digital y optimización de la presencia en línea.",
    },
    {
      name: "Joselyn Cardona",
      role: "Chief Accounting Officer",
      avatar: "JC",
      description:
        "Supervisa las finanzas y garantiza la precisión en la gestión contable, apoyando decisiones estratégicas.",
    },
    {
      name: "Youling Fun sang",
      role: "Project Managment",
      avatar: "YF",
      description:
        "Gestiona cada fase del proyecto para asegurar resultados óptimos, organizando tiempos y recursos de forma eficiente.",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Pasión",
      description:
        "Amamos lo que hacemos y se refleja en cada línea de código.",
    },
    {
      icon: Shield,
      title: "Confianza",
      description:
        "Construimos relaciones duraderas basadas en transparencia y resultados.",
    },
    {
      icon: Lightbulb,
      title: "Innovación",
      description:
        "Siempre exploramos nuevas tecnologías para ofrecer soluciones vanguardistas.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 lg:px-8 text-white"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Quiénes Somos
          </h2>
          <p className="text-xl text-gray-300 text-pretty leading-relaxed">
            Somos un equipo de profesionales apasionados por la tecnología,
            dedicados a transformar ideas en soluciones digitales innovadoras
            que impulsan el crecimiento de tu negocio.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Nuestro Equipo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card
                key={index}
                className="p-6 text-center bg-gray-900/50 border-gray-800 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/20"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-black font-bold text-xl">
                  {member.avatar}
                </div>
                <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
                <p className="text-cyan-400 mb-3 font-medium">{member.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {member.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Values */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Nuestros Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 text-center bg-gray-900/50 border-gray-800 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/20"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-cyan-400/20 rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Company Mission Block */}
          <Card className="p-8 text-center bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border-cyan-400/30 hover:border-cyan-400 transition-all duration-300">
            <Shield className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
            <h4 className="text-2xl font-bold mb-4 text-cyan-400">
              Comprometidos con tu Éxito
            </h4>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              En cada proyecto, aplicamos nuestra experiencia y dedicación para
              crear soluciones que no solo cumplan tus expectativas, sino que
              las superen. Tu confianza es nuestro mayor logro.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  const team = [
    {
      name: "Bryan Navarrete",
      role: "CEO & Founder",
      avatar: "BN",
      description:
        "Lidera la visión estratégica y el crecimiento de la empresa, enfocándose en la innovación tecnológica y las relaciones con clientes.",
    },
    {
      name: "Erick Gilbert",
      role: "UX/UI Designer",
      avatar: "EG",
      description:
        "Diseña interfaces intuitivas y experiencias de usuario excepcionales para aplicaciones web y móviles.",
    },
    {
      name: "Mateo Párraga",
      role: "Web Developer Senior",
      avatar: "MP",
      description:
        "Desarrolla aplicaciones web robustas y escalables utilizando tecnologías modernas de frontend y backend.",
    },
    {
      name: "Israel Toala",
      role: "Web Developer Senior",
      avatar: "IT",
      description:
        "Especialista en arquitectura de software y desarrollo de soluciones web complejas con enfoque en rendimiento.",
    },
    {
      name: "David Morocho",
      role: "RPA Developer Senior",
      avatar: "DM",
      description:
        "Automatiza procesos empresariales mediante RPA y desarrolla soluciones de inteligencia artificial para optimización operativa.",
    },
    {
      name: "Catalina Rivas",
      role: "Digital Marketing Specialist",
      avatar: "CR",
      description:
        "Desarrolla estrategias de marketing digital y gestiona campañas para aumentar la presencia online de los clientes.",
    },
    {
      name: "Joselyn Cardona",
      role: "Chief Accounting Officer",
      avatar: "JC",
      description:
        "Supervisa las operaciones financieras, presupuestos y análisis económicos para garantizar la salud financiera de la empresa.",
    },
    {
      name: "Youling Fun sang",
      role: "Project Management",
      avatar: "YF",
      description:
        "Coordina equipos multidisciplinarios y gestiona proyectos desde la planificación hasta la entrega exitosa.",
    },
    {
      name: "Joselyn Andrade",
      role: "Manager Assistant",
      avatar: "JA",
      description:
        "Proporciona soporte administrativo y operativo para optimizar la eficiencia de los procesos internos.",
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 px-4 lg:px-8 bg-white">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance text-gray-900">
            Sobre Dazzsoft
          </h2>
          <p className="text-lg text-gray-600 text-pretty leading-relaxed mb-6">
            En Dazzsoft, somos especialistas en desarrollo de software y
            automatización de procesos. Transformamos ideas en soluciones
            tecnológicas robustas que optimizan operaciones y aceleran el
            crecimiento empresarial.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
              <h3 className="text-econtia font-semibold mb-2">
                Nuestra Misión
              </h3>
              <p className="text-gray-600 text-sm">
                Empoderar a las empresas con tecnología innovadora y
                automatización inteligente para maximizar su eficiencia
                operativa.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
              <h3 className="text-econtia font-semibold mb-2">
                Nuestra Visión
              </h3>
              <p className="text-gray-600 text-sm">
                Ser líderes en soluciones tecnológicas que transformen la manera
                en que las empresas operan y se conectan con sus clientes.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
              <h3 className="text-econtia font-semibold mb-2">
                Nuestros Valores
              </h3>
              <p className="text-gray-600 text-sm">
                Innovación, excelencia técnica, transparencia y compromiso con
                el éxito de nuestros clientes en cada proyecto.
              </p>
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Conoce a Nuestro Equipo
          </h3>
          <h4 className="text-xl text-gray-500 font-medium mb-8">
            Apasionados. Proactivos. Expertos.
          </h4>
          <p className="text-lg text-gray-600 text-pretty leading-relaxed mb-12 max-w-3xl mx-auto">
            Nuestro equipo está compuesto por expertos en diversas áreas de la
            tecnología, listos para llevar tu proyecto al siguiente nivel.
          </p>

          <div className="space-y-8">
            {/* First row - 4 members */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
              {team.slice(0, 4).map((member, index) => (
                <div key={index} className="text-center group max-w-xs">
                  <div className="w-24 h-24 mx-auto mb-4 bg-econtia-light rounded-full flex items-center justify-center text-econtia font-bold text-lg transition-transform duration-300 group-hover:scale-105 border-2 border-econtia/20">
                    {member.avatar}
                  </div>
                  <h4 className="text-lg font-bold mb-1 text-gray-900">
                    {member.name}
                  </h4>
                  <p className="text-econtia text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Second row - 4 members */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
              {team.slice(4, 8).map((member, index) => (
                <div key={index + 4} className="text-center group max-w-xs">
                  <div className="w-24 h-24 mx-auto mb-4 bg-econtia-light rounded-full flex items-center justify-center text-econtia font-bold text-lg transition-transform duration-300 group-hover:scale-105 border-2 border-econtia/20">
                    {member.avatar}
                  </div>
                  <h4 className="text-lg font-bold mb-1 text-gray-900">
                    {member.name}
                  </h4>
                  <p className="text-econtia text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Third row - remaining member centered */}
            {team.length > 8 && (
              <div className="flex justify-center">
                <div className="text-center group max-w-xs">
                  <div className="w-24 h-24 mx-auto mb-4 bg-econtia-light rounded-full flex items-center justify-center text-econtia font-bold text-lg transition-transform duration-300 group-hover:scale-105 border-2 border-econtia/20">
                    {team[8].avatar}
                  </div>
                  <h4 className="text-lg font-bold mb-1 text-gray-900">
                    {team[8].name}
                  </h4>
                  <p className="text-econtia text-sm font-medium mb-3">
                    {team[8].role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {team[8].description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

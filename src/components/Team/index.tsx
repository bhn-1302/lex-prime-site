type TeamMember = {
  name: string;
  role: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Dr. João Silva",
    role: "Sócio Fundador • Direito Empresarial",
    image: "/images/advogado2.png",
  },

  {
    name: "Dra. Maria Souza",
    role: "Especialista em Contratos",
    image: "/images/advogado1.png",
  },

  {
    name: "Dra. Julia Perez",
    role: "Propriedade Intelectual",
    image: "/images/advogado3.png",
  },
];

export const TeamSection = () => {
  return (
    <section id="team" className="bg-brand-bg py-16">
      <div className="text-center mb-12">
        <h2 className="text-white text-3xl md:text-4xl font-bold">
          Nosso Time
        </h2>
        <p className="text-brand-muted mt-4">
          Profissionais experientes e comprometidos em oferecer soluções
          jurídicas modernas e eficazes.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl p-6 shadow-md text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
            />
            <h3
              className="text-white text-xl
                         font-semibold"
            >
              {member.name}
            </h3>
            <p className="text-brand-primary text-sm mt-2">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

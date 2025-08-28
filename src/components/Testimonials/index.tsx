import { motion } from "framer-motion";

type Testimonial = {
  text: string;
  author: string;
  delay: number;
};

const testimonials: Testimonial[] = [
  {
    text: "Profissionais extremamente competentes. Trouxeram segurança em todas as etapas do contrato da minha empresa.",
    author: "Ana P.",
    delay: 0.2,
  },

  {
    text: "A equipe da Lex Prime sempre nos atendeu com rapidez e clareza. Recomendo sem hesitar.",
    author: "Carlos M.",
    delay: 0.4,
  },

  {
    text: "Encontrei muito mais do que advogados. São verdadeiros parceiros estratégicos para o negócio.",
    author: "Fernanda L.",
    delay: 0.6,
  },
];

export const Testimonials = () => {
  return (
    <section id="credibilidade" className="bg-brand-bg py-16">
      <div className="text-center max-w-2xl mx-auto mb-12 px-4">
        <h2 className="text-white text-3xl md:text-4xl font-bold">
          {" "}
          O que dizem nossos clientes
        </h2>
        <h4 className="text-brand-muted mt-4">
          A confiança de nossos clientes é nosso maior reconhecimento.
        </h4>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl hover:translate-y-1 transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: testimonial.delay }}
            viewport={{ once: true }}
          >
            <blockquote className="text-lg text-white/90 italic mb-4 cursor-default">
              "{testimonial.text}"
            </blockquote>
            <p>— {testimonial.author}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

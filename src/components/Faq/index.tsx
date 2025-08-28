import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "Quais áreas do Direito a Lex Prime atende?",
    answer:
      "Atuamos em Direito Empresarial, Contratos, Propriedade Intelectual e outras áreas estratégicas para empresas.",
  },

  {
    question: "O atendimento pode ser online?",
    answer:
      "Sim! Realizamos reuniões tanto presenciais quanto virtuais, conforme a necessidade do cliente.",
  },

  {
    question: "Como funciona a primeira consulta?",
    answer:
      "A primeira reunião é destinada a compreender suas necessidades e apresentar a melhor estratégia jurídica.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-brand-bg py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-center text-white text-3xl md:text-4xl font-bold mb-8">
          Perguntas Frequentes
        </h2>
      </div>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl shadow-md p-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-white text-lg font-medium">
                {item.question}
              </h3>
              <span className="text-brand-primary text-xl">
                {openIndex === index ? "-" : "+"}
              </span>
            </div>

            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  className="text-brand-muted mt-3"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

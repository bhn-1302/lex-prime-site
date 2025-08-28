import { Building, FileText, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export const ServicesSection = () => {
  return (
    <section id="services" className="bg-brand-bg py-16">
      <div className="text-center max-w-2xl mx-auto mb-12 px-4">
        <h2 className="text-white text-3xl md:text-4xl font-bold">
          Áreas de Atuação
        </h2>
        <p className="text-brand-muted mt-4">
          Conheça como podemos apoiar você e sua empresa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        <motion.div
          className="bg-gray-900 rounded-xl p-6 shadow-lg hover:scale-105 transition"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Building className="w-10 h-10 text-brand-primary" />
          <h3 className="text-brand-primary text-xl font-semibold mb-4 cursor-default">
            Direito Empresarial
          </h3>
          <p className="text-white/80 cursor-default">
            Consultoria estratégica para empresas em todas as fases de
            crescimento.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-900 rounded-xl p-6 shadow-lg hover:scale-105 transition"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <FileText className="w-10 h-10 text-brand-primary" />
          <h3 className="text-brand-primary text-xl font-semibold mb-4 cursor-default">
            Contratos
          </h3>
          <p className="text-white/80 cursor-default">
            Elaboração e revisão de contratos com foco em segurança e clareza.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-900 rounded-xl p-6 shadow-lg hover:scale-105 transition"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Lightbulb className="w-10 h-10 text-brand-primary" />
          <h3 className="text-brand-primary text-xl font-semibold mb-4 cursor-default">
            Propriedade Intelectual
          </h3>
          <p className="text-white/80 cursor-default">
            Proteção da marca e dos ativos intangíveis da sua empresa.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

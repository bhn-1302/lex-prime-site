import { motion } from "framer-motion"

export const HeroSection = () => {
  return (
    <main className="bg-brand-bg grid grid-cols-1 md:grid-cols-2 items-center p-8 md:p-16 gap-30">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Excelência em Direito Empresarial e Contratos
        </h1>

        <p className="text-brand-muted text-lg">
          Soluções jurídicas modernas para o seu negócio prosperar com
          segurança.
        </p>

        <button className="bg-brand-primary text-black font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition cursor-pointer">
          Fale conosco
        </button>
      </div>

      <motion.img 
        src="/images/simbolo-direito2.png"
        alt="Símbolo do Direito"
        className="max-w-sm" 
        animate={{x: [0, -10, 0]}}
        transition={{ duration: 3, repeat: Infinity}}
      />
    </main>
  );
};

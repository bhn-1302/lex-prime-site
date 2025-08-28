export const ContactSection = () => {
  return (
    <section id="contato" className="bg-brand-bg py-16 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-white text-3xl md:text-4xl font-bold">
          Entre em Contato
        </h2>
        <p className="text-brand-muted mt-4">
          Estamos prontos para ouvir você e oferecer a melhor solução jurídica
          para o seu negócio.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-gray-900 rounded-2xl shadow-lg p-8">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white mb-2"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              placeholder="Seu nome"
              className="w-full rounded-lg p-3 bg-gray-800 text-white border border-gray-700 focus:border-brand-primary focus:ring focus:ring-brand-primary/40 outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white mb-2"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              placeholder="seuemail@exemplo.com"
              className="w-full rounded-lg p-3 bg-gray-800 text-white border border-gray-700 focus:border-brand-primary focus:ring focus:ring-brand-primary/40 outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white mb-2"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Escreva sua mensagem..."
              className="w-full rounded-lg p-3 bg-gray-800 text-white border border-gray-700 focus:border-brand-primary focus:ring focus:ring-brand-primary/40 outline-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-brand-primary hover:bg-brand-secondary text-white font-semibold py-3 rounded-lg transition cursor-pointer"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

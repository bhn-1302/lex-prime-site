export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-brand-bg/80 backdrop-blur border-b border-white/10">
      <nav className="container mx-auto flex items-center justify-between py-3 px-4">
        <span className="font-['Playfair_Display'] text-xl md:text-2xl font-bold text-brand-primary">
          LexPrime
        </span>

        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li>
            <a href="#services" className="hover:text-brand-primary transition">
              Áreas
            </a>
          </li>
          <li>
            <a href="#credibilidade" className="hover:text-brand-primary transition">
              Credibilidade
            </a>
          </li>
          <li>
            <a href="#faq" className="hover:text-brand-primary transition">
              FAQ
            </a>
          </li>
          <li>
            <a href="#contato" className="hover:text-brand-primary transition">
              Contato
            </a>
          </li>
        </ul>

        <a
          href="https://wa.me/5599999999999"
          target="_blank"
          className="px-4 py-2 rounded-lg bg-brand-primary text-black font-semibold hover:opacity-90 transition"
        >
          WhatsApp
        </a>
      </nav>
    </header>
  );
};

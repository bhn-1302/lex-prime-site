export const Footer = () => {
    return (
        <footer className="bg-brand-bg text-brand-muted py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                <div>
                    <h2  className="text-white text-2xl font-bold cursor-default">Lex Prime</h2>
                    <p className="mt-4 text-sm cursor-default"> Escritório de advocacia comprometido com soluções jurídicas modernas, seguras e estratégicas para empresas.</p>
                </div>

                <div>
                    <h3 className="text-white text-lg font-semibold mb-4 cursor-default">Navegação</h3>
                    <ul className="space-y-2 text-sm">
                       <li><a href="#about" className="hover:text-white transition">Sobre Nós</a></li>
                       <li><a href="#services" className="hover:text-white transition">Atuação</a></li>
                       <li><a href="#team" className="hover:text-white">Equipe</a></li>
                       <li><a href="#contact" className="hover:text-white transition">Contato</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white text-lg font-semibold mb-4 cursor-default" id="contact">Contato</h3>
                    <ul className="space-y-2 text-sm cursor-default">
                        <li>Email: contato@lexprime.com</li>
                        <li>Telefone: (11) 1234-5678</li>
                        <li>Endereço: Av. Paulista, 1000 - SP</li>
                    </ul>
                </div>
            </div>

            <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/60 cursor-default">
            © {new Date().getFullYear()}  Lex Prime — Todos os direitos reservados.
            </div>
        </footer>
    )
}
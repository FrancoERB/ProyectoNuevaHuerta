import { ArrowUp, Leaf, MessageCircle } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#102b1c] text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Marca */}
          <div className="lg:col-span-2">
            <a href="#inicio" className="inline-flex items-center gap-3">
              <div className="bg-green-700 p-3 rounded-xl">
                <Leaf size={27} />
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight">
                  NUEVA HUERTA
                </h2>
                <p className="text-[10px] tracking-[3px] text-green-300 uppercase">
                  Fresco y natural
                </p>
              </div>
            </a>

            <p className="text-green-200/70 text-sm leading-relaxed max-w-sm mt-6">
              Frutas y verduras para disfrutar todos los días. Una forma simple
              y práctica de llevar frescura a tu hogar.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="font-extrabold text-lg mb-6">Navegación</h3>

            <ul className="space-y-4 text-sm text-green-200/70">
              <li>
                <a href="#inicio" className="hover:text-lime-300 transition">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#cajas" className="hover:text-lime-300 transition">
                  Nuestras cajas
                </a>
              </li>
              <li>
                <a
                  href="#beneficios"
                  className="hover:text-lime-300 transition"
                >
                  Beneficios
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-lime-300 transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-extrabold text-lg mb-6">Contacto</h3>

            <div className="space-y-4 text-sm text-green-200/70">
              <p>Estamos preparando nuestros canales de contacto.</p>

              <div className="flex items-center gap-3">
                <MessageCircle size={18} />
                <span>WhatsApp próximamente</span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="18"
                    cy="6"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
                ;<span>Instagram próximamente</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-7 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-xs text-green-200/50 text-center">
            © {new Date().getFullYear()} Nueva Huerta. Todos los derechos
            reservados.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-7">
            <a
              href="https://portfolio-ten-sandy-68.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-green-200/60 hover:text-lime-300 transition"
            >
              Desarrollado por{" "}
              <span className="font-extrabold text-green-100 hover:text-lime-300">
                ErbenDevs
              </span>
            </a>

            <a
              href="#inicio"
              className="flex items-center gap-2 text-sm text-green-200 hover:text-lime-300 transition"
            >
              Volver arriba
              <ArrowUp size={17} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

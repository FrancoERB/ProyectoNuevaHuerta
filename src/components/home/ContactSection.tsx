import { ArrowRight, Leaf, MessageCircle, ShoppingBasket } from "lucide-react";

function ContactSection() {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="relative overflow-hidden bg-green-900 rounded-[2.5rem] px-8 py-16 md:px-16 md:py-20">
          <div className="absolute -top-24 -right-20 w-80 h-80 bg-green-700/40 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-lime-400/10 rounded-full blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-white/10 text-green-200 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                <Leaf size={15} />
                Estamos para ayudarte
              </span>

              <h2 className="text-4xl md:text-5xl font-black text-white mt-6 leading-tight">
                ¿Listo para llenar tu mesa de frescura?
              </h2>

              <p className="text-green-100 mt-6 leading-relaxed max-w-lg">
                Elegí tu caja favorita y hacé tu pedido. Si tenés alguna
                consulta, estamos para ayudarte.
              </p>

              <a
                href="#cajas"
                className="inline-flex items-center gap-3 mt-9 bg-lime-400 hover:bg-lime-300 text-green-950 px-7 py-4 rounded-full font-extrabold transition-all hover:-translate-y-1"
              >
                <ShoppingBasket size={20} />
                Ver nuestras cajas
                <ArrowRight size={19} />
              </a>
            </div>

            <div className="flex justify-center">
              <div className="bg-white/10 border border-white/15 backdrop-blur-sm rounded-[2rem] p-8 md:p-10 max-w-sm w-full text-center">
                <div className="w-20 h-20 mx-auto bg-green-700 rounded-3xl flex items-center justify-center text-lime-300">
                  <MessageCircle size={38} />
                </div>

                <h3 className="text-2xl font-black text-white mt-6">
                  Hablemos
                </h3>

                <p className="text-green-100 text-sm mt-3 leading-relaxed">
                  Muy pronto vas a poder comunicarte directamente con Nueva
                  Huerta desde acá.
                </p>

                <div className="mt-7 bg-white/10 rounded-xl px-4 py-3">
                  <p className="text-green-200 text-xs font-bold uppercase tracking-wider">
                    Contacto
                  </p>
                  <p className="text-white font-semibold mt-1">Próximamente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

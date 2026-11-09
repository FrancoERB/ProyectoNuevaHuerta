import { ArrowRight, MessageCircle, ShoppingBasket, Truck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ShoppingBasket,
    title: "Elegí tu caja",
    description:
      "Conocé nuestras opciones y elegí la caja que mejor se adapte a vos y a tu familia.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Hacé tu pedido",
    description:
      "Agregá tus cajas al carrito y enviá tu pedido directamente por WhatsApp.",
  },
  {
    number: "03",
    icon: Truck,
    title: "Recibí en tu casa",
    description:
      "Coordinamos la entrega para que disfrutes de frutas y verduras frescas.",
  },
];

function HowItWorksSection() {
  return (
    <section className="py-24 bg-[#f4f7ed]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-green-700 uppercase tracking-[3px] text-xs font-bold">
            Simple y práctico
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-green-950 mt-4">
            ¿Cómo funciona?
          </h2>

          <p className="text-gray-500 mt-5 leading-relaxed">
            Disfrutar de productos frescos nunca fue tan fácil. Hacé tu pedido
            en tres simples pasos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="relative bg-white rounded-[2rem] p-9 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-center">
                  <div className="relative w-20 h-20 bg-green-100 text-green-700 rounded-3xl flex items-center justify-center">
                    <Icon size={34} />

                    <span className="absolute -top-3 -right-3 w-8 h-8 bg-green-700 text-white text-xs font-black rounded-full flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-green-950 mt-7">
                  {step.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mt-3">
                  {step.description}
                </p>

                {index !== 2 && (
                  <div className="hidden md:flex absolute top-1/2 -right-5 z-10 w-10 h-10 bg-green-700 text-white rounded-full items-center justify-center">
                    <ArrowRight size={19} />
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="#cajas"
            className="inline-flex items-center gap-3 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full font-bold transition-all hover:-translate-y-1"
          >
            Elegir mi caja
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;

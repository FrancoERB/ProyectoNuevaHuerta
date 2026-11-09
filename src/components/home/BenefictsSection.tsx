import { Heart, Leaf, ShieldCheck, Truck } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "Siempre fresco",
    description:
      "Seleccionamos frutas y verduras frescas para que recibas productos de calidad.",
  },
  {
    icon: Truck,
    title: "A tu domicilio",
    description: "Recibí tu caja directamente en casa, sin complicaciones.",
  },
  {
    icon: Heart,
    title: "Elegido con cuidado",
    description: "Preparamos cada pedido pensando en vos y en tu familia.",
  },
  {
    icon: ShieldCheck,
    title: "Calidad garantizada",
    description:
      "Trabajamos para ofrecerte productos confiables y seleccionados.",
  },
];

function BenefitsSection() {
  return (
    <section id="beneficios" className="bg-[#f4f7ed] py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-green-700 uppercase tracking-[3px] text-xs font-bold">
            ¿Por qué elegirnos?
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-green-950 mt-4">
            Frescura que se nota
          </h2>

          <p className="text-gray-500 mt-5 leading-relaxed">
            Queremos que comprar frutas y verduras sea simple, cómodo y una
            experiencia de calidad.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="bg-white rounded-3xl p-7 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-green-100 text-green-700 flex items-center justify-center">
                  <Icon size={30} />
                </div>

                <h3 className="text-lg font-extrabold text-green-950 mt-6">
                  {benefit.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mt-3">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;

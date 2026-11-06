import { ArrowRight, Leaf, Truck } from "lucide-react";

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#f4f7ed]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* TEXTO */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-7">
            <Leaf size={16} />
            Frescura directo a tu hogar
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-green-950 leading-[1.08] tracking-tight">
            Lo mejor de la huerta,
            <span className="text-green-600"> en tu casa.</span>
          </h2>

          <p className="mt-7 text-gray-600 text-lg leading-relaxed max-w-lg">
            Frutas y verduras frescas, seleccionadas especialmente para vos.
            Recibí todo lo que necesitás sin salir de casa.
          </p>

          <div className="flex flex-wrap gap-4 mt-9">
            <a
              href="#cajas"
              className="inline-flex items-center gap-3 bg-green-700 hover:bg-green-800 text-white px-7 py-4 rounded-full font-bold shadow-lg shadow-green-900/20 transition-all hover:-translate-y-1"
            >
              Ver nuestras cajas
              <ArrowRight size={20} />
            </a>

            <div className="flex items-center gap-2 px-3 text-green-900">
              <Truck size={23} />
              <span className="text-sm font-semibold">
                Entregas a domicilio
              </span>
            </div>
          </div>
        </div>

        {/* IMAGEN */}
        <div className="relative">
          <div className="absolute -inset-5 bg-green-200/50 rounded-[3rem] rotate-3" />

          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=85"
            alt="Frutas y verduras frescas"
            className="relative w-full h-[380px] md:h-[500px] object-cover rounded-[2.5rem] shadow-2xl"
          />

          <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-4 shadow-xl">
            <p className="text-xs text-gray-500 font-medium">
              Calidad seleccionada
            </p>
            <p className="text-green-900 font-extrabold text-lg">
              Fresco todos los días
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

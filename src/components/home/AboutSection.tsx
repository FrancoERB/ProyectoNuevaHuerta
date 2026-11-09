import { Heart, Leaf, Sprout } from "lucide-react";

function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1200&q=85"
              alt="Frutas y verduras frescas"
              className="w-full h-[420px] object-cover rounded-[2rem]"
            />

            <div className="absolute -bottom-6 -right-3 md:right-6 bg-green-700 text-white p-6 rounded-2xl shadow-xl">
              <Sprout size={30} />
              <p className="font-bold mt-2">Fresco y natural</p>
              <p className="text-xs text-green-100 mt-1">
                Para disfrutar todos los días
              </p>
            </div>
          </div>

          <div className="lg:pl-5">
            <span className="text-green-700 uppercase tracking-[3px] text-xs font-bold">
              Nuestra esencia
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-green-950 mt-4 leading-tight">
              Queremos llevar lo mejor de la huerta a tu mesa.
            </h2>

            <p className="text-gray-500 leading-relaxed mt-6">
              En Nueva Huerta creemos que comer rico y fresco debería ser
              simple. Por eso pensamos en cajas de frutas y verduras
              seleccionadas para hacer tus compras más cómodas.
            </p>

            <p className="text-gray-500 leading-relaxed mt-4">
              Una propuesta práctica para que disfrutes de productos frescos en
              tu casa, sin complicarte.
            </p>

            <div className="flex items-center gap-3 mt-8">
              <div className="w-12 h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center">
                <Leaf size={24} />
              </div>

              <div>
                <p className="font-extrabold text-green-950">
                  Simple, fresco y natural
                </p>
                <p className="text-sm text-gray-500">
                  Esa es nuestra forma de hacer las cosas.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-5">
              <div className="w-12 h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center">
                <Heart size={24} />
              </div>

              <div>
                <p className="font-extrabold text-green-950">
                  Pensado para vos
                </p>
                <p className="text-sm text-gray-500">
                  Opciones prácticas para tu día a día.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

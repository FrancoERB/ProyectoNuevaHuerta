import { ShoppingCart } from "lucide-react";
import { boxes } from "../../data/boxes";

const boxImages: Record<string, string> = {
  "caja-chica":
    "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=900&q=85",
  "caja-familiar":
    "https://images.unsplash.com/photo-1542838132-92c53300491e?w=900&q=85",
};

function BoxesSection() {
  return (
    <section id="cajas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-green-700 uppercase tracking-[3px] text-xs font-bold">
            Elegí tu favorita
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-green-950 mt-4">
            Nuestras cajas
          </h2>

          <p className="text-gray-500 mt-5 leading-relaxed">
            Seleccionamos frutas y verduras frescas para que disfrutes de
            productos de calidad durante toda la semana.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {boxes.map((box, index) => (
            <article
              key={box.id}
              className="group bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={boxImages[box.id]}
                  alt={box.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <span className="absolute top-5 left-5 bg-white/95 text-green-800 px-4 py-2 rounded-full text-xs font-bold">
                  {index === 0 ? "Ideal para parejas" : "Ideal para familias"}
                </span>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-extrabold text-green-950">
                  {box.name}
                </h3>

                <p className="text-gray-500 mt-2">{box.description}</p>

                <div className="border-t border-gray-100 my-6" />

                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                      Precio
                    </p>

                    <p className="text-3xl font-black text-green-800 mt-1">
                      ${box.price.toLocaleString("es-AR")}
                    </p>
                  </div>

                  <button className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-full font-bold transition">
                    <ShoppingCart size={19} />
                    Agregar
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BoxesSection;

import { Check, Package, ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { boxes } from "../../data/boxes";

const boxImages: Record<string, string> = {
  "caja-chica":
    "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=900&q=85",
  "caja-familiar":
    "https://images.unsplash.com/photo-1542838132-92c53300491e?w=900&q=85",
};

function BoxesSection() {
  const { addToCart } = useCart();

  return (
    <section id="cajas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-green-700 uppercase tracking-[3px] text-xs font-bold">
            Frescura para tu hogar
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-green-950 mt-4">
            Elegí tu caja ideal
          </h2>

          <p className="text-gray-500 mt-5 leading-relaxed">
            Todo lo que necesitás en frutas y verduras, seleccionado y preparado
            para vos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {boxes.map((box, index) => (
            <article
              key={box.id}
              className="group bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden h-72">
                <img
                  src={boxImages[box.id]}
                  alt={box.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <span className="absolute top-5 left-5 bg-white text-green-800 px-4 py-2 rounded-full text-xs font-bold">
                  {index === 0 ? "Ideal para parejas" : "Ideal para familias"}
                </span>

                <span className="absolute bottom-5 right-5 bg-green-700 text-white px-4 py-2 rounded-full text-xs font-bold">
                  {box.products.length} productos
                </span>
              </div>

              <div className="p-7">
                <div className="flex items-center gap-2 text-green-700">
                  <Package size={18} />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Nuestra selección
                  </span>
                </div>

                <h3 className="text-3xl font-black text-green-950 mt-3">
                  {box.name}
                </h3>

                <p className="text-gray-500 mt-2">{box.description}</p>

                <div className="bg-[#f7f9f3] rounded-2xl p-5 mt-6">
                  <h4 className="font-extrabold text-green-950 mb-4">
                    ¿Qué incluye?
                  </h4>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                    {box.products.map((product) => (
                      <div key={product.id} className="flex items-start gap-2">
                        <Check
                          size={17}
                          className="text-green-700 mt-0.5 shrink-0"
                        />

                        <div>
                          <p className="text-sm font-semibold text-gray-800">
                            {product.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {product.quantity}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-100 mt-7 pt-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                      Precio de ejemplo
                    </p>

                    <p className="text-3xl font-black text-green-800 mt-1">
                      ${box.price.toLocaleString("es-AR")}
                    </p>
                  </div>

                  <button
                    onClick={() => addToCart(box)}
                    className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-5 py-4 rounded-full font-bold transition"
                  >
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

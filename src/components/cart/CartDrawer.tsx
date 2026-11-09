import { Minus, Plus, ShoppingBasket, Trash2, X } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { sendOrderByWhatsApp } from "../../services/whatsapp";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, increaseQuantity, decreaseQuantity, removeFromCart, total } =
    useCart();

  const formatPrice = (price: number) => `$${price.toLocaleString("es-AR")}`;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      <button
        aria-label="Cerrar carrito"
        onClick={onClose}
        className="absolute inset-0 bg-black/40"
      />

      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <ShoppingBasket className="text-green-700" size={25} />
            <h2 className="text-xl font-black text-green-950">Tu carrito</h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <X size={23} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
            <ShoppingBasket size={55} className="text-green-200" />

            <h3 className="text-xl font-bold text-green-950 mt-5">
              Tu carrito está vacío
            </h3>

            <p className="text-gray-500 mt-2">
              Agregá alguna de nuestras cajas para comenzar.
            </p>

            <button
              onClick={onClose}
              className="mt-6 bg-green-700 text-white px-6 py-3 rounded-full font-bold"
            >
              Seguir comprando
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-5">
              {items.map((item) => (
                <article
                  key={item.box.id}
                  className="flex gap-4 border-b border-gray-100 pb-5"
                >
                  <div className="flex-1">
                    <h3 className="font-extrabold text-green-950">
                      {item.box.name}
                    </h3>

                    <p className="text-green-800 font-bold mt-1">
                      {formatPrice(item.box.price)}
                    </p>

                    <div className="flex items-center gap-3 mt-4">
                      <button
                        onClick={() => decreaseQuantity(item.box.id)}
                        className="w-8 h-8 rounded-full border flex items-center justify-center"
                      >
                        <Minus size={15} />
                      </button>

                      <span className="font-bold">{item.quantity}</span>

                      <button
                        onClick={() => increaseQuantity(item.box.id)}
                        className="w-8 h-8 rounded-full border flex items-center justify-center"
                      >
                        <Plus size={15} />
                      </button>

                      <button
                        onClick={() => removeFromCart(item.box.id)}
                        className="ml-auto text-red-500 p-2"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>

                  <p className="font-extrabold text-green-950">
                    {formatPrice(item.box.price * item.quantity)}
                  </p>
                </article>
              ))}
            </div>

            <div className="border-t border-gray-100 p-6">
              <div className="flex justify-between items-center mb-5">
                <span className="text-gray-500 font-semibold">Total</span>

                <span className="text-2xl font-black text-green-900">
                  {formatPrice(total)}
                </span>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => sendOrderByWhatsApp(items, total)}
                  className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-full font-bold transition"
                >
                  Finalizar pedido por WhatsApp
                </button>

                <button
                  onClick={onClose}
                  className="w-full border border-green-700 text-green-800 py-3 rounded-full font-bold"
                >
                  Seguir comprando
                </button>
              </div>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

export default CartDrawer;

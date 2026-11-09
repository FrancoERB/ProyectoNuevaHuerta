import { Leaf, Menu, ShoppingBasket, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import CartDrawer from "../cart/CartDrawer";

function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { itemCount } = useCart();

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-green-100">
        <nav className="max-w-7xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2">
            <div className="bg-green-700 text-white p-2 rounded-xl">
              <Leaf size={25} />
            </div>

            <div>
              <h1 className="text-2xl font-extrabold text-green-900 tracking-tight">
                NUEVA HUERTA
              </h1>
              <p className="text-[10px] tracking-[3px] text-green-700 uppercase">
                Fresco y natural
              </p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-9">
            <a
              href="#inicio"
              className="text-sm font-semibold text-gray-700 hover:text-green-700"
            >
              Inicio
            </a>
            <a
              href="#cajas"
              className="text-sm font-semibold text-gray-700 hover:text-green-700"
            >
              Nuestras cajas
            </a>
            <a
              href="#beneficios"
              className="text-sm font-semibold text-gray-700 hover:text-green-700"
            >
              Beneficios
            </a>
            <a
              href="#contacto"
              className="text-sm font-semibold text-gray-700 hover:text-green-700"
            >
              Contacto
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCartOpen(true)}
              aria-label="Abrir carrito"
              className="relative bg-green-700 hover:bg-green-800 text-white p-3 rounded-full transition"
            >
              <ShoppingBasket size={21} />

              <span className="absolute -top-1 -right-1 bg-lime-400 text-green-950 text-xs font-bold min-w-5 h-5 px-1 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-green-900 p-2"
              aria-label="Abrir menú"
            >
              {menuOpen ? <X size={25} /> : <Menu size={25} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-green-100 px-6 py-5 flex flex-col gap-5">
            {[
              ["Inicio", "#inicio"],
              ["Nuestras cajas", "#cajas"],
              ["Beneficios", "#beneficios"],
              ["Contacto", "#contacto"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="font-semibold text-green-900"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}

export default Navbar;

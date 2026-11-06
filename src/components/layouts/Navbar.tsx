import { Leaf, Menu, ShoppingBasket } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-green-100">
      <nav className="max-w-7xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
        {/* LOGO */}
        <a href="#" className="flex items-center gap-2">
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

        {/* NAVEGACIÓN */}
        <div className="hidden md:flex items-center gap-9">
          <a
            href="#inicio"
            className="text-sm font-semibold text-gray-700 hover:text-green-700 transition"
          >
            Inicio
          </a>
          <a
            href="#cajas"
            className="text-sm font-semibold text-gray-700 hover:text-green-700 transition"
          >
            Nuestras cajas
          </a>
          <a
            href="#beneficios"
            className="text-sm font-semibold text-gray-700 hover:text-green-700 transition"
          >
            Beneficios
          </a>
          <a
            href="#contacto"
            className="text-sm font-semibold text-gray-700 hover:text-green-700 transition"
          >
            Contacto
          </a>
        </div>

        {/* ACCIONES */}
        <div className="flex items-center gap-3">
          <button className="relative bg-green-700 hover:bg-green-800 text-white p-3 rounded-full transition">
            <ShoppingBasket size={21} />
            <span className="absolute -top-1 -right-1 bg-lime-400 text-green-950 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </button>

          <button className="md:hidden text-green-900 p-2">
            <Menu size={25} />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

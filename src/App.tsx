import BoxesSection from "./components/home/BoxesSection";
import Hero from "./components/home/Hero";
import Navbar from "./components/layouts/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <BoxesSection />
      </main>

      <footer
        id="contacto"
        className="bg-green-950 text-white py-10 text-center"
      >
        <h3 className="text-2xl font-black">NUEVA HUERTA</h3>
        <p className="text-green-200 text-sm mt-2">
          Frescura y calidad directo a tu hogar.
        </p>
        <p className="text-green-300/60 text-xs mt-6">
          © 2026 Nueva Huerta. Todos los derechos reservados.
        </p>
      </footer>
    </>
  );
}

export default App;

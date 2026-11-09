import AboutSection from "./components/home/AboutSection";
import BenefitsSection from "./components/home/BenefictsSection";
import BoxesSection from "./components/home/BoxesSection";
import ContactSection from "./components/home/ContactSection";
import FAQSection from "./components/home/FAQSection";
import Hero from "./components/home/Hero";
import HowItWorksSection from "./components/home/HowItWorkSection";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import { CartProvider } from "./context/CartContext";
function App() {
  return (
    <CartProvider>
      <Navbar />

      <main>
        <Hero />
        <BoxesSection />
        <HowItWorksSection />
        <BenefitsSection />
        <AboutSection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
    </CartProvider>
  );
}

export default App;

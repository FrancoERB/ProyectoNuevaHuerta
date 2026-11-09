import { MessageCircle, Minus, Plus } from "lucide-react";
import { useState } from "react";

const questions = [
  {
    question: "¿Cómo puedo realizar mi pedido?",
    answer:
      'Elegí la caja que quieras, agregala al carrito y tocá "Finalizar pedido por WhatsApp". Se abrirá una conversación con el detalle de tu pedido para que puedas enviarlo.',
  },
  {
    question: "¿Qué incluyen las cajas?",
    answer:
      "Cada caja contiene una selección de frutas y verduras. Podés consultar los productos y las cantidades en la descripción de cada caja.",
  },
  {
    question: "¿Puedo elegir o cambiar los productos?",
    answer:
      "Por el momento trabajamos con cajas prearmadas, por lo que no es posible modificar individualmente los productos incluidos.",
  },
  {
    question: "¿Cómo se coordina la entrega?",
    answer:
      "Una vez enviado tu pedido, nos comunicaremos por WhatsApp para coordinar los detalles de la entrega.",
  },
  {
    question: "¿Qué medios de pago aceptan?",
    answer:
      "Podés consultar los medios de pago disponibles directamente por WhatsApp al momento de coordinar tu pedido.",
  },
  {
    question: "¿Los precios pueden cambiar?",
    answer:
      "Los precios publicados pueden actualizarse. El importe final se confirma al coordinar el pedido.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#f4f7ed]">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <div className="text-center mb-14">
          <span className="text-green-700 uppercase tracking-[3px] text-xs font-bold">
            Estamos para ayudarte
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-green-950 mt-4">
            Preguntas frecuentes
          </h2>

          <p className="text-gray-500 mt-5 leading-relaxed">
            Resolvé tus dudas y conocé cómo funciona Nueva Huerta.
          </p>
        </div>

        <div className="space-y-4">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.question}
                className="bg-white rounded-2xl border border-green-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-bold text-green-950">
                    {item.question}
                  </span>

                  <span className="shrink-0 text-green-700">
                    {isOpen ? <Minus size={21} /> : <Plus size={21} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <div className="mt-12 bg-green-900 rounded-3xl p-8 md:p-10 text-center text-white">
          <MessageCircle size={34} className="mx-auto text-green-300" />

          <h3 className="text-2xl font-black mt-4">¿Tenés otra consulta?</h3>

          <p className="text-green-100 text-sm mt-3">
            Escribinos y te ayudamos con tu pedido.
          </p>

          <p className="text-green-300 text-xs mt-5">
            Próximamente: contacto directo por WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;

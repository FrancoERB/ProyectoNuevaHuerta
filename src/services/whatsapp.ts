
import type { CartItem } from '../types'

const WHATSAPP_NUMBER = '5492615778057'

export function sendOrderByWhatsApp(items: CartItem[], total: number) {
  const formatPrice = (price: number) =>
    `$${price.toLocaleString('es-AR')}`

  const products = items
    .map(
      (item) =>
        `• ${item.quantity} x ${item.box.name} — ${formatPrice(
          item.box.price * item.quantity
        )}`
    )
    .join('\n')

  const message = `
¡Hola! Quiero realizar el siguiente pedido:

${products}

*TOTAL: ${formatPrice(total)}*

¡Muchas gracias!
  `.trim()

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

  window.open(url, '_blank')
}

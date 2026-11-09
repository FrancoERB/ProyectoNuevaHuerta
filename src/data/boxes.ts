
import type { Box } from '../types'

export const boxes: Box[] = [
  {
    id: 'caja-chica',
    name: 'Caja Chica',
    description: 'Una selección variada de frutas y verduras para tu semana.',
    price: 15000,
    image: '/images/boxes/caja-chica.webp',
    products: [
      { id: '1', name: 'Papa', quantity: '1 kg', image: '/images/products/papa.webp' },
      { id: '2', name: 'Cebolla', quantity: '1 kg', image: '/images/products/cebolla.webp' },
      { id: '3', name: 'Zanahoria', quantity: '500 g', image: '/images/products/zanahoria.webp' },
      { id: '4', name: 'Tomate', quantity: '1 kg', image: '/images/products/tomate.webp' },
      { id: '5', name: 'Lechuga', quantity: '1 unidad', image: '/images/products/lechuga.webp' },
      { id: '6', name: 'Manzana', quantity: '1 kg', image: '/images/products/manzana.webp' },
      { id: '7', name: 'Naranja', quantity: '1 kg', image: '/images/products/naranja.webp' },
      { id: '8', name: 'Banana', quantity: '1 kg', image: '/images/products/banana.webp' },
    ],
  },
  {
    id: 'caja-familiar',
    name: 'Caja Familiar',
    description: 'Más variedad y cantidad para compartir en familia.',
    price: 25000,
    image: '/images/boxes/caja-familiar.webp',
    products: [
      { id: '1', name: 'Papa', quantity: '2 kg', image: '/images/products/papa.webp' },
      { id: '2', name: 'Cebolla', quantity: '1 kg', image: '/images/products/cebolla.webp' },
      { id: '3', name: 'Zanahoria', quantity: '1 kg', image: '/images/products/zanahoria.webp' },
      { id: '4', name: 'Tomate', quantity: '2 kg', image: '/images/products/tomate.webp' },
      { id: '5', name: 'Lechuga', quantity: '2 unidades', image: '/images/products/lechuga.webp' },
      { id: '6', name: 'Zapallo', quantity: '1 kg', image: '/images/products/zapallo.webp' },
      { id: '7', name: 'Morron', quantity: '500 g', image: '/images/products/morron.webp' },
      { id: '8', name: 'Acelga', quantity: '1 atado', image: '/images/products/acelga.webp' },
      { id: '9', name: 'Manzana', quantity: '2 kg', image: '/images/products/manzana.webp' },
      { id: '10', name: 'Naranja', quantity: '2 kg', image: '/images/products/naranja.webp' },
      { id: '11', name: 'Banana', quantity: '1 kg', image: '/images/products/banana.webp' },
      { id: '12', name: 'Pera', quantity: '1 kg', image: '/images/products/pera.webp' },
    ],
  },
]

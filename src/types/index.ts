export interface Product {
  id: string
  name: string
  quantity: string
  image: string
}

export interface Box {
  id: string
  name: string
  description: string
  price: number
  image: string
  products: Product[]
}

export interface CartItem {
  box: Box
  quantity: number
}
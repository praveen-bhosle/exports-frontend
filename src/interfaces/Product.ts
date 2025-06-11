export interface Product {
  id: number
  quality: string
  price?: number | null
  sizeA: string
  sizeB: string
  image?: string[] | null
}
interface Image { 
  name : string 
}

export interface Product {
  id: number
  quality: string
  cost: number 
  sizeA: string
  sizeB: string
  images: Image[] 
}

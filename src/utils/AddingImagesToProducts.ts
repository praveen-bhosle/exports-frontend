import type { Product } from '../interfaces/Product'

export const AddingImagesToProducts = (Products: Product[]) => {
  return Products.map((product, index) => {
    return {
      ...product,
      image: [
        `image_${((index % 4) * 4) + 1}.jpeg`,
        `image_${((index % 4) * 4) + 2}.jpeg`,
        `image_${((index % 4) * 4) + 3}.jpeg`,
        `image_${((index % 4) * 4) + 4}.jpeg`
      ]
    }
  }) 
}

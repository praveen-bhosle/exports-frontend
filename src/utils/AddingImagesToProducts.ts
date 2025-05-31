import type { Product } from '../interfaces/Product'

export const AddingImagesToProducts = (Products: Product[]) => {
  return Products.map((product, index) => {
    return {
      ...product,
      image: [
        `image_${index * 4 + 1}.jpg`,
        `image_${index * 4 + 2}.jpg`,
        `image_${index * 4 + 2}.jpg`,
        `image_${index * 4 + 3}.jpg`
      ]
    }
  })
}

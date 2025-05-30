import { getProducts } from "../api/ProductsApi";
import type { Product } from "../interfaces/Product";

export const Products: Product[] = await getProducts(); 
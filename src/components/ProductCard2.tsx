import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import type { Product } from '../interfaces/Product'

const ProductCard2 = ({ element }: { element: Product }) => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='rounded-[8px] p-[4px] shadow-custom hover:shadow-hoverCustom  transition:shadow '>
           
        </div>
    )
}

export default ProductCard2


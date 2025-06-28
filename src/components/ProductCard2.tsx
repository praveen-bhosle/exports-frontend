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
        <div className='shadow-custom hover:shadow-hoverCustom  transition:shadow  rounded-[3px]'>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={false}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                className='carousel-container z-0'
            >
                {element.images.map((e, index) =>
                    <div key={index}>   <img  src={ '/' + e.name} width={0} height={0} sizes="100vw" className='w-full h-auto rounded-[5px]' /></div>
                )
                }
            </Carousel>
        </div>
    )
}

export default ProductCard2


import { Suspense } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import type { Product } from '../interfaces/Product';
import { useStore } from '../state/Store';
import { useCartMutations } from '../hooks/useCartQueryMutations';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ element    }: { element: Product   }) => {

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
 
    const setIsCartOpen  = useStore( (state) => state.setIsCartOpen  ) ; 
    const user = useStore( (state) => state.user) ; 

   const {  postMutation }  = useCartMutations( ) ;  
    const navigate  = useNavigate() ; 
   
 
    return (

        <div className='flex flex-col gap-2  rounded-[8px] p-[4px] shadow-custom hover:shadow-hoverCustom  transition:shadow  border-black border-[2px] sm:border-[3px] md:border-[4px] '>

            <div className='basis-3/4'>
              
                <Suspense fallback={<Loading />}>
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
                        {element.images.map((e, index) =>  {
                            return ( 
                            <div key={index}>   <img src= {'/'+e.name} alt='' width={0} height={0} sizes="100vw" className='w-full h-auto rounded-[5px]' /></div>  ) 
                            } 
                        )
                        }
                    </Carousel>
                </Suspense>
            
            </div>

            <div className='basis-1/5 '>
                <a className='text-xl   font-bold text-black  hover:underline hover:cursor-pointer ' onClick={() => { navigate(`/app/products?productId=${element.id}`) }} > {element.sizeA} </a> <br />
                <span className='text-sm  '> {element.sizeB} </span> <br />
                <span className='text-sm  font-semibold select-none'>
                    Rs.{element.cost}/kg
                </span>
            </div>

            <div className='basis-1/20'>
                <button
                    onClick={() => { 
                    if(user.username) { 
                     postMutation.mutate(element.id) ; 
                       setIsCartOpen(true) ; }
                    else { 
                    alert('Create an account to access cart functionalities.')
                    }
                    }}
                    className='bg-black text-white rounded-[12px] px-2 py-[1px]  w-[100%]'
                >
                    Add to cart
                </button>

            </div>
        </div>
    )
}

export default ProductCard
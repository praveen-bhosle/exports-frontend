import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import type { Product } from '../interfaces/Product';
import { useStore } from '../state/Store';
import { useCartMutations } from '../hooks/useCartQueryMutations';

import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { SheetTrigger } from './ui/sheet';

const ProductCard = ({ element }: { element: Product }) => {

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
 
    const setIsCartOpen = useStore((state) => state.setIsCartOpen);
    const user = useStore((state) => state.user);

    const { postMutation } = useCartMutations();
    const navigate = useNavigate();

    const handleAdd = async () => {
        await postMutation.mutateAsync(element.id);
        setIsCartOpen(true);
    };

    return (
        <div className='flex flex-col gap-3 p-4 rounded-xl shadow-lg dark:bg-zinc-800 transition-all duration-300 ease-in-out transform hover:scale-101 hover:shadow-2xl'>
            <div className='relative overflow-hidden rounded-lg'>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlay={false}
                    keyBoardControl={true}
                    transitionDuration={500}
                    containerClass="carousel-container"
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    className='carousel-container z-0'
                >
                    {element.images.map((e, index) => {
                        return (
                            <div key={index} className='flex justify-center items-center'>
                                <img
                                    src={'/' + e.name}
                                    alt={`Product image ${index + 1}`}
                                    className='w-full h-auto object-cover rounded-lg'
                                />
                            </div>
                        );
                    })}
                </Carousel>
            </div>
            
            <div className='flex flex-col gap-1'>
                <a
                    className='text-xl font-bold text-gray-900 dark:text-white hover:underline cursor-pointer'
                    onClick={() => { navigate(`/app/products?productId=${element.id}`) }}
                >
                    {element.sizeA}
                </a>
                <span className='text-sm text-gray-500 dark:text-gray-400'>{element.sizeB}</span>
                <span className='text-lg font-semibold text-gray-800 dark:text-gray-200'>
                    Rs.{element.cost}/kg
                </span>
            </div>

            <div className='mt-auto pt-2'>
                <SheetTrigger asChild > 
                <button
                    onClick={() => {
                        if (user.username) {
                            const addPromise = handleAdd();
                            toast.promise(addPromise, {
                                loading: "Adding product to cart...",
                                success: "Product added to cart!",
                                error: "Error while adding product to cart."
                            });
                        } else {
                            toast.error("Login to access cart.");
                        }
                    }}
                    className='w-full bg-black dark:bg-white text-white dark:text-black py-2 rounded-lg font-medium transition-colors duration-300 hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white cursor-pointer'
                >
                    Add to cart
                </button>
                </SheetTrigger>
            </div>
        </div>
    );
};

export default ProductCard;
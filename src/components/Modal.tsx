const Modal = ( {    children   } : { children : React.ReactNode   }) => {  
  return (
<div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4 transition-opacity duration-300">
    <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl relative w-full max-w-lg mx-auto transform scale-100 opacity-100 transition-all duration-300">
        {children}
    </div>
</div>  ) 
}

export default Modal ; 


/* 
const onClose = () => { setIsModalOpen(false) ;   } 

   const modalRef = useRef<HTMLDivElement>(null) ; 


    useEffect(() => { 
      if(!isModalOpen) return  ; 
      const handleEscape = (event:  KeyboardEvent ) => { 
        if(event.key === 'Escape')  { 
           onClose() ; 
        }
      }
      const handleClickOutside = (event : MouseEvent ) => {  
        const clickedElement = event.target as Node ; 
        if( modalRef.current && modalRef.current && !modalRef.current.contains( clickedElement ) ) { 
            onClose() ; 
        }
      }
      document.addEventListener('keydown' ,   handleEscape) ; 
      document.addEventListener('mousedown' , handleClickOutside) ; 

      return () =>  { 
        document.removeEventListener('keydown' , handleEscape  ) ; 
        document.removeEventListener('mousedown' ,  handleClickOutside) ; 
      }

    } ,  [isModalOpen ]) ; 

    if(!isModalOpen)  return null ;

    return  createPortal(
        <div ref={modalRef}  className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg relative animate-scaleIn"  >
            <button onClick={onClose}> X </button> 
                { title && ( <h2 id="modal-title"  className="text-2xl font-semibold" > {title} </h2> ) }
            <div> 
                {children}
            </div>
        </div> , document.body 
    )
*/
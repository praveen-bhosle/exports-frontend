const Footer = () => {
    return (
        <div className='bg-black  text-white px-4 py-4 '>
            <div className=' grid grid-cols-2 gap-2 text-lg py-4 md:grid-cols-4  '>
                <div>
                    <div className='text-xl xl:text-2xl font-bold'> Resources  </div>
                    <a href='' className='hover:underline block w-max'> Blog   </a>
                    <a href='' className='hover:underline block w-max'> Customer stories  </a>
                </div>
                <div className=''>
                    <div className='text-xl font-bold'> Company  </div>
                    <a href='/about' className='hover:underline block  w-max'> About us </a>
                    <a href='' className='hover:underline block w-max'> Jobs </a>
                </div>
                <div className='col-span-2 text-sm'>
                    <div className='text-xl font-bold'> Contact Us </div>
                    <div><img src='/call.svg' alt='image' width={20} height={20} className='inline' /> +917899255947   </div>
                    <div> <img src='/mail.svg' alt='image' width={20} height={20} className='inline' /> guruprasadkulkarni@ykdevoutexports.com  </div>
                    <div> <img src='/location.svg' alt='image' width={20} height={20} className='inline' />  Rajendra Nagar, Madhubani, Purnia 854301, Bihar, India  </div>
                </div>
            </div>
            <br/>
            <div className=' flex gap-4 px-4 pb-4 w-[400px] mx-auto '>
                <div className='w-[60px] h-[60px] hover:bg-[#292929] flex justify-center items-center' ><img src='/instagram.svg' alt='image' width={40} height={40} /> </div>
                <div className='w-[60px] h-[60px] hover:bg-[#292929] flex justify-center items-center'><img src='/yt.svg' alt='image' width={44} height={44} /></div>
                <div className='w-[60px] h-[60px] hover:bg-[#292929] flex justify-center items-center'><img src='/facebook.svg' alt='image' width={45} height={45} /></div>
                <div className='w-[60px] h-[60px] hover:bg-[#292929] flex justify-center items-center'><img src='/x.svg' alt='image' width={50} height={50} /></div>
                <div className='w-[60px] h-[60px] hover:bg-[#292929] flex justify-center items-center'><a href={'mailto:guruprasadkulkarni@ykdevoutexports.com?subject=MakhanaOrderQueries'}> <img src='/mail.svg' alt='mail' width={40} height={40} />  </a> </div>
            </div>
        </div>
    )
}

export default Footer


import  Link  from 'next/link'
import Image from  'next/image'



const Hero = () => {
    return (
        <>
        <div className='bg-gradient-to-r from-purple-700 to-purple-600 justify-between items-center flex flex-col  lg:flex lg:flex-row-reverse lg:justify-between  '>
          {/* image */}
          <div className='w-screen h-full xl:ml-96'>
            <img src='/images/motor.png' ></img>
          </div>
          {/* text */}
          <div className='text-2xl my-4 font-bold capitalize text-white sm:text-3xl sm:my-6 md:text-4xl md:my-8 space-y-11 lg:hidden'>
            start your journey
          </div>
          {/* buttons */}
         
          <div className='  flex font-bold  justify-center items-center sm:mt-1 md:block  lg:mt-10 xl:mt-14  '>
            <div className='hidden  ml-12 my-12 font-bold capitalize text-white lg:block lg:text-4xl xl:text-6xl'>
            start your journey
            </div>
            <div className='  mb-3 w-40   flex flex-col justify-center items-center gap-y-2 text-center md:flex md:w-80  
             md:flex-row gap-x-3 md:ml-5 lg:w-110'>
              <div className='btn-first ' >  <Link href='/Body'>Watch Videos</Link></div>

              <div className='btn-first'  ><Link  href='/PmdcmotorFINAL'>Watch 3D Models</Link></div>
            </div>
          </div>
        </div>
        <div className=' flex items-center justify-center'>
           <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 md:w-10 md:h-10 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
           </svg>
           </div> 
        </>
    )
}

export default Hero;

import React,{useState ,useEffect} from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';





import Link from "next/link"
const body = () => {
  useEffect(()=>{
    Aos.init({duration:1500,
      disable:'mobile'
    })
  },[]);
    return (
      <>
        <div className=''>
        {/* 1st item */}
          <div className='flex flex-col justify-center items-center my-3 md:flex-row-reverse'>
             {/* heading */}
             <div data-aos='slide-left' data-aos='fade-left' className='ml-4 lg:text-right lg:mr-36' >
              <div className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl  '>
                  Visualize coding concepts
              </div>
              <div className='font-bold  my-2 text-sm md:text-xl lg:text-xl xl:text-2xl xl:my-5'>
                  Watch Data structure and algorithm in visual compiler
              </div>
              {/* Button */}
              <div className='btn-second '  >  <Link href='/Footer'>explore now </Link></div>
             </div>
              {/* image */}
              <div data-aos='slide-right' data-aos='fade-right'  className='w-3/4 h-1/2 my-5 md:ml-12 lg:ml-16 '>
                <img src='/images/graphics 1 transparent.png' ></img>
              </div>
              
          </div>
        {/* 2nd item */}
          <div  className='flex flex-col justify-center items-center my-18 md:flex-row md:ml-12'>
             {/* heading */}
             <div data-aos='slide-right' data-aos='fade-right' className='ml-4 lg:text-left'>
              <div className='font-bold text-2xl  sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl  '>
                  Visualize coding concepts
              </div>
              <div className='font-bold  my-2 text-sm md:text-xl lg:text-xl xl:text-2xl xl:my-5'>
                  Watch Data structure and algorithm in visual compiler
              </div>
              {/* Button */}
              <div className='btn-second' >  <Link href='/Body'>Explore now </Link></div>
             </div>
              {/* image */}
              <div data-aos='slide-left' data-aos='fade-left' className='w-9/12 h-1/2 my-5  lg:ml-80 xl:ml-110 2xl:ml-120 '>
                <img src='/images/graphics 2 transparent.png' ></img>
              </div>
              
          </div>
          
        </div>
       
        
       </>
    )
}

export default body

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import {faLinkedin,faFacebook,faInstagram} from   "@fortawesome/free-brands-svg-icons"
import Link from "next/link";

const Footer = () => {
    return (
        // footer-container
        <footer className=''>
        <div className='w-screen h-full justify-center  mt-8 flex flex-col md:flex-row md:justify-around items-center bg-black'>
          {/* Text container */}
            <div className='mx-8 py-3 md:mx-10 md:py-5 lg:mx-11 lg:py-8  '>
              <div className='text-yellow-500 font-medium text-sm md:text-lg lg:text-xl '>Leave Boring Lectures</div>
              <div className='text-white font-bold text-xl md:text-2xl lg:text-3xl'>Start Using Our App Today</div>
              
              <div className='relative mt-4'>
                         
                         <input className='border-b-2  border-yellow-500 bg-transparent outline-none text-yellow-500 font-medium placeholder-gray-500 pl-6 pr-4 py-1    ' placeholder='Enter Your Email' type='text' />
                         <span className='absolute flex inset-y-0 items-center  '><FontAwesomeIcon icon={faPaperPlane} className='text-yellow-500 '/></span>
                     </div>
                     <Link href='/'><button className='btn-second mt-4 w-36 py-2 rounded-2xl'>Enter</button></Link>
                         
                    
            </div>
            <div className=' mt-5 ml-4'>
              <ul className='flex text-white uppercase gap-12 text-xs font-medium'>
                <li className='cursor-pointer text-icon-hover'>Features</li>
                <li className='cursor-pointer text-icon-hover'>benefits</li>
                <li className='cursor-pointer text-icon-hover'>Pricing</li>
                <li className='cursor-pointer text-icon-hover'>Contact</li>
              </ul>
              <div className='gap-x-5 mt-4 '>
              <div className='text-yellow-500 font-medium text-sm md:text-lg lg:text-xl '>Follow Us on</div>
               <ul className='flex mt-2 uppercase gap-12 text-xs md:text-lg font-medium'>
                <li className='cursor-pointer text  text-icon-hover '><FontAwesomeIcon icon={faFacebook} className='text-yellow-500'/></li>
                <li className='cursor-pointer  text-icon-hover'><FontAwesomeIcon icon={faInstagram} className='text-yellow-500'/></li>
                <li className='cursor-pointer text-icon-hover'><FontAwesomeIcon icon={faLinkedin} className='text-yellow-500'/></li>
              </ul>
            </div>
            </div>
        </div>
        </footer>
    )
}

export default Footer

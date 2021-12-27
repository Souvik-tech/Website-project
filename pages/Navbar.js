

import {Link} from 'react-scroll';
import NavLink from 'next/link';


const Navbar = ({toggle}) => {
    return (
     
         <nav className=' flex justify-between items-center h-16 bg-transparent  text-pink-600 font-bold
           w-screen shadow-lg '>
     
          <div className="px-4 cursor-pointer flex ">
            <div onClick={toggle}>
              <svg class="w-6 h-6 lg:hidden justify-center items-center " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path  d="M4 6h16M4 12h16M4 18h7"></path></svg>
            </div>
            <div className='w-1/3 justify-center items-center h-1/3 mt-1 ml-3 md:w-1/2 md:ml-2 md:h-1/2 lg:w-3/4 lg:h-f3/4'>
            <img src='/images/logo 1.png' ></img>
            </div>
            
            <div className='hidden   md:block md:mt-3  md:w-1/2 md:h-1/2 lg:w-full lg:h-full'>
            <img src='/images/logo font 2.png' ></img>
            </div>
           
          </div>
          
          
        <div className="pr-8 flex">
          <div className=' hidden lg:flex   rounded-lg'>
             <div className='p-4 cursor-pointer nav-hover'><Link activeClass="active" to="Body" spy={true} smooth={true} offset={50} duration={500} >
          About us
        </Link></div>
             <div className='p-4 cursor-pointer nav-hover'> <Link   activeClass="active" to="Course" spy={true} smooth={true} offset={50} duration={500}> Courses   </Link></div>    
             <div className='p-4 nav-hover'><Link   href='/Home'> Study Materials</Link></div>
             <div className='p-4 nav-hover'><Link href='/Home'> Blogs   </Link></div>  
          </div>
         <div className='p-4 nav-hover'> <NavLink   href='/signup'> Register   </NavLink></div>
         <div className='p-4 nav-hover'><NavLink  href='/login' > Login  </NavLink></div>
         
        </div>
         
         




      </nav>
     
    )
}

export default Navbar


import { Link } from "react-scroll"
import NavLink from 'next/link';


const Dropdown = ({isOpen,toggle}) => {
    return (
        <div>
          <div className={isOpen ? ' p-5 h-full absolute mt-16 divide-y divide-yellow-500  mb-4 font-medium text-purple-600 overflow-hidden text-xl w-1/2 inset-y-0 left-0 origin-top  duration-1000 scale-y-0 grid grid-rows-4 text-center items-center bg-white'
          :' p-5 h-screen absolute mt-16 divide-y divide-yellow-500 border-4 mb-4 font-medium text-purple-600 overflow-hidden text-xl w-1/2 inset-y-0 -left-full origin-top  duration-1000 scale-y-0 grid grid-rows-4 text-center items-center bg-white'}>
             <div className='p-4'><Link  activeClass="active" to="Body" spy={true} smooth={true} offset={50} duration={500}  className='cursor-pointer' > About  </Link></div>
             <div className='p-4'><Link  activeClass="active" to="Course" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer'> Courses   </Link></div>    
             <div className='p-4'><NavLink   href='/Home'> Study Materials</NavLink></div>
             <div className='p-4'><NavLink href='/Home'> Blogs   </NavLink></div>  
          </div>
        </div>
    )
}

export default Dropdown

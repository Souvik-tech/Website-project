import Head from 'next/head'
import Link from 'next/dist/client/link'
import Hero from './Hero'
import Body from './Body'

import Course from './Course'

import Navbar from "./Navbar"
import Dropdown from './Dropdown'
import { Element } from 'react-scroll'
import React,{useState ,useEffect} from "react"
import Aos from 'aos'
import 'aos/dist/aos.css';
import Footer from './Footer'
const index = () => {
  const [isOpen,setIsOpen] = useState(false)

  const toggle =()=>{
    setIsOpen(!isOpen)
  }
  useEffect(()=>{
    const hideMenu =()=>{
       if(window.innerWidth>1024 && isOpen ){
         setIsOpen(false)
         console.log('iiiii')
       }
    }
    window.addEventListener('resize',hideMenu);
    return ()=>{
      window.removeEventListener('resize',hideMenu)
    }
  });
  
  return (<>
  <Head>
    <title>Constant-A New era of learning </title>
  </Head>
  
     <Navbar toggle={toggle}/>
    
     <Hero />
    <Element name='Body'><Body/></Element> 
     <div data-aos='fade-up'><Element name='Course'><Course  /></Element></div>
     <Footer/>
     <Dropdown isOpen={isOpen} toggle={toggle} />
     
    </>
  )
}

export default index


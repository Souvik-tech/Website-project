
import Image from 'next/image'
import Link from 'next/link'

const Error = () => {
    return (
        <>
       <div className='h-screen flex justify-center items-center md:flex' >
        {/* card */}
            <div className='mx-2 flex flex-col sm:flex-row md:flex-row items-center max-w-screen-lg overflow-hidden rounded-lg  w-full md:flex '>
              <div className='w-3/4 h-1/2 my-5 md:ml-12 lg:ml-16 '>
                <img src='/images/404.png' ></img>
              </div>
              
              <div>
                  <div className='text-4xl md:text-6xl lg:text-8xl font-bold capitalize'>OOps!</div>
                  <div className='text-2xl md:text-3xl lg:6xl mt-2 font-bold capitalize'>Page not found</div> 
                  <div className='md:flex mt-5  '>
                    <div className='p-2  text-white bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl border-none
                     shadow-lg w-full flex justify-center items-center font-bold'><Link href='/'>Back to Previous Page</Link></div>
                    <br></br><div className='p-2 md:ml-3 text-white bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl border-none
                     shadow-lg w-full flex justify-center items-center font-bold'><Link href='/'>Back to Home </Link></div>
                  </div>
              </div>
              
            </div>
        </div>

       
       
</>
    )
}

export default Error

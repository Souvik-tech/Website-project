import Link from "next/link"

// import {FaUser} from 'react-icons/fa'
const login = () => {
    return (
        // container
        <>
        <div className='bg-image h-full sm:h-screen  flex justify-center items-center md:flex' >
        {/* card */}
            <div className='mx-2 my-4 flex flex-col md:flex-row items-center max-w-screen-lg overflow-hidden rounded-3xl shadow-lg bg-white w-full md:flex '>
              <div className='w-5/6 h-1/3 sm:w-3/4  md:w-full md:h-full   '>
                <img src='/images/login.png' ></img>
              </div>
              
              {/* form */}
              <div className='bg-white flex flex-col items-center p-4 space-y-8 w-full h-96 md:mr-0'>
                  {/* welcome */}
                  <div className='flex flex-col items-center'>
                      <h1 className='font-bold text-2xl md:text-4xl text-purple-500'>Welcome Back</h1>
                      <p className='text-gray-600 font-bold'>Login to Your Account</p>
                  </div>
                  {/* input */}
                  <form className='flex flex-col items-center space-y-4'>
                     <div className='relative'>
                         <span className='absolute flex inset-y-0 items-center pl-4 text-gray-400'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                         </span>
                         <input className='border border-gray-300 outline-none text-pink-600 font-medium placeholder-gray-500 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-purple-500' placeholder='username' type='text' />
                     </div>
                     <div className='relative'>
                         <span className='absolute flex inset-y-0 items-center pl-4 text-gray-400'><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                            </svg>
                         </span><span></span>
                         <input className='border border-gray-300 font-medium outline-none text-pink-600 placeholder-gray-500 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-purple-500' placeholder='password' type='password' />
                     </div>
                     <div className='p-2 text-white bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl border-none shadow-lg w-full flex justify-center items-center font-bold' type='submit'>  <Link href='/'>LOGIN</Link></div>
                  </form>

                  {/* Links */}
                  <div className='flex flex-col items-center'>
                     <p className='italic text-black'>
                         Don't have an account?
                         <Link href='/signup'>
                             <a className='ml-1 text-pink-600 hover:underline'>Register</a>
                         </Link>
                     </p>
                  </div>

              </div>
            </div>
        </div>
        </>
    )
}

export default login

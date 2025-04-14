import { assets } from '@/Assets/assets'
import axios from 'axios';
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import Link from 'next/link';
import { ArrowRight, Newspaper } from "lucide-react"

const Header = () => {

  const [email,setEmail] = useState("");

  const onSubmitHandler = async (e) =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("email",email);
    const response = await axios.post('/api/email',formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setEmail("");
    }
    else{
      toast.error("Error")
    }
  }

  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>

<div className="fixed top-0 left-0 right-0 z-50 backdrop-filter backdrop-blur-md bg-white/30 border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 sm:h-16">
          <Link href="/" className='hover:cursor-pointer hover:translate-x-1 transition delay-130 duration-300 ease-in-out'>
          <Image src={assets.logo} width={280} alt="Logo" className="w-[150px] h-[40px] sm:w-auto"  />
          </Link>
          
          <Link href="/admin">
            <button className="flex items-center gap-2 h-[35px] font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black bg-white/70 shadow-[-7px_7px_0px_#000000]  hover:translate-x-1 hover:shadow-[-5px_5px_0px_#000000] transition-all duration-200">
              Get started <Image src={assets.arrow} alt="Arrow" />
            </button>
          </Link>
        </div>
      </div>
    </div>

  {/* <div className='flex justify-between items-center '>
     
        <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto'/>
       <Link href="/admin">
       <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>Get started <Image src={assets.arrow} /></button>
       </Link> 
      </div> */}
      
      {/* //yis is the V0 version  */}
      <div className="relative py-16 px-4 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-rose-500" />
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-emerald-500" />
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-800 mb-6">
          <Newspaper className="h-4 w-4" />
          <span className="text-sm font-medium">Stay in the loop</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-600 pb-1 bg-clip-text text-transparent">
          Insights Delivered Weekly
        </h1>

        <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Join our community of curious minds and receive handpicked articles on writing, creativity, productivity, and
          the latest digital trends. No fluff, just valuable content.
        </p>

        <form onSubmit={onSubmitHandler} className="mt-10 max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:ring-1 sm:ring-slate-300 rounded-full overflow-hidden shadow-lg">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 outline-none text-slate-800 bg-white rounded-full sm:rounded-none"
              required
            />
            <button
              type="submit"
              className="bg-slate-900 text-white px-8 py-4 font-medium rounded-full sm:rounded-none flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors"
            >
              Subscribe <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-3 text-xs text-slate-500">We respect your privacy. Unsubscribe at any time.</p>
        </form>

        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white" />
            ))}
          </div>
          <p className="text-sm text-slate-600">
            Joined by <span className="font-medium">2,000+</span> readers
          </p>
        </div>
      </div>
    </div>
  
      {/* original */}
     {/* <div className='text-center my-8 mt-[80px]'>

         <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
        <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p> 
        <form onSubmit={onSubmitHandler} className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]' action="">
            <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='Enter your email' className='pl-4 outline-none' required />
            <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>
        </form>
      </div>  */}


      
    </div>








  )
}

export default Header

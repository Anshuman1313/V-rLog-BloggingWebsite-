import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
      <Image src={assets.logo_light} alt='' width={120} />
      <p className='text-sm text-white'>All right reserved. Copyright @blogger</p>
        <div className='flex'>
            {/* <Image src={assets.} alt='' width={40} /> */}
            <Link href="https://x.com/Anshuman1_3" target='_blank'>
            <Image src={assets.twitter_icon} alt='' width={30} className=' bg-white h-[31px] rounded-full mt-0.5 p-1' />
            </Link>
            <Link href="https://github.com/Anshuman1313/V-rLog-BloggingWebsite-" target='_blank'>
            <Image src={assets.social} alt='' width={30}  className='rounded-full mt-[2px] h-[31px] ml-[8px]'/>
            </Link>
            <Image src={assets.googleplus_icon} alt='' width={40} />
            
            
        </div>
    </div>
  )
}

export default Footer

import {assets} from '@/Assets/assets';
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
            <Image src={assets.logo} alt="logo" width={180} className='w-[130px] sm:w-auto' priority />
            <button className='flex items-center gap-1 font-medium px-1 py-1 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>Get Started <Image src={assets.arrow} alt="arrow"  /></button>
        </div>
        <div className='text-center my-8 '>
            <h1 className='text-3xl md:text-5xl font-medium'>Latest Blogs</h1>
            <p className='mt-10 max-w-[740px] mx-auto text-xs sm:text-base'>Discover the latest news and insights</p>
            <form className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]' action="">
                <input type="email" placeholder='Enter your email' className='pl-4outline-none bg-transparent px-2' />
                <button type="submit" className='border-l text-black px-4 py-2 sm:px-8 active:bg-blue-800 active:text-white-300 '>Subscribe</button>

            </form>
        </div>
    </div>
    );
};

export default Header;
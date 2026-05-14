import React from "react";
import {assets} from '@/Assets/assets';
import Image from "next/image";

const Footer = () => {
    return (
        <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
            <Image src={assets.logo_light} alt="logo"/>
            <p className='text-sm tracking-tight text-[#ffffff]'>All rights reserved. © 2026 NextBlog</p>
            <div className="flex">
                <Image src={assets.facebook_icon} alt="facebook" className="mx-2" />
                <Image src={assets.twitter_icon} alt="twitter" className="mx-2" />
                <Image src={assets.googleplus_icon} alt="linkedin" className="mx-2" />

            </div>
        </div>  
    );
};

export default Footer;
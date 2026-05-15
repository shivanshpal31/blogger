'use client'
import React from "react";
import { assets,blog_data } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";


const page = ({params}) => {
    const [data,setData] = React.useState(null);
    
    const resolvedParams = React.use(params);
    const fetchBlogData = async () => {
        for (let i = 0; i < blog_data.length; i++) {
            if(Number(resolvedParams.id) == blog_data[i].id){
                setData(blog_data[i]);
                break;
                console.log(data);
            }
        }
    };

    React.useEffect(() => {
        fetchBlogData();
    }, [resolvedParams.id]);

    return (
        data?<>
        <div>
            <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <Image src={assets.logo} alt="logo" width={180} className='w-[130px] sm:w-auto' />
                    </Link>
                    <button className='flex items-center gap-2 font-medium px-3 py-1 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>Get Started <Image src={assets.arrow} alt="arrow"  />
                    </button>
                </div>
                <div className="text-center my-24">
                    <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">{data.title}</h1>
                    <Image src={data.author_img} alt="blog" width={60} height={60} className="mx-auto mt-6 border border-white rounded-full" />
                    <p className="text-md mt-1 tracking-tight text-white-900">{data.author}</p>
                </div>
            </div>
            <div className="mx-6 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
                <Image className="border-4 border-white" src={data.image} alt="blog" width={1280} height={720}/>
                <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
                <p className="text-lg text-gray-700">{data.description}</p>
                <h3 className="my-5 text-[18px] font-semibold">Step 1: Self-Reflection and Goal Setting</h3>
                <p className="my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, eos rerum. Dolore voluptatibus voluptatem repellat est nisi odit voluptates sequi cum, odio cupiditate. Excepturi maiores veniam officiis fugit repellendus a?</p>

                <h3 className="my-5 text-[18px] font-semibold">Step 2: Self-Reflection and Goal Setting</h3>
                <p className="my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, eos rerum. Dolore voluptatibus voluptatem repellat est nisi odit voluptates sequi cum, odio cupiditate. Excepturi maiores veniam officiis fugit repellendus a?</p>
            
                <h3 className="my-5 text-[18px] font-semibold">Step 3: Self-Reflection and Goal Setting</h3>
                <p className="my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, eos rerum. Dolore voluptatibus voluptatem repellat est nisi odit voluptates sequi cum, odio cupiditate. Excepturi maiores veniam officiis fugit repellendus a?</p>

                <h3 className="my-5 text-[18px] font-semibold">Conclusion: </h3>
                <p className="my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, eos rerum. Dolore voluptatibus voluptatem repellat est nisi odit voluptates sequi cum, odio cupiditate. Excepturi maiores veniam officiis fugit repellendus a?</p>

                <div className="my-10">
                    <p className="text-black font-bold my-4">Share This Article On Social Media</p>
                    <div className="flex gap-4">
                        <Image src={assets.facebook_icon} alt="facebook" className="mx-2 cursor-pointer hover:opacity-50" />
                        <Image src={assets.twitter_icon} alt="twitter" className="mx-2 cursor-pointer hover:opacity-50" />
                        <Image src={assets.googleplus_icon} alt="linkedin" className="mx-2 cursor-pointer hover:opacity-50" />
                    </div>
                </div>

            </div>
        </div>
        </>:<></>
    );
}

export default page;